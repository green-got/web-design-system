import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { Checkbox } from './Checkbox';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default {
  title: 'Components / Checkbox',
} satisfies StoryDefault;

export const CheckboxMain: Story = () => (
  <>
    <GlobalStyles />

    <h1>Checkbox</h1>

    <div>
      <Checkbox id="a" label="Accept terms and conditions." />
    </div>

    <div>
      <Checkbox checked id="b" label="Accept terms and conditions." />
    </div>

    <div>
      <Checkbox checked disabled id="c" label="Accept terms and conditions." />
    </div>
  </>
);
