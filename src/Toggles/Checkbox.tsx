'use client';
import React from 'react';
import styles from './Checkbox.module.scss';

export const Checkbox = ({
  checked,
  disabled,
  handleChange,
  id,
  label,
  required,
  ...props
}: {
  checked?: boolean;
  disabled?: boolean;
  handleChange: () => void;
  id: string;
  label: string;
  required?: boolean;
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        checked={checked}
        className={styles.checkbox}
        disabled={disabled}
        id={id}
        onChange={handleChange}
        required={required}
        type="checkbox"
      />
      <label className="label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
