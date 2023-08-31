import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';
import styles from './Shadows.module.scss';

export default {
  title: 'Foundations / Shadows',
} satisfies StoryDefault;

export const Shadows: Story = () => (
  <GlobalStyles>
    <h1>Shadows</h1>

    <hr />

    <p>Shadows are defined in the GlobalStyles scss file.</p>

    <hr />

    <section className={styles.container}>
      <div>
        <div style={{ boxShadow: 'var(--shadow-light)' }} />
        <p>--shadow-light</p>
      </div>

      <div>
        <div style={{ boxShadow: 'var(--shadow-regular)' }} />
        <p>--shadow-regular</p>
      </div>

      <div>
        <div style={{ boxShadow: 'var(--shadow-deep)' }} />
        <p>--shadow-deep</p>
      </div>
    </section>
  </GlobalStyles>
);
