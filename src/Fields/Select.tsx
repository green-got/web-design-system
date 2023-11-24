'use client';

import React, { useState } from 'react';
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
  children: React.ReactNode;
  disabled?: boolean;
  errorMessage?: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  isValid?: boolean;
  name: string;
  required?: boolean;
  requiredText?: string;
  value: string;
} & (TAriaLabelProps | THtmlLabelProps);

export function Select({
  ariaLabel,
  className,
  children,
  disabled,
  errorMessage,
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
  function handleBlur(e) {
    setIsFieldValid(e.target.validity.valid);
  }

  function handleChange(e) {
    const isValid = e.target.validity.valid;
    if (!isFieldValid && isValid) {
      setIsFieldValid(isValid);
    }
    props.handleChange(e);
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
