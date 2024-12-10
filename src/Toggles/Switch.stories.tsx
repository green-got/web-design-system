import React, { useState } from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { Switch } from './Switch';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';
import './Switch.stories.scss';

export default {
  title: 'Components / Switch',
} satisfies StoryDefault;

export const SwitchMain: Story = () => {
  const [toggleA, setSwitchA] = useState(false);
  const [toggleB, setSwitchB] = useState(true);
  const [toggleC, setSwitchC] = useState(false);
  const [toggleD, setSwitchD] = useState(true);
  const [toggleE, setSwitchE] = useState(true);
  const [switchF, setSwitchF] = useState(false);
  const [switchG, setSwitchG] = useState(false);

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

      {toggleE ? (
        <Switch
          checked={switchF}
          className="top-align"
          handleChange={() => setSwitchF(!switchF)}
          id="f"
          label="Test F"
          labelClassName="recentered"
        />
      ) : (
        <Switch
          checked={switchF}
          handleChange={() => setSwitchA(!switchF)}
          id="f"
          label="Test F"
        />
      )}
      <br />

      <h2>Aria-labelled switch</h2>

      <Switch
        ariaLabel="Aria label test"
        checked={toggleE}
        handleChange={() => setSwitchE(!toggleE)}
        id="e"
      />

      <br />

      <h2>Label w/ helper text</h2>

      <Switch
        checked={switchG}
        className="top-align"
        handleChange={() => setSwitchG(!switchG)}
        helperText="This helps explain things"
        id="g"
        label="Label test"
        labelClassName="recentered"
      />
    </>
  );
};
