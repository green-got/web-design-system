import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { ProgressBar } from './ProgressBar';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default ({
  title: 'Components / ProgressBar',
} satisfies StoryDefault);

export const ProgressBarMain: Story = () => {
  const [progress, setProgress] = React.useState(50);
  return (
    <>
      <GlobalStyles />

      <h1>ProgressBar</h1>

      <ProgressBar id="a" label="Progress" max={1} value={0} />

      <ProgressBar id="b" label="Progress" max={100} value={25} />

      <ProgressBar id="c" label="Progress" max={100} value={50} />

      <ProgressBar id="d" label="Progress" max={100} value={75} />

      <ProgressBar id="e" label="Progress" max={100} value={100} />

      <ProgressBar id="f" label={`${progress}%`} max={100} value={progress} />
      <input
        onChange={(e) => setProgress(e.target.value)}
        type="range"
        value={progress}
      />
    </>
  );
};
