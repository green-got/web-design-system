import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';
import { Infobox } from './Infobox';

export default ({
  title: 'Components / Infobox',
} satisfies StoryDefault);

export const InfoMain: Story = () => {
  const [hidden, setHidden] = React.useState<boolean>(false);
  return (
    <>
      <GlobalStyles />

      <h1>Infobox</h1>

      <Infobox theme="neutral">
        <p>Hi</p>
      </Infobox>

      <Infobox theme="primary">
        <h2>Hello</h2>
      </Infobox>

      <Infobox theme="success">
        <h2>Much success!</h2>
      </Infobox>
      {!hidden ? (
        <Infobox
          theme="warning"
          dismissible
          dismissHandler={() => setHidden(!hidden)}
        >
          <h2>Warning</h2>
          <p>This infobox may not stick around</p>
        </Infobox>
      ) : null}

      <Infobox theme="error">
        <h2>Ut oh</h2>
      </Infobox>
    </>
  );
};
