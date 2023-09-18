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
}

export function Select(props: ISelectProps) {
  return (
    <div className={styles.container}>
      <label>{props.label}</label>
      <select
        className={styles.select}
        disabled={props.disabled}
        name={props.name}
      >
        {props.children}
      </select>
    </div>
  );
}
