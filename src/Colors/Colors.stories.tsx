import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';
import styles from './ColorsStory.module.scss';

export default {
  title: 'Foundations / Colors',
} satisfies StoryDefault;

export const Colors: Story = () => (
  <>
    <GlobalStyles />

    <h1>Colors</h1>

    <hr />

    <p>Colors are defined in the GlobalStyles scss file.</p>

    <hr />

    <section className={styles.container}>
      <h2>Neutral</h2>

      <div>
        <div style={{ backgroundColor: 'var(--colors-neutral-950)' }} />
        <p>--colors-neutral-950</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-neutral-900)' }} />
        <p>--colors-neutral-900</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-neutral-800)' }} />
        <p>--colors-neutral-800</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-neutral-700)' }} />
        <p>--colors-neutral-700</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-neutral-600)' }} />
        <p>--colors-neutral-600</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-neutral-500)' }} />
        <p>--colors-neutral-500</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-neutral-400)' }} />
        <p>--colors-neutral-400</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-neutral-300)' }} />
        <p>--colors-neutral-300</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-neutral-200)' }} />
        <p>--colors-neutral-200</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-neutral-100)' }} />
        <p>--colors-neutral-100</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-neutral-50)' }} />
        <p>--colors-neutral-50</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-neutral-25)' }} />
        <p>--colors-neutral-25</p>
      </div>
    </section>

    <section className={styles.container}>
      <h2>Primary</h2>

      <div>
        <div style={{ backgroundColor: 'var(--colors-primary-950)' }} />
        <p>--colors-primary-950</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-primary-900)' }} />
        <p>--colors-primary-900</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-primary-800)' }} />
        <p>--colors-primary-800</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-primary-700)' }} />
        <p>--colors-primary-700</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-primary-600)' }} />
        <p>--colors-primary-600</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-primary-500)' }} />
        <p>--colors-primary-500</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-primary-400)' }} />
        <p>--colors-primary-400</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-primary-300)' }} />
        <p>--colors-primary-300</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-primary-200)' }} />
        <p>--colors-primary-200</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-primary-100)' }} />
        <p>--colors-primary-100</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-primary-50)' }} />
        <p>--colors-primary-50</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-primary-25)' }} />
        <p>--colors-primary-25</p>
      </div>
    </section>

    <section className={styles.container}>
      <h2>Warning</h2>

      <div>
        <div style={{ backgroundColor: 'var(--colors-warning-950)' }} />
        <p>--colors-warning-950</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-warning-900)' }} />
        <p>--colors-warning-900</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-warning-800)' }} />
        <p>--colors-warning-800</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-warning-700)' }} />
        <p>--colors-warning-700</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-warning-600)' }} />
        <p>--colors-warning-600</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-warning-500)' }} />
        <p>--colors-warning-500</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-warning-400)' }} />
        <p>--colors-warning-400</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-warning-300)' }} />
        <p>--colors-warning-300</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-warning-200)' }} />
        <p>--colors-warning-200</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-warning-100)' }} />
        <p>--colors-warning-100</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-warning-50)' }} />
        <p>--colors-warning-50</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-warning-25)' }} />
        <p>--colors-warning-25</p>
      </div>
    </section>

    <section className={styles.container}>
      <h2>Success</h2>

      <div>
        <div style={{ backgroundColor: 'var(--colors-success-950)' }} />
        <p>--colors-success-950</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-success-900)' }} />
        <p>--colors-success-900</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-success-800)' }} />
        <p>--colors-success-800</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-success-700)' }} />
        <p>--colors-success-700</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-success-600)' }} />
        <p>--colors-success-600</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-success-500)' }} />
        <p>--colors-success-500</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-success-400)' }} />
        <p>--colors-success-400</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-success-300)' }} />
        <p>--colors-success-300</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-success-200)' }} />
        <p>--colors-success-200</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-success-100)' }} />
        <p>--colors-success-100</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-success-50)' }} />
        <p>--colors-success-50</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-success-25)' }} />
        <p>--colors-success-25</p>
      </div>
    </section>

    <section className={styles.container}>
      <h2>Error</h2>

      <div>
        <div style={{ backgroundColor: 'var(--colors-error-950)' }} />
        <p>--colors-error-950</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-error-900)' }} />
        <p>--colors-error-900</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-error-800)' }} />
        <p>--colors-error-800</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-error-700)' }} />
        <p>--colors-error-700</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-error-600)' }} />
        <p>--colors-error-600</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-error-500)' }} />
        <p>--colors-error-500</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-error-400)' }} />
        <p>--colors-error-400</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-error-300)' }} />
        <p>--colors-error-300</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-error-200)' }} />
        <p>--colors-error-200</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-error-100)' }} />
        <p>--colors-error-100</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-error-50)' }} />
        <p>--colors-error-50</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-error-25)' }} />
        <p>--colors-error-25</p>
      </div>
    </section>
  </>
);
