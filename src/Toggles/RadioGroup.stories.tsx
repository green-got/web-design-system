import React, { useRef, useState } from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { RadioGroup, Radio } from './RadioGroup';
import { Button } from '../Button';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';
import './RadioGroup.stories.scss';

export default {
  title: 'Components / RadioGroup',
} satisfies StoryDefault;

function Compose({ heading, desc }: { heading?: string; desc?: string }) {
  return (
    <>
      <h3>{heading}</h3>
      <span>{desc}</span>
    </>
  );
}

export const RadioGroupMain: Story = () => {
  const [checked, setChecked] = useState<string | undefined>(undefined);
  const [controlled, setControlled] = useState<string>('');
  const [three, setThree] = useState<string>('');
  const [includeClass, setIncludeClass] = useState<boolean>(false);
  const [klass, setKlass] = useState<string>('');
  const [complex, setComplex] = useState<string>('');
  const [form, setForm] = useState<string>('');
  const ref = useRef(null);
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

      <h2>Update programmatically</h2>
      <div>
        <Button handleClick={() => setControlled('a')}>A</Button>
        <Button handleClick={() => setControlled('b')}>B</Button>
        <Button handleClick={() => setControlled('c')}>C</Button>
        <RadioGroup
          checked={controlled}
          handleChange={(e) => setControlled(e.target.value)}
          legend="Group 2"
          name="two"
          radios={[
            { id: 'a2', label: 'A', value: 'a' },
            { id: 'b2', label: 'B', value: 'b' },
            { id: 'c2', label: 'C', value: 'c' },
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
      <h2>Pass a ref</h2>
      <form>
        <RadioGroup
          checked={three}
          handleChange={(e) => setThree(e.target.value)}
          legend="Group 3"
          name="two"
          radios={[
            { id: 'a3', label: 'A', value: 'a' },
            { id: 'b3', label: 'B', value: 'b' },
            { id: 'c3', label: 'C', value: 'c' },
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
              {...(radio.id === 'a3' ? { ref } : {})}
            />
          )}
          required
        />
        <Button
          handleClick={() => {
            if (ref.current) {
              ref.current.reportValidity();
            }
          }}
          type="button"
        >
          Validate
        </Button>
      </form>

      <h2>Radio className</h2>
      <Button handleClick={() => setIncludeClass(!includeClass)}>
        Toggle radio class
      </Button>
      <RadioGroup
        checked={klass}
        handleChange={(e) => setKlass(e.target.value)}
        legend="Group Class"
        name="class"
        radios={[
          { id: 'a4', label: 'A', value: 'a' },
          { id: 'b4', label: 'B', value: 'b' },
          { id: 'c4', label: 'C', value: 'c' },
        ]}
        renderRadio={(radio, checked, handleChange, name, required) => (
          <Radio
            checked={checked === radio.value}
            className={includeClass ? 'top' : ''}
            handleChange={handleChange}
            id={radio.id}
            key={radio.id}
            label={radio.label}
            name={name}
            radio={radio}
            required={required}
            value={radio.value}
          />
        )}
      />

      <h2>Component label</h2>
      <RadioGroup
        checked={complex}
        handleChange={(e) => setComplex(e.target.value)}
        legend="Group Complex"
        name="complex"
        radios={[
          {
            id: 'complex-a',
            label: Compose,
            heading: 'Hello',
            desc: 'My description',
            value: 'a',
          },
          {
            desc: 'All the details here',
            heading: 'Option 2',
            id: 'complex-b',
            label: Compose,
            value: 'b',
          },
          {
            desc: 'More context',
            heading: 'Number 3',
            id: 'complex-c',
            label: Compose,
            value: 'c',
          },
        ]}
        renderRadio={(radio, checked, handleChange, name, required) => (
          <Radio
            checked={checked === radio.value}
            handleChange={handleChange}
            id={radio.id}
            key={radio.id}
            label={radio.label}
            name={name}
            radio={radio}
            required={required}
            value={radio.value}
          />
        )}
      />

      <form>
        <RadioGroup
          checked={form}
          handleChange={(e) => setForm(e.target.value)}
          legend="Required field w/ custom required text"
          name="form"
          radios={[
            { id: 'form-a', label: 'A', value: 'a' },
            { id: 'form-b', label: 'B', value: 'b' },
            { id: 'form-c', label: 'C', value: 'c' },
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
          required
          requiredText="(not optional)"
        />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};
