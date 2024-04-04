'use client';
import React from 'react';
import { mergeClasses } from '../utils/mergeClasses';
import styles from './Switch.module.scss';

type TAriaLabelProps = {
  ariaLabel: string;
  label?: never;
};

type THtmlLabelProps = {
  ariaLabel?: never;
  label: string;
};

export type TSwitchProps = {
  className?: string;
  checked: boolean;
  disabled?: boolean;
  handleChange: () => void;
  id: string;
} & (TAriaLabelProps | THtmlLabelProps);

export function Switch({
  ariaLabel,
  className,
  checked,
  disabled = false,
  handleChange,
  id,
  label,
}: TSwitchProps) {
  return (
    <div className={mergeClasses([styles.switch, className])}>
      {label && (
        <label
          className={mergeClasses([styles.switch, className])}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        aria-label={ariaLabel}
        aria-checked={checked}
        checked={checked}
        className={styles.track}
        disabled={disabled}
        id={id}
        onChange={handleChange}
        role="switch"
        type="checkbox"
      />
    </div>
  );
}
