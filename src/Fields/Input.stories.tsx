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
        attributes={{ maxLength: 14, pattern: '([0-9]{3}) [0-9]{3}-[0-9]{4}' }}
        id="e"
        label="US Telephone"
        handleChange={(e) =>
          setE(updateInputValue(e.target.value, e.nativeEvent.inputType))
        }
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
        attributes={{ min: 0 }}
        errorMessage="Value must be 0 or greater"
        id="a"
        label="Required non-negative number"
        handleChange={(e) => setA(e.target.value)}
        required
        type="number"
        unit="€"
        unitLabel="Euros"
        value={a}
      />
    </>
  );
};

function updateInputValue(value, inputType) {
  if (inputType === 'insertText' || inputType === 'insertFromPaste') {
    return formatPhoneNumberUS(value);
  }

  if (inputType === 'deleteContentBackward') {
    return unformatPhoneNumberUS(value);
  }
  return value;
}

function formatPhoneNumberUS(phoneNumber) {
  const clean = phoneNumber.toString().replace(/\D/g, '');
  const match = clean.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
  if (!match) {
    return clean;
  }

  const areaCode = match[1].length === 3 ? `(${match[1]}) ` : `(${match[1]}`;
  const firstThree = match[2]
    ? match[2].length === 3
      ? `${match[2]}-`
      : match[2]
    : '';
  const lastFour = match[3];
  return `${areaCode}${firstThree}${lastFour}`;
}

function unformatPhoneNumberUS(value) {
  const match = value.match(/\D$/);
  if (match) {
    return unformatPhoneNumberUS(value.slice(0, -1));
  }
  return value;
}
