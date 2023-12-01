import React from 'react';
import styles from './ProgressBar.module.scss';

export interface IProgressBar {
  className?: string;
  id: string;
  label: string;
  max: string | number;
  value: string | number;
}
export function ProgressBar({
  className,
  id,
  label,
  max,
  value,
}: IProgressBar) {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <progress className={styles.progress} id={id} max={max} value={value} />
    </div>
  );
}
