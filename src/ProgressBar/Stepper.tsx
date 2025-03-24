import React from 'react';
import styles from './Stepper.module.scss';
import { mergeClasses } from '../utils/mergeClasses';

export interface IStepperProps {
  className?: string;
  step?: number;
  steps: number | string[];
}

export function Stepper({ className, step, steps }: IStepperProps) {
  return (
    // TODO: Switch to role tablist/tab when stepper becomes interactive
    <div
      aria-valuemax={typeof steps === 'number' ? steps : steps.length}
      aria-valuemin={0}
      aria-valuenow={step}
      className={mergeClasses([styles.stepper, className])}
      role="progressbar"
      tabIndex={0}
    >
      {typeof steps === 'number'
        ? [...new Array(steps)].map((_, i) => (
            <span
              className={step && i + 1 <= step ? styles.stepped : ''}
              // biome-ignore lint/suspicious/noArrayIndexKey: order will not change
              key={i}
            />
          ))
        : steps.map((name, i) => {
            return (
              <div className={styles.step} key={name}>
                <span className={step && i + 1 <= step ? styles.stepped : ''} />
                <span>{name}</span>
              </div>
            );
          })}
    </div>
  );
}
