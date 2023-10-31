'use client';
import React, { useState } from 'react';
import { mergeClasses } from '../utils/mergeClasses';
import styles from './Input.module.scss';

export interface IInputProps {
  attributes?: {
    maxLength?: number;
    min?: number;
    pattern?: string;
    placeholder?: string;
    title?: string;
  };
  className?: string;
  disabled?: boolean;
  errorMessage?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  isValid?: boolean;
  label: string;
  required?: boolean;
  requiredText?: string;
  type?: 'date' | 'email' | 'number' | 'search' | 'tel' | 'text';
  value: string;
}

export const Input = React.forwardRef(function Input(
  {
    attributes,
    className,
    disabled,
    errorMessage,
    id,
    isValid = true,
    label,
    required,
    requiredText,
    type = 'text',
    value,
    ...props
  }: IInputProps,
  inputRef?: React.Ref<HTMLInputElement>,
) {
  const [isFieldValid, setIsFieldValid] = useState<boolean>(isValid);

  function handleChange(e) {
    const isValid = e.target.validity.valid;
    if (!isFieldValid && isValid) {
      setIsFieldValid(isValid);
    }
    props.handleChange(e);
  }

  function handleBlur(e) {
    setIsFieldValid(e.target.validity.valid);
  }

  return (
    <div className={mergeClasses([styles.container, className])}>
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
        <input
          {...attributes}
          autoCorrect="off"
          disabled={disabled}
          id={id}
          onBlur={handleBlur}
          onChange={handleChange}
          ref={inputRef}
          required={required}
          type={type}
          value={value}
        />
        {!isFieldValid && errorMessage && <span>{errorMessage}</span>}
      </div>
    </div>
  );
});
