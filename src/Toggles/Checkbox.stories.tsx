import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { Checkbox } from './Checkbox';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default ({
  title: 'Components / Checkbox',
} satisfies StoryDefault);

export const CheckboxMain: Story = () => {
  return (
    <>
      <GlobalStyles />

      <h1>Checkbox</h1>

      <div>
        <Checkbox
          id="a"
          handleChange={() => {}}
          label="Accept terms and conditions."
        />
      </div>

      <div>
        <Checkbox
          checked
          id="b"
          handleChange={() => {}}
          label="Accept terms and conditions."
        />
      </div>

      <div>
        <Checkbox
          checked
          disabled
          id="c"
          handleChange={() => {}}
          label="Accept terms and conditions."
        />
      </div>
    </>
  );
};
