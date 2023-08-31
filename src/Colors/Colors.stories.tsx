import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';
import styles from './ColorsStory.module.scss';

export default {
  title: 'Foundations / Colors',
} satisfies StoryDefault;

export const Colors: Story = () => (
  <GlobalStyles>
    <h1>Colors</h1>

    <hr />

    <p>Colors are defined in the GlobalStyles scss file.</p>

    <hr />

    <section className={styles.container}>
      <h2>Neutral</h2>

      <div>
        <div style={{ backgroundColor: 'var(--colors-neutral-black)' }} />
        <p>--colors-neutral-black</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-neutral-dark)' }} />
        <p>--colors-neutral-dark</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-neutral-regular)' }} />
        <p>--colors-neutral-regular</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-neutral-medium)' }} />
        <p>--colors-neutral-medium</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-neutral-light)' }} />
        <p>--colors-neutral-light</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-neutral-sand)' }} />
        <p>--colors-neutral-sand</p>
      </div>

      <div>
        <div style={{ backgroundColor: 'var(--colors-neutral-white)' }} />
        <p>--colors-neutral-white</p>
      </div>
    </section>

    <section className={styles.container}>
      <h2>Neutral</h2>
      <div>
        <div style={{ backgroundColor: 'var(--colors-primary-dark)' }} />
        <p>--colors-primary-dark</p>
      </div>
      <div>
        <div style={{ backgroundColor: 'var(--colors-primary)' }} />
        <p>--colors-primary</p>
      </div>
      <div>
        <div style={{ backgroundColor: 'var(--colors-primary-medium)' }} />
        <p>--colors-primary-medium</p>
      </div>
      <div>
        <div style={{ backgroundColor: 'var(--colors-primary-light)' }} />
        <p>--colors-primary-light</p>
      </div>
    </section>

    <section className={styles.container}>
      <h2>Error</h2>
      <div>
        <div style={{ backgroundColor: 'var(--colors-error-dark)' }} />
        <p>--colors-error-dark</p>
      </div>
      <div>
        <div style={{ backgroundColor: 'var(--colors-error)' }} />
        <p>--colors-error</p>
      </div>
      <div>
        <div style={{ backgroundColor: 'var(--colors-error-medium)' }} />
        <p>--colors-error-medium</p>
      </div>
      <div>
        <div style={{ backgroundColor: 'var(--colors-error-light)' }} />
        <p>--colors-error-light</p>
      </div>
    </section>

    <section className={styles.container}>
      <h2>Success</h2>
      <div>
        <div style={{ backgroundColor: 'var(--colors-success-dark)' }} />
        <p>--colors-success-dark</p>
      </div>
      <div>
        <div style={{ backgroundColor: 'var(--colors-success)' }} />
        <p>--colors-success</p>
      </div>
      <div>
        <div style={{ backgroundColor: 'var(--colors-success-medium)' }} />
        <p>--colors-success-medium</p>
      </div>
      <div>
        <div style={{ backgroundColor: 'var(--colors-success-light)' }} />
        <p>--colors-success-light</p>
      </div>
    </section>

    <section className={styles.container}>
      <h2>Warning</h2>
      <div>
        <div style={{ backgroundColor: 'var(--colors-warning-dark)' }} />
        <p>--colors-warning-dark</p>
      </div>
      <div>
        <div style={{ backgroundColor: 'var(--colors-warning)' }} />
        <p>--colors-warning</p>
      </div>
      <div>
        <div style={{ backgroundColor: 'var(--colors-warning-medium)' }} />
        <p>--colors-warning-medium</p>
      </div>
      <div>
        <div style={{ backgroundColor: 'var(--colors-warning-light)' }} />
        <p>--colors-warning-light</p>
      </div>
    </section>
  </GlobalStyles>
);
