import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { Notification } from './Notification';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default {
  title: 'Components / Notification',
} satisfies StoryDefault;

export const NotificationMain: Story = () => {
  const [showOne, setShowOne] = React.useState(false);
  return (
    <>
      <GlobalStyles />

      <h1>Notification</h1>
      <button onClick={() => setShowOne(true)} type="button">
        Notify
      </button>

      <Notification id="a" setShow={setShowOne} show={showOne}>
        Notifying...
      </Notification>
      <br />
      <br />
    </>
  );
};
