import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { Button } from './Button';

export default {
  title: 'Components / Buttons',
} satisfies StoryDefault;

export const ButtonMain: Story = () => (
  <p>
    <h1>button</h1>

    <Button />
  </p>
);

export const PrimaryButton: Story = () => (
  <p>Here is a button component story.</p>
);

export const SecondaryButton: Story = () => (
  <p>Here is a button component story.</p>
);
