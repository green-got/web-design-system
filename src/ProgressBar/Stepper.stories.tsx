import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { Stepper } from './Stepper';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default {
  title: 'Components / Stepper',
} satisfies StoryDefault;

export const StepperMain: Story = () => {
  const [progress, setProgress] = React.useState(50);
  return (
    <>
      <GlobalStyles />

      <h1>Stepper</h1>
      <br />
      <Stepper steps={4} />
      <br />
      <Stepper step={1} steps={4} />
      <br />
      <Stepper step={2} steps={4} />
      <br />
      <Stepper step={3} steps={4} />
      <br />
      <Stepper step={4} steps={4} />
      <br />
      <h2>Stepper with labels</h2>
      <br />
      <Stepper step={1} steps={['Step 1', 'Step 2', 'Step 3']} />
    </>
  );
};
