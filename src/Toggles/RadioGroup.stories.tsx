import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { RadioGroup, Radio } from './RadioGroup';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default ({
  title: 'Components / RadioGroup',
} satisfies StoryDefault);

export const RadioGroupMain: Story = () => {
  const [checked, setChecked] = React.useState<string | undefined>(undefined);
  return (
    <>
      <GlobalStyles />

      <h1>RadioGroup</h1>

      <div>
        <RadioGroup
          checked={checked}
          handleChange={(e) => setChecked(e.target.value)}
          legend="Group 1"
          name="one"
          radios={[
            { id: 'a', label: 'A', value: 'a' },
            { id: 'b', label: 'B', value: 'b' },
            { id: 'c', label: 'C', value: 'c' },
          ]}
          renderRadio={(radio, checked, handleChange, name, required) => (
            <Radio
              checked={checked === radio.value}
              handleChange={handleChange}
              id={radio.id}
              key={radio.id}
              label={radio.label}
              name={name}
              required={required}
              value={radio.value}
            />
          )}
        />
      </div>
    </>
  );
};
