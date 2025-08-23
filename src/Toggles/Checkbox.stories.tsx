import React, { useState } from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { Checkbox } from './Checkbox';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default {
  title: 'Components / Checkbox',
} satisfies StoryDefault;

export const CheckboxMain: Story = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <>
      <GlobalStyles />

      <h1>Checkbox</h1>

      <div>
        <Checkbox
          id="a"
          handleChange={() => {}}
          label="Accept terms and conditions."
          name="a"
        />
      </div>

      <div>
        <Checkbox
          checked
          id="b"
          handleChange={() => {}}
          label="Accept terms and conditions."
          name="b"
        />
      </div>

      <div>
        <Checkbox
          checked
          disabled
          id="c"
          handleChange={() => {}}
          label="Accept terms and conditions."
          name="c"
        />
      </div>

      <div>
        <Checkbox
          disabled
          id="d"
          handleChange={() => {}}
          label="Accept terms and conditions."
          name="d"
        />
      </div>

      <div>
        <Checkbox
          checked={checked}
          id="e"
          handleChange={() => setChecked(!checked)}
          label="Accept terms and conditions."
          name="e"
          required
        />
      </div>

      <div>
        <Checkbox
          defaultChecked={true}
          id="f"
          label="Default accept terms and conditions."
          name="f"
          required
        />
      </div>
    </>
  );
};
