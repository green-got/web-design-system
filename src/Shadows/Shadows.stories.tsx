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
        <div
          style={{
            boxShadow: 'var(--shadow)',
            borderRadius: 'var(--corner-md)',
          }}
        />
        <p>--shadow</p>
      </div>
      <div>
        <div
          style={{
            backdropFilter: 'var(--blur)',
            borderRadius: 'var(--corner-md)',
          }}
        />
        <p>--blur</p>
      </div>
    </section>
  </>
);
