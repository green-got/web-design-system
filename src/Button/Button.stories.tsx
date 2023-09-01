import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { Button } from './Button';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default {
  title: 'Components / Buttons',
} satisfies StoryDefault;

export const ButtonMain: Story = () => (
  <>
    <GlobalStyles />

    <h1>button</h1>

    <Button />
  </>
);

export const PrimaryButton: Story = () => (
  <p>Here is a button component story.</p>
);

export const SecondaryButton: Story = () => (
  <p>Here is a button component story.</p>
);
