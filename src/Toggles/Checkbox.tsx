'use client';
import React from 'react';
import styles from './Checkbox.module.scss';

export const Checkbox = ({
  checked,
  disabled,
  handleChange,
  id,
  label,
  name,
  required,
  ...props
}: {
  checked?: boolean;
  disabled?: boolean;
  handleChange: () => void;
  id: string;
  label: string;
  name: string;
  required?: boolean;
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <input
        checked={checked}
        className={styles.checkbox}
        disabled={disabled}
        id={id}
        name={name}
        onChange={handleChange}
        required={required}
        type="checkbox"
      />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
