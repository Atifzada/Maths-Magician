import React from 'react';
import { render } from '@testing-library/react';
import Quotes from '../components/Quotes';

describe('Testing calculator', () => {
  it('Should render Calculator components', () => {
    const quotes = render(<Quotes />);
    expect(quotes).toMatchSnapshot();
  });
});
