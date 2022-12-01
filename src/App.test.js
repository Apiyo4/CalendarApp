import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn chakra/i);
  expect(linkElement).toBeInTheDocument();
});
// describe('Funtion name', ()=>{
//   it('seems to work', ()=>{
//     expect(5).toBeDefined()
//     expect(5).toBe(5)
//   })
// })