import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { TextArea } from './TextArea';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default {
  title: 'Components / TextArea',
} satisfies StoryDefault;

export const InputMain: Story = () => {
  const [a, setA] = React.useState<string>('');
  const [b, setB] = React.useState<string>('');
  const [c, setC] = React.useState<string>('');
  const [d, setD] = React.useState<string>('');

  return (
    <>
      <GlobalStyles />

      <h1>Text Area</h1>
      <TextArea
        handleChange={(e) => setA(e.target.value)}
        id="a"
        label="Text"
        name="a"
        value={a}
      />

      <TextArea
        handleChange={(e) => setB(e.target.value)}
        id="b"
        label="With rows"
        name="b"
        rows={20}
        value={b}
      />

      <TextArea
        cols={50}
        handleChange={(e) => setC(e.target.value)}
        id="c"
        label="With cols"
        name="c"
        value={c}
      />

      <TextArea
        errorMessage="Provide at least 20 characters."
        handleChange={(e) => setD(e.target.value)}
        id="d"
        label="Required plus"
        minLength={20}
        name="d"
        required
        value={d}
      />
    </>
  );
};
