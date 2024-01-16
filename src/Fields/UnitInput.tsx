'use client';
import React, { useRef, useState } from 'react';
import { IInputProps } from './Input';
import styles from './Input.module.scss';

interface IUnitInputProps extends IInputProps {
  unit: string;
  unitLabel: string;
}

export function UnitInput({
  attributes,
  disabled,
  errorMessage,
  id,
  label,
  name,
  required,
  type = 'text',
  unit,
  unitLabel,
  value,
  ...props
}: IUnitInputProps) {
  const [isValid, setIsValid] = useState<boolean>(true);
  const unitRef = useRef(null);

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
          {...attributes}
          autoCorrect="off"
          disabled={disabled}
          id={id}
          name={name}
          onBlur={handleBlur}
          onChange={handleChange}
          required={required}
          style={{
            paddingInlineEnd: unitRef.current
              ? `${unitRef.current.getBoundingClientRect().width}px`
              : `calc(${unit.length}ex + 2.6rem)`,
          }}
          type={type}
          value={value}
        />
        <abbr ref={unitRef} title={unitLabel}>
          {unit}
        </abbr>
        {!isValid && errorMessage && <span>{errorMessage}</span>}
      </div>
    </div>
  );
}
