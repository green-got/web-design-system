import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';
import { Infobox } from './Infobox';

export default {
  title: 'Components / Infobox',
} satisfies StoryDefault;

export const InfoMain: Story = () => {
  const [hidden, setHidden] = React.useState<boolean>(false);
  return (
    <>
      <GlobalStyles />

      <h1>Infobox</h1>
      <br />
      <Infobox theme="neutral">
        <p>Hi</p>
      </Infobox>
      <br />
      <Infobox theme="primary">
        <h2>Hello</h2>
      </Infobox>
      <br />
      <Infobox theme="success">
        <h2>Much success!</h2>
      </Infobox>
      <br />
      {!hidden ? (
        <Infobox theme="warning">
          <h2>Warning</h2>
        </Infobox>
      ) : null}
      <br />
      <Infobox theme="error">
        <h2>Ut oh</h2>
      </Infobox>
      <br />
      <h2>With borders and close buttons</h2>
      <br />
      <Infobox border dismissible theme="neutral">
        <h2>Hi</h2>
      </Infobox>
      <br />
      <Infobox border dismissible theme="primary">
        <h2>Hello</h2>
      </Infobox>
      <br />
      <Infobox border dismissible theme="success">
        <h2>Much success!</h2>
      </Infobox>
      <br />
      {!hidden ? (
        <Infobox
          border
          theme="warning"
          dismissible
          dismissHandler={() => setHidden(!hidden)}
        >
          <h2>Warning</h2>
          <p>This infobox may not stick around</p>
        </Infobox>
      ) : null}
      <br />
      <Infobox border dismissible theme="error">
        <h2>Ut oh</h2>
      </Infobox>
    </>
  );
};
