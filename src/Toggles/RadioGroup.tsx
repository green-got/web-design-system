'use client';
import type { ChangeEvent, ReactNode } from 'react';
import { mergeClasses } from '../utils/mergeClasses';
import styles from './RadioGroup.module.scss';

export type name = string;
export type TChangeEvent = ChangeEvent<HTMLInputElement>;

export interface IRadioProps {
  checked: boolean;
  handleChange: (e: TChangeEvent) => void;
  id: string;
  label: string;
  name: name;
  required?: boolean;
  value: string;
}

export type TRadio = Omit<
  IRadioProps,
  'checked' | 'handleChange' | 'name' | 'required'
>;

export interface IRadioGroupProps {
  checked: string;
  className?: string;
  handleChange: (e: TChangeEvent) => void;
  legend: string;
  name: name;
  radios: TRadio[];
  renderRadio: (
    radio: TRadio,
    checked: string,
    handleChange: (e: TChangeEvent) => void,
    name: name,
    required: boolean,
  ) => ReactNode;
  required?: boolean;
}

export function RadioGroup({
  checked,
  className,
  handleChange,
  legend,
  name,
  radios,
  renderRadio,
  required,
}: IRadioGroupProps) {
  return (
    <fieldset className={mergeClasses([styles['radio-group'], className])}>
      <legend>{legend}</legend>
      {radios.map((radio) =>
        renderRadio(radio, checked, handleChange, name, required),
      )}
    </fieldset>
  );
}

export function Radio({
  handleChange,
  id,
  label,
  name,
  required,
  value,
}: IRadioProps) {
  return (
    <div className={styles.radio}>
      <input
        id={id}
        name={name}
        onChange={handleChange}
        required={required}
        type="radio"
        value={value}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
