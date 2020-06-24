import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import { getQueriesForElement } from '@testing-library/dom'
// import {toHaveTextContent} from '@testing-library/jest-dom' (1)
// import * as jestDOM from '@testing-library/jest-dom' (2)
// import '@testing-library/jest-dom/extend-expect' (3) *this is the best way of doing it*
//  but this import actually is already been configured into our project in setupTest.js

import Contact from './components/Contact';

// expect.extend({toHaveTextContent}) (1)
// expect.extend(jestDOM) (2)


// this function has already been written into the testing library, just use the { render } method 
// function render(ui) {
//   const container = document.createElement('div')
//   ReactDOM.render(ui, container)
//   const queries = getQueriesForElement(container)
//   return {container, ...queries}
// }


test('renders the the email address in contact', () => {

  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  
  const div = document.createElement('div')
  ReactDOM.render(<Contact />, div)
  // we search all the child under div that associate with a label with the text of 'email'
  // and return the child
  const { getByLabelText } = getQueriesForElement(div)
  const emailLabel = getByLabelText(/email/i)
  // console.log(emailInfo.innerHTML)
  expect(emailLabel).toHaveAttribute('id', 'contact-email-address')

  // the two way have to same goal, to test the text content
  // expect(div.querySelector('label')).toHaveTextContent('Email') 
  // expect(div.querySelector('h3').textContent).toBe('aichi.p.chang [at] gmail.com') 

  const {getByText, debug} = render(<Contact />)
  const emailAddress = getByText(/aichi\.p\.chang \[at] gmail\.com/i)
  expect(emailAddress).toBeInTheDocument()

  debug()
});
