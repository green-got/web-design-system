import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { Spinner } from './Spinner';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default {
  title: 'Components / Spinners',
} satisfies StoryDefault;

export const SpinnerMain: Story = () => (
  <>
    <GlobalStyles />

    <h1>Spinner</h1>

    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--colors-primary)',
        padding: 40,
        marginTop: 50,
      }}
    >
      <Spinner size="small" />

      <span style={{ padding: 20 }} />

      <Spinner />

      <span style={{ padding: 20 }} />

      <Spinner size="large" />
    </div>

    <div style={{ display: 'flex', alignItems: 'center', padding: 40 }}>
      <Spinner size="small" style="dark" />

      <span style={{ padding: 20 }} />

      <Spinner style="dark" />

      <span style={{ padding: 20 }} />

      <Spinner size="large" style="dark" />
    </div>
  </>
);
