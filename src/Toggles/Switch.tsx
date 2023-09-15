'use client';
import React from 'react';
import styles from './Switch.module.scss';

export interface ISwitchProps {
  checked: boolean;
  disabled: boolean;
  handleChange: () => void;
  id: string;
  label: string;
}

export function Switch({
  checked,
  disabled,
  handleChange,
  id,
  label,
}: ISwitchProps) {
  return (
    <label className={styles.switch} htmlFor={id}>
      {label}
      <input
        aria-checked={checked}
        checked={checked}
        className={styles.track}
        disabled={disabled}
        id={id}
        onChange={handleChange}
        role="switch"
        type="checkbox"
      />
    </label>
  );
}
