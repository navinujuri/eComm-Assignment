import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Heroimg from './Heroimg';

describe('Heroimg Component', () => {
  test('renders image and link to home', () => {
    const { getByText, getByAltText } = render(
      <Router>
        <Heroimg />
      </Router>
    );
  
    // Check if the image is rendered
    const introImg = getByAltText(/intro/i);
    expect(introImg).toBeInTheDocument();
  
    // Check if the link is rendered and has correct text
    const linkElement = getByText(/page not found/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });
});
