import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import Contact from './components/Contact';

test('renders the the email address in contact', () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/aichi/i);
  // expect(linkElement).toBeInTheDocument();
  
  const div = document.createElement('div')
  ReactDOM.render(<Contact />, div)
  expect(div.querySelector('label').textContent).toBe('aichi.p.chang [at] gmail.com') 
});
