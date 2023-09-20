import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { Button } from './Button';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default {
  title: 'Components / Buttons',
} satisfies StoryDefault;

function noop() {}

export const ButtonMain: Story = () => (
  <>
    <GlobalStyles />

    <h1>button</h1>

    <Button handleClick={noop}>My button</Button>

    <Button block handleClick={noop}>
      {' '}
      My button
    </Button>

    <Button disabled handleClick={noop}>
      Disabled
    </Button>
  </>
);

export const PrimaryButton: Story = () => (
  <p>Here is a button component story.</p>
);

export const SecondaryButton: Story = () => (
  <p>Here is a button component story.</p>
);

export const IconButton: Story = () => (
  <>
    <h1>Icon Button</h1>
    <Button handleClick={noop}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <title>Zap</title>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
      Hello
    </Button>

    <Button block handleClick={noop}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <title>Zap</title>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
      Hello
    </Button>
  </>
);
