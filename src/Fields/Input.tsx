'use client';
import {
  type ChangeEvent,
  type KeyboardEvent,
  type RefObject,
  useState,
} from 'react';
import { mergeClasses } from '../utils/mergeClasses';
import styles from './Input.module.scss';

export interface IInputProps {
  attributes?: {
    'aria-disabled'?: boolean;
    autoFocus?: boolean;
    max?: number;
    maxLength?: number;
    min?: number;
    minLength?: number;
    pattern?: string;
    placeholder?: string;
    title?: string;
  };
  className?: string;
  disabled?: boolean;
  errorMessage?: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  id: string;
  isValid?: boolean;
  label: string;
  name: string;
  ref?: RefObject;
  required?: boolean;
  requiredText?: string;
  title?: string;
  type?: 'date' | 'email' | 'number' | 'search' | 'tel' | 'text';
  value: string;
}

export function Input({
  attributes,
  className,
  disabled,
  errorMessage,
  handleKeyDown = () => {},
  id,
  isValid = true,
  label,
  name,
  required,
  requiredText,
  ref,
  title,
  type = 'text',
  value,
  ...props
}: IInputProps) {
  const [isFieldValid, setIsFieldValid] = useState<boolean>(isValid);

  function handleChange(e) {
    props.handleChange?.(e);

    const isValid = e.target.validity.valid;
    if (!isFieldValid && isValid) {
      setIsFieldValid(isValid);
    }
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
          name={name}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onWheel={(e) => {
            if (type === 'number') {
              e.currentTarget.blur();
            }
          }}
          ref={ref}
          required={required}
          title={title}
          type={type}
          value={value}
        />
        {!isFieldValid && errorMessage && <span>{errorMessage}</span>}
      </div>
    </div>
  );
}
