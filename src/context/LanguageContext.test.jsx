import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { expect, it, vi } from 'vitest';
import { LanguageProvider, useLanguage } from './LanguageContext';

function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  return <button onClick={() => setLang('en')}>{lang}</button>;
}

it('updates the page language when browser storage is blocked', () => {
  vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('blocked'); });
  vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('blocked'); });
  render(<LanguageProvider><LanguageToggle /></LanguageProvider>);
  fireEvent.click(screen.getByRole('button', { name: 'sv' }));
  expect(document.documentElement.lang).toBe('en');
  expect(screen.getByRole('button')).toHaveTextContent('en');
});
