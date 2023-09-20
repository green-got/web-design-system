'use client';
import React from 'react';
import styles from './RadioGroup.module.scss';

export type name = string;
export type TChangeEvent = React.ChangeEvent<HTMLInputElement>;

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
  ) => React.ReactNode;
  required?: boolean;
}

export function RadioGroup({
  checked,
  handleChange,
  legend,
  name,
  radios,
  renderRadio,
  required,
}: IRadioGroupProps) {
  return (
    <fieldset className={styles['radio-group']}>
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
