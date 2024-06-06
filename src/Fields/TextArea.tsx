'use client';
import { type ChangeEvent, useState } from 'react';
import { mergeClasses } from '../utils/mergeClasses';
import styles from './TextArea.module.scss';

interface ITextAreaProps {
  className?: string;
  cols?: number;
  disabled?: boolean;
  errorMessage?: string;
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  id: string;
  isValid?: boolean;
  label: string;
  maxLength?: number;
  minLength?: number;
  name: string;
  required?: boolean;
  requiredText?: string;
  rows?: number;
  value: string;
}
export function TextArea({
  className,
  cols,
  disabled,
  errorMessage,
  id,
  isValid = true,
  label,
  maxLength,
  minLength,
  name,
  required,
  requiredText,
  rows,
  value,
  ...props
}: ITextAreaProps) {
  const [isFieldValid, setIsFieldValid] = useState<boolean>(isValid);

  function getValidity(target) {
    const hasRequiredLength = isLengthWithinBounds(
      target.value.length,
      minLength,
      maxLength,
    );
    return target.validity.valid && hasRequiredLength;
  }

  function handleChange(e) {
    const isValid = getValidity(e.target);
    if (!isFieldValid && isValid) {
      setIsFieldValid(isValid);
    }
    props.handleChange(e);
  }

  function isLengthWithinBounds(
    length: number,
    min: number | undefined,
    max: number | undefined,
  ) {
    const isMinSet = typeof min === 'number';
    const isMaxSet = typeof max === 'number';
    if (isMinSet && isMaxSet) {
      return min <= length && length <= max;
    }
    if (isMinSet) {
      return min <= length;
    }

    if (isMaxSet) {
      return length <= max;
    }

    return true;
  }

  function handleBlur(e) {
    const isValid = getValidity(e.target);
    setIsFieldValid(isValid);
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
      <div className={styles['outer-wrapper']}>
        <div className={styles['validation-wrapper']}>
          <textarea
            autoCorrect="off"
            cols={cols}
            disabled={disabled}
            id={id}
            minLength={minLength}
            name={name}
            onBlur={handleBlur}
            onChange={handleChange}
            required={required}
            rows={rows}
            value={value}
          />
          {!isFieldValid && errorMessage && <span>{errorMessage}</span>}
        </div>
      </div>
    </div>
  );
}
