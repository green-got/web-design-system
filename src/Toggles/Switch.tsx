'use client';
import type { ChangeEvent } from 'react';
import { mergeClasses } from '../utils/mergeClasses.js';
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
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  helperText?: string;
  id: string;
  labelClassName?: string;
} & (TAriaLabelProps | THtmlLabelProps);

export function Switch({
  ariaLabel,
  className,
  checked,
  disabled = false,
  handleChange,
  helperText,
  id,
  label,
  labelClassName,
}: TSwitchProps) {
  return (
    <div className={mergeClasses([styles.switch, className])}>
      {label && helperText && (
        <div className={styles['label-with-helper-text']}>
          <label
            className={mergeClasses([styles.label, labelClassName])}
            htmlFor={id}
          >
            {label}
          </label>
          <span>{helperText}</span>
        </div>
      )}
      {label && !helperText && (
        <label
          className={mergeClasses([styles.label, labelClassName])}
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
