import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { ProgressBar } from './ProgressBar';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default {
  title: 'Components / ProgressBar',
} satisfies StoryDefault;

export const ProgressBarMain: Story = () => {
  const [progress, setProgress] = React.useState(50);
  return (
    <>
      <GlobalStyles />

      <h1>ProgressBar</h1>

      <ProgressBar id="a" label="Progress" max={1} value={0} />
      <br />
      <br />
      <ProgressBar id="b" label="Progress 2" max={100} value={25} />
      <br />
      <br />
      <ProgressBar ariaLabel="Progress 3" id="c" max={100} value={50} />
      <br />
      <br />
      <ProgressBar id="d" label="Progress 4" max={100} value={75} />
      <br />
      <br />
      <ProgressBar id="e" label="Progress 5" max={100} value={100} />
      <br />
      <br />
      <ProgressBar id="f" label={`${progress}%`} max={100} value={progress} />
      <br />
      <br />
      <input
        onChange={(e) => setProgress(e.target.value)}
        type="range"
        value={progress}
      />
    </>
  );
};
