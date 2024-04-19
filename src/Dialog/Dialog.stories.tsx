import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { Button } from '../Button';
import { Dialog } from './Dialog';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default {
  title: 'Components / Dialog',
} satisfies StoryDefault;

export const DialogMain: Story = () => {
  const [isOpenOne, setIsOpenOne] = React.useState<boolean>(false);
  const [isOpenTwo, setIsOpenTwo] = React.useState<boolean>(false);
  const [isOpenThree, setIsOpenThree] = React.useState<boolean>(false);
  const [isOpenFour, setIsOpenFour] = React.useState<boolean>(false);
  return (
    <>
      <GlobalStyles />

      <h1>Dialog</h1>
      <Button handleClick={() => setIsOpenOne(true)}>Show dialog</Button>
      <Dialog
        handleClose={() => setIsOpenOne(false)}
        id="one"
        isOpen={isOpenOne}
      >
        <h1>First Dialog</h1>
      </Dialog>

      <Button handleClick={() => setIsOpenTwo(true)}>
        Show fullscreen dialog
      </Button>
      <Dialog
        handleClose={() => setIsOpenTwo(false)}
        id="two"
        isFullscreen
        isOpen={isOpenTwo}
      >
        <h1>Fullscreen Dialog</h1>
        <p>(Tap Esc to exit)</p>
      </Dialog>

      <Button handleClick={() => setIsOpenThree(true)}>
        Dialog w/ close btn
      </Button>
      <Dialog
        dismissable={true}
        handleClose={() => setIsOpenThree(false)}
        id="three"
        isOpen={isOpenThree}
      >
        <h1>Dialog w/ close btn</h1>
      </Dialog>

      <Button handleClick={() => setIsOpenFour(true)}>
        Fullscreen dialog w/ close btn
      </Button>
      <Dialog
        dismissable={true}
        handleClose={() => setIsOpenFour(false)}
        id="four"
        isFullscreen
        isOpen={isOpenFour}
      >
        <h1>Fullscreen Dialog w/ close btn</h1>
      </Dialog>
    </>
  );
};
