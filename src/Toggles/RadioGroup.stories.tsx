import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { RadioGroup, Radio } from './RadioGroup';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default {
  title: 'Components / RadioGroup',
} satisfies StoryDefault;

export const RadioGroupMain: Story = () => {
  return (
    <>
      <GlobalStyles />

      <h1>RadioGroup</h1>

      <div>
        <RadioGroup
          legend="Group 1"
          name="one"
          radios={[
            { id: 'a', label: 'A' },
            { id: 'b', label: 'B' },
            { id: 'c', label: 'C' },
          ]}
          renderRadio={(radio, name) => (
            <Radio
              id={radio.id}
              key={radio.id}
              label={radio.label}
              name={name}
            />
          )}
        />
      </div>
    </>
  );
};
