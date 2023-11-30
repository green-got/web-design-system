import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { Switch } from './Switch';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default ({
  title: 'Components / Switch',
} satisfies StoryDefault);

export const SwitchMain: Story = () => {
  const [toggleA, setSwitchA] = React.useState(false);
  const [toggleB, setSwitchB] = React.useState(true);
  const [toggleC, setSwitchC] = React.useState(false);
  const [toggleD, setSwitchD] = React.useState(true);
  return (
    <>
      <GlobalStyles />

      <h1>Switch</h1>

      <Switch
        checked={toggleA}
        disabled={false}
        handleChange={() => setSwitchA(!toggleA)}
        id="a"
        label="Test A"
      />
      <Switch
        checked={toggleB}
        disabled={false}
        handleChange={() => setSwitchB(!toggleB)}
        id="b"
        label="Test B"
      />
      <Switch
        checked={toggleC}
        disabled={true}
        handleChange={() => setSwitchC(!toggleC)}
        id="c"
        label="Test C"
      />
      <Switch
        checked={toggleD}
        disabled={true}
        handleChange={() => setSwitchD(!toggleD)}
        id="d"
        label="Test D"
      />
    </>
  );
};
