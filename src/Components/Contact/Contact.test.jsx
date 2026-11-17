import React, { forwardRef, useImperativeHandle } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { LanguageProvider } from '../../context/LanguageContext';
import Contact from './Contact';

const { resetCaptcha } = vi.hoisted(() => ({ resetCaptcha: vi.fn() }));

vi.mock('@hcaptcha/react-hcaptcha', () => ({
  default: forwardRef(function Captcha({ onVerify, onExpire, onError }, ref) {
    useImperativeHandle(ref, () => ({ resetCaptcha }));
    return <div>
      <button type="button" onClick={() => onVerify('verified-token')}>Verify captcha</button>
      <button type="button" onClick={onExpire}>Expire captcha</button>
      <button type="button" onClick={onError}>Fail captcha</button>
    </div>;
  }),
}));

function setup() {
  const fetchMock = vi.fn();
  vi.stubGlobal('fetch', fetchMock);
  render(<LanguageProvider><Contact /></LanguageProvider>);
  const name = screen.getByLabelText('Ditt namn');
  const email = screen.getByLabelText('Din e-postadress');
  const message = screen.getByLabelText('Ditt meddelande');
  const submit = () => fireEvent.submit(name.closest('form'));
  const fill = (address = 'visitor@example.com') => {
    fireEvent.change(name, { target: { value: 'Besökare' } });
    fireEvent.change(email, { target: { value: address } });
    fireEvent.change(message, { target: { value: 'Hej, jag vill diskutera ett projekt.' } });
  };
  const verify = () => fireEvent.click(screen.getByText('Verify captcha'));
  return { fetchMock, name, email, message, submit, fill, verify };
}

describe('contact form', () => {
  it('rejects empty fields and invalid email before contacting the service', () => {
    const { fetchMock, fill, submit, email } = setup();
    submit();
    expect(screen.getByRole('status')).toHaveTextContent('fyll i');
    fill('not-an-email');
    submit();
    expect(screen.getByRole('status')).toHaveTextContent('giltig e-postadress');
    expect(email).toHaveFocus();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('rejects oversized messages even if HTML input limits are bypassed', () => {
    const { fill, message, submit, fetchMock } = setup();
    fill();
    fireEvent.change(message, { target: { value: 'x'.repeat(5001) } });
    submit();
    expect(screen.getByRole('status')).toHaveTextContent('5 000');
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('requires a current captcha token, including after expiry', () => {
    const { fill, submit, verify, fetchMock } = setup();
    fill();
    submit();
    expect(screen.getByRole('status')).toHaveTextContent('människa');
    verify();
    fireEvent.click(screen.getByText('Expire captcha'));
    submit();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('sends the verified token once, then resets the form and starts cooldown', async () => {
    const { fill, submit, verify, fetchMock, name } = setup();
    fetchMock.mockResolvedValue({ ok: true, json: async () => ({ success: true }) });
    fill();
    verify();
    submit();
    submit();
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, request] = fetchMock.mock.calls[0];
    expect(url).toBe('https://api.web3forms.com/submit');
    expect(JSON.parse(request.body)).toMatchObject({ email: 'visitor@example.com', 'h-captcha-response': 'verified-token' });
    expect(request.signal).toBeInstanceOf(AbortSignal);
    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('Tack'));
    expect(name).toHaveValue('');
    expect(resetCaptcha).toHaveBeenCalledTimes(1);
    fill();
    verify();
    submit();
    expect(screen.getByRole('status')).toHaveTextContent('Vänta en minut');
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it.each([
    ['HTTP error', () => Promise.resolve({ ok: false, json: async () => ({ success: true }) })],
    ['service rejection', () => Promise.resolve({ ok: true, json: async () => ({ success: false }) })],
    ['network failure', () => Promise.reject(new Error('offline'))],
  ])('keeps the message and resets captcha after %s', async (_, result) => {
    const { fill, verify, submit, fetchMock, message } = setup();
    fetchMock.mockImplementation(result);
    fill();
    verify();
    submit();
    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('Det gick inte'));
    expect(message).toHaveValue('Hej, jag vill diskutera ett projekt.');
    expect(localStorage.getItem('portfolio_last_contact_ts')).toBeNull();
    expect(resetCaptcha).toHaveBeenCalledTimes(1);
    submit();
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('provides an email fallback when captcha fails to load', () => {
    setup();
    fireEvent.click(screen.getByText('Fail captcha'));
    expect(screen.getByRole('status')).toHaveTextContent('direkt via e-post');
    expect(screen.getByRole('link', { name: /ameer.tech28/ })).toHaveAttribute('href', 'mailto:ameer.tech28@gmail.com');
  });

  it('silently discards submissions that fill the honeypot', () => {
    const { fill, verify, submit, fetchMock, name } = setup();
    fill();
    verify();
    fireEvent.change(name.closest('form').elements.company_website, { target: { value: 'spam' } });
    submit();
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
