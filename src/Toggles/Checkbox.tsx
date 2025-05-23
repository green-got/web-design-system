'use client';

import type { ChangeEvent, RefObject } from 'react';
import { mergeClasses } from '../utils/mergeClasses';
import styles from './Checkbox.module.scss';

export interface ICheckboxProps {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label: string;
  name: string;
  ref?: RefObject<HTMLInputElement | null>;
  required?: boolean;
}

export function Checkbox({
  checked,
  className,
  disabled,
  handleChange,
  id,
  label,
  name,
  ref,
  required,
}: ICheckboxProps) {
  return (
    <div className={mergeClasses([styles.container, className])}>
      <input
        aria-disabled={disabled}
        checked={checked}
        className={styles.checkbox}
        disabled={disabled}
        id={id}
        name={name}
        onChange={handleChange}
        ref={ref}
        required={required}
        type="checkbox"
      />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
