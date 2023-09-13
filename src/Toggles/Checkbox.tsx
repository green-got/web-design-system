'use client';
import React from 'react';
import styles from './Checkbox.module.scss';

export const Checkbox = ({
  checked,
  disabled,
  handleChange,
  id,
  label,
  ...props
}: {
  checked?: boolean;
  disabled?: boolean;
  handleChange: () => void;
  id: string;
  label: string;
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        checked={checked}
        className={styles.checkbox}
        disabled={disabled}
        id={id}
        onChange={handleChange}
        type="checkbox"
      />
      <label className="Label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
