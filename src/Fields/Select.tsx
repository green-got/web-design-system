'use client';

import React, { useState } from 'react';
import styles from './Select.module.scss';

interface ISelectProps {
  children: React.ReactNode;
  disabled?: boolean;
  errorMessage?: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  isValid?: boolean;
  label: string;
  name: string;
  required?: boolean;
  requiredText?: string;
  value: string;
}

export function Select({
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
}: ISelectProps) {
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

  return (
    <div className={styles.container}>
      {required && requiredText ? (
        <div className={styles['required-text-wrapper']}>
          <label htmlFor={id}>{label}</label>
          <span>{requiredText}</span>
        </div>
      ) : (
        <label htmlFor={id}>
          {label}
          {required && !requiredText ? ' *' : ''}
        </label>
      )}
      <div className={styles['validation-wrapper']}>
        <select
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
