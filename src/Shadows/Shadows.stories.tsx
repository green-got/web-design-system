import type { StoryDefault, Story } from '@ladle/react';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';
import styles from './Shadows.module.scss';

export default {
  title: 'Foundations / Shadows',
} satisfies StoryDefault;

export const Shadows: Story = () => (
  <>
    <GlobalStyles />

    <h1>Shadows</h1>

    <hr />

    <p>Shadows are defined in the GlobalStyles scss file.</p>

    <hr />

    <section className={styles.container}>
      <div>
        <div style={{ boxShadow: 'var(--shadow-xs)' }} />
        <p>--shadow-xs</p>
      </div>

      <div>
        <div style={{ boxShadow: 'var(--shadow-xs-skeuomorphic)' }} />
        <p>--shadow-xs-skeuomorphic</p>
      </div>

      <div>
        <div style={{ boxShadow: 'var(--shadow-sm)' }} />
        <p>--shadow-sm</p>
      </div>

      <div>
        <div style={{ boxShadow: 'var(--shadow-md)' }} />
        <p>--shadow-md</p>
      </div>

      <div>
        <div style={{ boxShadow: 'var(--shadow-lg)' }} />
        <p>--shadow-lg</p>
      </div>

      <div>
        <div style={{ boxShadow: 'var(--shadow-xl)' }} />
        <p>--shadow-xl</p>
      </div>

      <div>
        <div style={{ boxShadow: 'var(--shadow-2xl)' }} />
        <p>--shadow-2xl</p>
      </div>

      <div>
        <div style={{ boxShadow: 'var(--shadow-3xl)' }} />
        <p>--shadow-3xl</p>
      </div>
    </section>
  </>
);
