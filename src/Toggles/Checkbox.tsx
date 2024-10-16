'use client';

import { forwardRef, type Ref } from 'react';
import { mergeClasses } from '../utils/mergeClasses';
import styles from './Checkbox.module.scss';

export interface ICheckboxProps {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  handleChange: () => void;
  id: string;
  label: string;
  name: string;
  required?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  function Checkbox(
    {
      checked,
      className,
      disabled,
      handleChange,
      id,
      label,
      name,
      required,
    }: ICheckboxProps,
    inputRef?: Ref<HTMLInputElement>,
  ) {
    return (
      <div className={mergeClasses([styles.container, className])}>
        <input
          checked={checked}
          className={styles.checkbox}
          disabled={disabled}
          id={id}
          name={name}
          onChange={handleChange}
          ref={inputRef}
          required={required}
          type="checkbox"
        />
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      </div>
    );
  },
);
