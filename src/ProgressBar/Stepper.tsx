import React from 'react';
import styles from './Stepper.module.scss';
import { mergeClasses } from '../utils/mergeClasses';

export interface IStepperProps {
  className?: string;
  step?: number;
  steps: number;
}

export function Stepper({ className, step, steps }: IStepperProps) {
  return (
    // TODO: Switch to role tablist/tab when stepper becomes interactive
    <div
      aria-valuemax={steps}
      aria-valuemin="0"
      aria-valuenow={step}
      className={mergeClasses([styles.stepper, className])}
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
