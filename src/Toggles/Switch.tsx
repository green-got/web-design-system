'use client';
import React from 'react';
import { mergeClasses } from '../utils/mergeClasses';
import styles from './Switch.module.scss';

export interface ISwitchProps {
  className?: string;
  checked: boolean;
  disabled?: boolean;
  handleChange: () => void;
  id: string;
  label: string;
}

export function Switch({
  className,
  checked,
  disabled = false,
  handleChange,
  id,
  label,
}: ISwitchProps) {
  return (
    <label className={mergeClasses([styles.switch, className])} htmlFor={id}>
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
