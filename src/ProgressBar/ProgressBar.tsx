import React from 'react';
import styles from './ProgressBar.module.scss';

export type TProgressAriaLabel = {
  ariaLabel: string;
  label?: never;
};

export type TProgressHtmlLabel = {
  ariaLabel?: never;
  label: string;
};

export type TProgressBarProps = {
  className?: string;
  id: string;
  label: string;
  max: string | number;
  value: string | number;
} & (TProgressAriaLabel | TProgressHtmlLabel);

export function ProgressBar({
  ariaLabel,
  className,
  id,
  label,
  max,
  value,
}: TProgressBarProps) {
  return (
    <div className={className}>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <progress
        aria-label={ariaLabel}
        className={styles.progress}
        id={id}
        max={max}
        value={value}
      />
    </div>
  );
}
