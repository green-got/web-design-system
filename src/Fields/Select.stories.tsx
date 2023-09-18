import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { Select } from './Select';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default {
  title: 'Components / Select',
} satisfies StoryDefault;

export const SelectMain: Story = () => {
  return (
    <>
      <GlobalStyles />

      <h1>Select</h1>

      <div>
        <Select handleChange={() => {}} id="a" label="Email" name="a">
          <option value="">echo@gmail.com</option>
          <option value="thomas">thomas@green-got.com</option>
        </Select>
      </div>

      <div>
        <Select handleChange={() => {}} id="b" label="Email" name="b">
          <option value="">echo@gmail.com</option>
          <option value="thomas">thomas@green-got.com</option>
        </Select>
      </div>

      <div>
        <Select disabled handleChange={() => {}} id="c" label="Email" name="c">
          <option value="">echo@gmail.com</option>
          <option value="thomas">thomas@green-got.com</option>
        </Select>
      </div>
    </>
  );
};
