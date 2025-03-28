'use client';

import {
  type ChangeEvent,
  type FocusEvent,
  type KeyboardEvent,
  type ReactNode,
  useState,
} from 'react';
import { mergeClasses } from '../utils/mergeClasses';
import styles from './Select.module.scss';

type TAriaLabelProps = {
  ariaLabel: string;
  label?: never;
};

type THtmlLabelProps = {
  ariaLabel?: never;
  label: string;
};

type TSelectProps = {
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  errorMessage?: string;
  handleChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleKeyDown?: (event: KeyboardEvent<HTMLSelectElement>) => void;
  id: string;
  isValid?: boolean;
  name: string;
  required?: boolean;
  requiredText?: string;
  value?: string;
} & (TAriaLabelProps | THtmlLabelProps);

export function Select({
  ariaLabel,
  className,
  children,
  disabled,
  errorMessage,
  handleKeyDown,
  label,
  id,
  isValid = true,
  name,
  required,
  requiredText,
  value,
  ...props
}: TSelectProps) {
  const [isFieldValid, setIsFieldValid] = useState<boolean>(isValid);
  function handleBlur(e: FocusEvent<HTMLSelectElement>) {
    setIsFieldValid(e.target.validity.valid);
  }

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const isValid = e.target.validity.valid;
    if (!isFieldValid && isValid) {
      setIsFieldValid(isValid);
    }
    props.handleChange?.(e);
  }

  const labelElement =
    required && requiredText ? (
      <div className={styles['required-text-wrapper']}>
        <label htmlFor={id}>{label}</label>
        <span>{requiredText}</span>
      </div>
    ) : (
      <label htmlFor={id}>
        {label}
        {required && !requiredText ? ' *' : ''}
      </label>
    );

  return (
    <div className={mergeClasses([styles.container, className])}>
      {label ? labelElement : null}
      <div className={styles['validation-wrapper']}>
        <select
          aria-label={ariaLabel}
          className={styles.select}
          disabled={disabled}
          id={id}
          name={name}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          required={required}
          value={value}
        >
          {children}
        </select>
        {!isFieldValid && errorMessage && <span>{errorMessage}</span>}
      </div>
    </div>
  );
}
