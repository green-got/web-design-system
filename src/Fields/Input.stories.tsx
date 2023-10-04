import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { Input } from './Input';
import { ClearableInput } from './ClearableInput';
import { UnitInput } from './UnitInput';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default {
  title: 'Components / Input',
} satisfies StoryDefault;

export const InputMain: Story = () => {
  const [a, setA] = React.useState<string>('');
  const [b, setB] = React.useState<string>('');
  const [c, setC] = React.useState<string>('');
  const [d, setD] = React.useState<string>('');
  const [e, setE] = React.useState<string>('');
  const [f, setF] = React.useState<string>('');
  const [g, setG] = React.useState<string>('');

  return (
    <>
      <GlobalStyles />

      <h1>Input</h1>
      <Input
        id="a"
        label="Text"
        handleChange={(e) => setA(e.target.value)}
        value={a}
      />

      <Input
        id="b"
        label="Email"
        handleChange={(e) => setB(e.target.value)}
        type="email"
        value={b}
      />

      <Input
        id="c"
        label="Number"
        handleChange={(e) => setC(e.target.value)}
        type="number"
        value={c}
      />

      <Input
        id="d"
        label="Search"
        handleChange={(e) => setD(e.target.value)}
        type="search"
        value={d}
      />

      <Input
        id="e"
        label="Telephone"
        handleChange={(e) => setE(e.target.value)}
        type="tel"
        value={e}
      />

      <Input
        id="f"
        label="Required text"
        handleChange={(e) => setF(e.target.value)}
        required
        type="text"
        value={f}
      />

      <Input
        errorMessage="This field is required."
        id="g"
        label="Required text w/ error message"
        handleChange={(e) => setG(e.target.value)}
        required
        type="text"
        value={g}
      />
    </>
  );
};

export const InputClearable = () => {
  const [a, setA] = React.useState('');

  return (
    <>
      <GlobalStyles />

      <h1>Clearable input</h1>

      <ClearableInput
        errorMessage="This field is required."
        id="a"
        label="Required text w/ error message"
        handleChange={(e) => setA(e.target.value)}
        required
        type="text"
        value={a}
      />
    </>
  );
};

export const InputUnit = () => {
  const [a, setA] = React.useState('');

  return (
    <>
      <GlobalStyles />

      <h1>Input with units</h1>

      <UnitInput
        errorMessage="Value must be 0 or greater"
        id="a"
        label="Required non-negative number"
        handleChange={(e) => setA(e.target.value)}
        attributes={{ min: 0 }}
        required
        type="number"
        unit="€"
        unitLabel="Euros"
        value={a}
      />
    </>
  );
};
