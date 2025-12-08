import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { PlusIcon } from '../Icons/Icons';
import { Button } from './Button';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default {
  title: 'Components / Buttons',
} satisfies StoryDefault;

function noop() {}

export const ButtonMain: Story = () => (
  <>
    <GlobalStyles />

    <h1>Button</h1>
    <br />
    <h2>Primary button</h2>
    <Button handleClick={noop}>My button</Button>
    <br />
    <br />
    <Button block handleClick={noop}>
      My button
    </Button>
    <br />
    <Button disabled handleClick={noop}>
      Disabled
    </Button>
    <br />
    <br />
    <Button aria-disabled={true} handleClick={noop}>
      Aria disabled
    </Button>

    <h2>Secondary button</h2>
    <br />
    <Button handleClick={noop} variant="secondary">
      My button
    </Button>
    <br />
    <br />
    <Button block handleClick={noop} variant="secondary">
      My button
    </Button>
    <br />
    <Button disabled handleClick={noop} variant="secondary">
      Disabled
    </Button>
    <br />
    <br />
    <Button aria-disabled={true} handleClick={noop} variant="secondary">
      Aria disabled
    </Button>

    <h2>Danger button</h2>
    <br />
    <Button handleClick={noop} variant="danger">
      My button
    </Button>
    <br />
    <br />
    <Button block handleClick={noop} variant="danger">
      My button
    </Button>
    <br />
    <Button disabled handleClick={noop} variant="danger">
      Disabled
    </Button>
    <br />
    <br />
    <Button aria-disabled={true} handleClick={noop} variant="danger">
      Aria disabled
    </Button>
  </>
);

export const IconButton: Story = () => (
  <>
    <h1>Icon Button</h1>
    <br />
    <Button round>
      <PlusIcon height={14} width={14} />
    </Button>
    <br />
    <br />
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
      <span>Hello</span>
    </Button>
    <br />
    <br />
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
      <span>Hello</span>
    </Button>
    <br />
    <Button block handleClick={noop}>
      <span>Hello</span>
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
    </Button>
    <br />
    <Button aria-label="Zap" handleClick={noop}>
      <svg
        aria-hidden="true"
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
    </Button>
  </>
);
