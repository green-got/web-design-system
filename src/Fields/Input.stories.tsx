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
  const [h, setH] = React.useState<string>('');
  const [i, setI] = React.useState<string>('');
  const [j, setJ] = React.useState<string>(';lakj');
  const [k, setK] = React.useState<string>('');

  return (
    <>
      <GlobalStyles />

      <h1>Input</h1>
      <Input
        handleChange={(e) => setA(e.target.value)}
        id="a"
        label="Text"
        name="a"
        value={a}
      />

      <Input
        handleChange={(e) => setB(e.target.value)}
        id="b"
        label="Email"
        name="b"
        type="email"
        value={b}
      />

      <Input
        attributes={{ placeholder: 'harry@green-got.com' }}
        handleChange={(e) => setC(e.target.value)}
        id="c"
        label="Email with placeholder text"
        name="c"
        type="email"
        value={c}
      />

      <Input
        handleChange={(e) => setD(e.target.value)}
        id="d"
        label="Number"
        name="d"
        type="number"
        value={d}
      />

      <Input
        handleChange={(e) => setE(e.target.value)}
        id="e"
        label="Search"
        name="e"
        type="search"
        value={e}
      />

      <Input
        attributes={{ maxLength: 14, pattern: '([0-9]{3}) [0-9]{3}-[0-9]{4}' }}
        handleChange={(e) =>
          setF(updateInputValue(e.target.value, e.nativeEvent.inputType))
        }
        id="f"
        label="US Telephone"
        name="f"
        type="tel"
        value={f}
      />

      <Input
        attributes={{ maxLength: 14, pattern: '([0-9]{3}) [0-9]{3}-[0-9]{4}' }}
        handleChange={(e) => setG(e.target.value)}
        id="g"
        label="Date"
        name="g"
        type="date"
        value={g}
      />

      <Input
        handleChange={(e) => setH(e.target.value)}
        id="h"
        label="Required text"
        name="h"
        required
        type="text"
        value={h}
      />

      <Input
        errorMessage="This field is required."
        handleChange={(e) => setI(e.target.value)}
        id="i"
        label="Required text w/ error message"
        name="i"
        required
        type="text"
        value={i}
      />

      <Input
        attributes={{ pattern: 'right' }}
        errorMessage="That's not right!"
        handleChange={(e) => setJ(e.target.value)}
        id="j"
        isValid={false}
        label="Programmatically invalid text"
        name="j"
        type="text"
        value={j}
      />

      <Input
        errorMessage="This field is required"
        id="k"
        label="Input with custom require text"
        handleChange={(e) => setK(e.target.value)}
        required
        requiredText="Required"
        type="text"
        value={k}
      />
    </>
  );
};

export const InputFocus = () => {
  const [a, setA] = React.useState('');
  const inputRef = React.useRef(null);

  return (
    <>
      <GlobalStyles />

      <h1>Input focusing</h1>

      <button
        onClick={() => {
          inputRef.current.focus();
        }}
        type="button"
      >
        Focus input
      </button>
      <Input
        handleChange={(e) => setA(e.target.value)}
        id="a"
        label="Focusable"
        ref={inputRef}
        type="text"
        value={a}
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
        name="clearly"
        required
        type="text"
        value={a}
      />
    </>
  );
};

export const InputUnit = () => {
  const [a, setA] = React.useState('');
  const [b, setB] = React.useState('');
  const [c, setC] = React.useState('');

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
        name="units"
        required
        type="number"
        unit="€"
        unitLabel="Euros"
        value={a}
      />

      <h2>Input with leading unit</h2>
      <UnitInput
        attributes={{ min: 0 }}
        errorMessage="Value must be 0 or greater"
        id="b"
        label="Required non-negative number"
        handleChange={(e) => setB(e.target.value)}
        name="units"
        required
        type="number"
        unit="€"
        unitLabel="Euros"
        unitPlacement="start"
        value={b}
      />

      <h2>Prevent non-numeric character input</h2>
      <UnitInput
        attributes={{ min: 0 }}
        errorMessage="Value must be 0 or greater"
        id="c"
        label="Required non-negative number"
        handleKeyDown={(e) => {
          if (!e.key.match(/[0-9]/g)) {
            e.preventDefault();
          }
        }}
        handleChange={(e) => setC(e.target.value)}
        name="units"
        required
        type="text"
        unit="€"
        unitLabel="Euros"
        value={c}
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
