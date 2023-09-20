'use client';
import React from 'react';
import styles from './Select.module.scss';

interface ISelectProps {
  children: React.ReactNode;
  disabled?: boolean;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  label: string;
  name: string;
  required?: boolean;
  value: string;
}

export function Select({
  children,
  disabled,
  handleChange,
  label,
  id,
  name,
  required,
  value,
}: ISelectProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>
      <select
        className={styles.select}
        disabled={disabled}
        id={id}
        name={name}
        onChange={handleChange}
        required={required}
        value={value}
      >
        {children}
      </select>
    </div>
  );
}
