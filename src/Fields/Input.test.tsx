import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('renders an input', () => {
    render(<Input handleChange={() => {}} id="a" label="Label" name="a" value="" />);
    screen.debug();
  });
});
