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
  const [isOpenFive, setIsOpenFive] = React.useState<boolean>(false);
  const [isOpenSix, setIsOpenSix] = React.useState<boolean>(false);
  const [isOpenSeven, setIsOpenSeven] = React.useState<boolean>(false);
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

      <Button handleClick={() => setIsOpenFive(true)}>
        Match media determines fullscreen or not
      </Button>
      <Dialog
        dismissable={true}
        handleClose={() => setIsOpenFive(false)}
        id="five"
        isFullscreen={window.matchMedia('(max-width: 60rem)').matches}
        isOpen={isOpenFive}
      >
        <h1>Fullscreen: yes or no?</h1>
      </Dialog>

      <Button handleClick={() => setIsOpenSix(true)}>Dialog w/ form</Button>
      <Dialog
        handleClose={() => setIsOpenSix(false)}
        id="six"
        isOpen={isOpenSix}
      >
        <form>
          <input type="text" />
        </form>
      </Dialog>

      <br />
      <br />
      <Button handleClick={() => setIsOpenSeven(true)}>
        Dialog w/ lots o' content
      </Button>
      <Dialog
        dismissable={true}
        handleClose={() => setIsOpenSeven(false)}
        hasOverflowIndicator={true}
        id="seven"
        isOpen={isOpenSeven}
      >
        <h2>Make my content overflow</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit dui, lobortis
          cubilia hendrerit ante turpis pretium proin, vestibulum semper congue
          interdum duis in platea. Nec cubilia dictumst sed, per congue morbi,
          cursus sagittis. Curabitur purus scelerisque erat fringilla justo ut
          velit morbi enim, in litora pellentesque placerat orci ridiculus fusce
          lacinia, senectus phasellus pulvinar ornare rutrum nam porta viverra.
        </p>
        <p>
          Felis turpis euismod neque dictum dui luctus placerat ligula rutrum
          vel, pharetra tincidunt eleifend arcu scelerisque quisque rhoncus urna
          proin tempor, magnis est gravida interdum senectus suspendisse quam
          congue auctor. Magnis placerat arcu sagittis interdum convallis
          iaculis felis, faucibus aliquam ullamcorper porta in per gravida, diam
          magna pulvinar natoque aliquet integer. Interdum placerat vitae
          inceptos augue arcu luctus hac senectus eu accumsan consequat semper
          vestibulum dictumst, blandit sem varius elementum proin fermentum
          mauris convallis magna tincidunt morbi lacinia felis ullamcorper,
          eleifend praesent auctor nisi egestas metus malesuada mollis duis
          libero venenatis dignissim molestie. Mollis duis scelerisque leo
          pulvinar himenaeos lacus risus malesuada, vivamus inceptos lacinia
          quisque aenean eros lobortis feugiat, luctus placerat donec egestas
          venenatis accumsan class.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit dui, lobortis
          cubilia hendrerit ante turpis pretium proin, vestibulum semper congue
          interdum duis in platea. Nec cubilia dictumst sed, per congue morbi,
          cursus sagittis. Curabitur purus scelerisque erat fringilla justo ut
          velit morbi enim, in litora pellentesque placerat orci ridiculus fusce
          lacinia, senectus phasellus pulvinar ornare rutrum nam porta viverra.
        </p>
      </Dialog>
    </>
  );
};
