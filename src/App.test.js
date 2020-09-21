<<<<<<< HEAD
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
 // const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
=======
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
 // const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
>>>>>>> 10eb53c94dfc8ed2bcc76681fd8f9f64161c7e6a
