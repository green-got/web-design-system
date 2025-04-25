import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';
import { Fox, Head, Principal, Running, Sitting, Stacked } from './Logo';

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
          background: 'var(--colors-primary-dark)',
          color: 'var(--colors-neutral-white)',
          margin: '2rem',
          padding: '1rem',
        }}
      >
        <Fox height={132} width={110} />
        <span style={{ display: 'inline-block', margin: '0 2rem' }} />
        <Principal height={200} width={300} />
        <span style={{ display: 'inline-block', margin: '0 2rem' }} />
        <Stacked height={200} width={90} />
        <span style={{ display: 'inline-block', margin: '0 2rem' }} />
        <Head height={78} width={79} />
        <span style={{ display: 'inline-block', margin: '0 2rem' }} />
        <Running height={248} width={120} />
        <span style={{ display: 'inline-block', margin: '0 2rem' }} />
        <Sitting height={90} width={92} />
      </div>

      <div
        style={{
          backgroundColor: 'var(--colors-primary)',
          color: 'var(--colors-primary-dark)',
          margin: '2rem',
          padding: '1rem',
        }}
      >
        <Fox height={132} width={110} />
        <span style={{ display: 'inline-block', margin: '0 2rem' }} />
        <Principal height={200} width={300} />
        <span style={{ display: 'inline-block', margin: '0 2rem' }} />
        <Stacked height={200} width={90} />
        <span style={{ display: 'inline-block', margin: '0 2rem' }} />
        <Head height={78} width={79} />
        <span style={{ display: 'inline-block', margin: '0 2rem' }} />
        <Running height={248} width={120} />
        <span style={{ display: 'inline-block', margin: '0 2rem' }} />
        <Sitting height={90} width={92} />
      </div>
    </>
  );
};
