import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { SegmentedController } from './SegmentedController';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default {
  title: 'Components / SegmentedController',
} satisfies StoryDefault;

export const SegmentedControllerMain: Story = () => {
  const [a, setA] = React.useState<string>('identifier');
  const [b, setB] = React.useState<string>('yat');
  return (
    <>
      <GlobalStyles />

      <h1>SegmentedController</h1>
      <br />
      <SegmentedController
        activeId={a}
        segments={[
          { id: 'identifier', label: 'Label' },
          { id: 'dupe', label: 'Label' },
        ]}
        handleClick={(e) => setA(e.target.id)}
      />
      <br />
      <br />
      <SegmentedController
        activeId={b}
        segments={[
          { id: 'asc-desc', label: 'body' },
          { id: 'swe', label: 'Hej!' },
          { id: 'yat', label: 'Yet another test' },
        ]}
        handleClick={(e) => setB(e.target.id)}
      />
      <br />
    </>
  );
};
