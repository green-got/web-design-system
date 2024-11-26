import React, { useState } from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { Select } from './Select';
import { Button } from '../Button';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default {
  title: 'Components / Select',
} satisfies StoryDefault;

export const SelectMain: Story = () => {
  const [a, setA] = useState<string>('');
  const [b, setB] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <GlobalStyles />

      <h1>Select</h1>

      <div style={{ marginBlock: '2rem' }}>
        <Select
          handleChange={(e) => setA(e.target.value)}
          id="a"
          label="Email"
          name="a"
          value={a}
        >
          <option value="">echo@gmail.com</option>
          <option value="thomas">thomas@green-got.com</option>
        </Select>
      </div>

      <div style={{ marginBlock: '2rem' }}>
        <Select
          errorMessage="This field is required"
          handleChange={(e) => setB(e.target.value)}
          id="b"
          label="Email"
          name="b"
          required
          value={b}
        >
          <option value="">echo@gmail.com</option>
          <option value="thomas">thomas@green-got.com</option>
        </Select>
      </div>

      <div style={{ marginBlock: '2rem' }}>
        <Select
          disabled
          handleChange={() => {}}
          id="c"
          label="Email"
          name="c"
          value=""
        >
          <option value="">echo@gmail.com</option>
          <option value="thomas">thomas@green-got.com</option>
        </Select>
      </div>

      <div style={{ marginBlock: '2rem' }}>
        <Select
          handleChange={() => {}}
          id="d"
          label="Email"
          name="d"
          required
          requiredText="For sure required"
          value=""
        >
          <option value="">echo@gmail.com</option>
          <option value="thomas">thomas@green-got.com</option>
        </Select>
      </div>

      <h2 style={{ fontSize: '1.6rem' }}>
        Usage with aria-label instead of label
      </h2>
      <div style={{ marginBlock: '2rem' }}>
        <Select
          ariaLabel="Email"
          handleChange={() => {}}
          id="d"
          name="d"
          required
          requiredText="For sure required"
          value=""
        >
          <option value="">echo@gmail.com</option>
          <option value="thomas">thomas@green-got.com</option>
        </Select>
      </div>

      <h2 style={{ fontSize: '1.6rem' }}>Handle keydown</h2>
      {toggle && <p>Submits form</p>}
      <form
        onSubmit={(e) => {
          setToggle(!toggle);
          e.preventDefault();
        }}
      >
        <Select
          ariaLabel="Form stuff"
          handleChange={() => {}}
          id="e"
          name="e"
          value=""
        >
          <option value="">tap enter when focused</option>
        </Select>
        <Select
          ariaLabel="Form stuff"
          handleChange={() => {}}
          handleKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
          }}
          id="f"
          name="f"
          value=""
        >
          <option value="">tap enter when focused</option>
        </Select>
        <Button type="submit">This works too</Button>
      </form>
    </>
  );
};
