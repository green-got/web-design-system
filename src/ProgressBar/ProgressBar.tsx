import React from 'react';
import styles from './ProgressBar.module.scss';

export function ProgressBar({
  id,
  label,
  max,
  value,
}: {
  id: string;
  label: string;
  max: string | number;
  value: string | number;
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <progress className={styles.progress} id={id} max={max} value={value} />
    </>
  );
}
