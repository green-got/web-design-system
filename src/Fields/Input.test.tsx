import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('renders an input', () => {
    render(<Input handleChange={() => {}} id="a" label="Label" value="" />);
    screen.debug();
  });
});
