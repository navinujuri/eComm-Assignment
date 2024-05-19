import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  test('renders location information correctly', () => {
    render(<Footer />);
    const locationElement = screen.getByText(/Ramachandrapuram/i);
    expect(locationElement).toBeInTheDocument();

    const stateElement = screen.getByText(/Andhra Pradesh/i);
    expect(stateElement).toBeInTheDocument();
  });

  test('renders phone number correctly', () => {
    render(<Footer />);
    const phoneNumberElement = screen.getByText('+91 9876543210');
    expect(phoneNumberElement).toBeInTheDocument();
  });

  test('renders email address correctly', () => {
    render(<Footer />);
    const emailElement = screen.getByText(/eComm@gmail.com/i);
    expect(emailElement).toBeInTheDocument();
  });

  test('renders the Code Cupid text correctly', () => {
    render(<Footer />);
    const cupidElement = screen.getByText(/Code Cupid/i);
    expect(cupidElement).toBeInTheDocument();

    const cupidDescriptionElement = screen.getByText(/In the realm of love, I'm a coding whiz,/i);
    expect(cupidDescriptionElement).toBeInTheDocument();
  });

  test('renders all icons correctly', () => {
    render(<Footer />);
    const homeIcon = screen.getByTestId('home-icon');
    expect(homeIcon).toBeInTheDocument();

    const phoneIcon = screen.getByTestId('phone-icon');
    expect(phoneIcon).toBeInTheDocument();

    const emailIcon = screen.getByTestId('email-icon');
    expect(emailIcon).toBeInTheDocument();
  });
});
