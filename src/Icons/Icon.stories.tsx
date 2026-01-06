import type { StoryDefault, Story } from '@ladle/react';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';
import { Icon } from './Icon';
import { Head } from '../Logo';
import {
  LeftRightArrowsIcon,
  LockIcon,
  UpDownArrowsIcon,
  UpRightArrowIcon,
  UserIcon,
} from './Icons';

export default {
  title: 'Components / Icon',
} satisfies StoryDefault;

export const IconMain: Story = () => {
  return (
    <>
      <GlobalStyles />

      <h1>Icon</h1>
      <section
        style={{
          backgroundColor: 'var(--colors-primary-700)',
          padding: 'var(--spacing-md)',
        }}
      >
        <Icon size="md" variant="dark-light">
          <UserIcon height={24} width={24} />
        </Icon>
        <br />
        <br />
        <Icon size="lg">
          <UserIcon height={24} width={24} />
        </Icon>
        <br />
        <br />
        <Icon corner="soft">
          <LockIcon height={20} width={20} />
        </Icon>
        <br />
        <br />
        <Icon size="md" corner="round" variant="dark">
          <LeftRightArrowsIcon height={24} width={24} />
        </Icon>
        <br />
        <br />
        <Icon corner="hard" size="lg" variant="dark">
          <UpRightArrowIcon height={24} width={24} />
        </Icon>
        <br />
        <br />
        <Icon size="md" corner="round" variant="light">
          <Head height={46} width={46} />
        </Icon>
        <br />
        <br />
      </section>
    </>
  );
};
