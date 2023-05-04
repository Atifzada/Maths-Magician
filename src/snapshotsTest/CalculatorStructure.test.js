import React from 'react';
import { render } from '@testing-library/react';
import CalculatorStructure from '../components/CalculatorStructure';

describe('Testing calculator', () => {
  it('Should render Calculator components', () => {
    const calPage = render(<CalculatorStructure />);
    expect(calPage).toMatchSnapshot();
  });
});
