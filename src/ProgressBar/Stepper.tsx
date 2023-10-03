import React from 'react';
import styles from './Stepper.module.scss';

export interface IStepper {
  step?: number;
  steps: number;
}

export function Stepper({ step, steps }: IStepper) {
  return (
    // TODO: Switch to role tablist/tab when stepper becomes interactive
    <div
      aria-valuemax={steps}
      aria-valuemin="0"
      aria-valuenow={step}
      className={styles.stepper}
      role="progressbar"
    >
      {[...new Array(steps)].map((_, i) => (
        <span
          className={step && i + 1 <= step ? styles.stepped : ''}
          // biome-ignore lint/suspicious/noArrayIndexKey: order will not change
          key={i}
        />
      ))}
    </div>
  );
}
