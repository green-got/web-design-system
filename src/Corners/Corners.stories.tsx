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
        <div style={{ borderRadius: 'var(--corner-xs)' }} />
        <p>--corner-xs</p>
      </div>

      <div>
        <div style={{ borderRadius: 'var(--corner-sm)' }} />
        <p>--corner-sm</p>
      </div>

      <div>
        <div style={{ borderRadius: 'var(--corner-md)' }} />
        <p>--corner-md</p>
      </div>

      <div>
        <div style={{ borderRadius: 'var(--corner-lg)' }} />
        <p>--corner-lg</p>
      </div>
    </section>
  </>
);
