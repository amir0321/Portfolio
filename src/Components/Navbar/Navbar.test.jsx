import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LanguageProvider } from '../../context/LanguageContext';
import Navbar from './Navbar';

describe('navigation', () => {
  it('closes on Escape and returns focus to the menu toggle', () => {
    render(<LanguageProvider><Navbar /></LanguageProvider>);
    const toggle = screen.getByRole('button', { name: 'Öppna eller stäng menyn' });
    expect(toggle).toHaveAttribute('aria-controls', 'primary-navigation');
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(toggle).toHaveFocus();
  });

  it('closes after choosing a section or clicking outside navigation', () => {
    render(<LanguageProvider><Navbar /></LanguageProvider>);
    const toggle = screen.getByRole('button', { name: 'Öppna eller stäng menyn' });
    fireEvent.click(toggle);
    fireEvent.click(screen.getByRole('link', { name: 'Projekt' }));
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByRole('link', { name: 'Projekt' })).toHaveAttribute('aria-current', 'location');
    fireEvent.click(toggle);
    fireEvent.pointerDown(document.body);
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });
});
