import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';
import { Bug, Lockup } from './Logo';

export default {
  title: 'Foundations / Logo',
} satisfies StoryDefault;

export const LogoMain: Story = () => {
  return (
    <>
      <GlobalStyles />

      <h1>Logo</h1>

      <div
        style={{
          background: 'var(--colors-primary)',
          color: 'var(--colors-neutral-white)',
          margin: '2rem',
          padding: '1rem',
        }}
      >
        <Bug height={100} width={130} />
        <span style={{ display: 'inline-block', margin: '0 2rem' }} />
        <Lockup height={100} width={300} />
      </div>

      <div
        style={{
          color: 'var(--colors-primary)',
          margin: '2rem',
          padding: '1rem',
        }}
      >
        <Bug height={100} width={130} />
        <span style={{ display: 'inline-block', margin: '0 2rem' }} />
        <Lockup height={100} width={300} />
      </div>
    </>
  );
};
