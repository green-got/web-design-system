'use client';
import React, { useState, useRef } from 'react';
import { CircledXIcon } from '../Icons';
import { IInputProps } from './Input';
import styles from './Input.module.scss';

export function ClearableInput({
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
  const inputRef = useRef(null);

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
      <div
        className={styles['validation-wrapper']}
        style={{ position: 'relative' }}
      >
        <input
          autoCorrect="off"
          disabled={disabled}
          id={id}
          onBlur={handleBlur}
          onChange={handleChange}
          ref={inputRef}
          required={required}
          style={{ paddingInlineEnd: '4rem' }}
          type={type}
          value={value}
        />
        {!!value.length && (
          <button
            className={styles['clear-btn']}
            onClick={() => {
              props.handleChange({ target: { value: '' } });
              if (inputRef.current) {
                inputRef.current.focus();
              }
            }}
            type="button"
          >
            <CircledXIcon height={16} width={16} />
          </button>
        )}
        {!isValid && errorMessage && <span>{errorMessage}</span>}
      </div>
    </div>
  );
}
