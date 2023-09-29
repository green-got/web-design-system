import React from 'react';
import styles from './Stepper.module.scss';

export interface IStepper {
  step?: number;
  steps: number;
}

export function Stepper({ step, steps }: IStepper) {
  return (
    // TODO: Depending on whether the stepper is interactive or not will determine the correct
    // accessibility role(s)
    <div className={styles.stepper} role="tablist">
      {[...new Array(steps)].map((_, i) => (
        <span
          className={step && i + 1 <= step ? styles.stepped : ''}
          // biome-ignore lint/suspicious/noArrayIndexKey: order will not change
          key={i}
          role="tab"
        />
      ))}
    </div>
  );
}
