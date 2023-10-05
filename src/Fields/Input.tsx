'use client';
import React, { useState } from 'react';
import styles from './Input.module.scss';

export interface IInputProps {
  attributes?: {
    maxLength?: number;
    min?: number;
    pattern?: string;
    title?: string;
  };
  disabled?: boolean;
  errorMessage?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label: string;
  required?: boolean;
  type?: 'email' | 'number' | 'search' | 'tel' | 'text';
  value: string;
}

export function Input({
  attributes,
  disabled,
  errorMessage,
  id,
  label,
  required,
  type = 'text',
  value,
  ...props
}: IInputProps) {
  const [isValid, setIsValid] = useState<boolean>(true);

  function handleChange(e) {
    if (!isValid) {
      setIsValid(e.target.validity.valid);
    }
    props.handleChange(e);
  }

  function handleBlur(e) {
    setIsValid(e.target.validity.valid);
  }

  return (
    <div className={styles.container}>
      <label htmlFor={id}>
        {label}
        {required ? ' *' : ''}
      </label>
      <div className={styles['validation-wrapper']}>
        <input
          {...attributes}
          autoCorrect="off"
          disabled={disabled}
          id={id}
          onBlur={handleBlur}
          onChange={handleChange}
          required={required}
          type={type}
          value={value}
        />
        {!isValid && errorMessage && <span>{errorMessage}</span>}
      </div>
    </div>
  );
}
