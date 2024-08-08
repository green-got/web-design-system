import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';
import styles from './Corners.module.scss';

export default {
  title: 'Foundations / Corners',
} satisfies StoryDefault;

export const Corners: Story = () => (
  <>
    <GlobalStyles />

    <h1>Corners</h1>

    <hr />

    <p>Corners are defined in the GlobalStyles scss file.</p>

    <hr />

    <section className={styles.container}>
      <div>
        <div style={{ borderRadius: 'var(--corner-xsmall)' }} />
        <p>--corner--xsmall</p>
      </div>

      <div>
        <div style={{ borderRadius: 'var(--corner-small)' }} />
        <p>--corner--small</p>
      </div>

      <div>
        <div style={{ borderRadius: 'var(--corner-medium)' }} />
        <p>--corner--medium</p>
      </div>

      <div>
        <div style={{ borderRadius: 'var(--corner-big)' }} />
        <p>--corner--big</p>
      </div>
    </section>
  </>
);
