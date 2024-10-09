'use client';

import { mergeClasses } from '../utils/mergeClasses';
import styles from './Checkbox.module.scss';

export const Checkbox = ({
  checked,
  className,
  disabled,
  handleChange,
  id,
  label,
  name,
  required,
  ...props
}: {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  handleChange: () => void;
  id: string;
  label: string;
  name: string;
  required?: boolean;
}) => {
  return (
    <div className={mergeClasses([styles.container, className])}>
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
