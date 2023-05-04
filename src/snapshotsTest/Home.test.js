import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';

describe('Testing calculator', () => {
  it('Should render Calculator components', () => {
    const home = render(<Home />);
    expect(home).toMatchSnapshot();
  });
});
