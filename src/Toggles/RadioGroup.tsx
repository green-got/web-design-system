'use client';
import React from 'react';
import styles from './RadioGroup.module.scss';

export type name = string;

export interface IRadioProps {
  id: string;
  label: string;
  name: name;
}

export type IRadio = Omit<IRadioProps, 'name'>;

export interface IRadioGroupProps {
  legend: string;
  name: name;
  radios: IRadio[];
  renderRadio: (radio: IRadio, name: name) => React.ReactElement;
}

export function RadioGroup({
  legend,
  name,
  radios,
  renderRadio,
}: IRadioGroupProps) {
  return (
    <fieldset className={styles['radio-group']}>
      <legend>{legend}</legend>
      {radios.map((radio) => renderRadio(radio, name))}
    </fieldset>
  );
}

export function Radio({ id, label, name }: IRadioProps) {
  return (
    <div className={styles.radio}>
      <input id={id} name={name} type="radio" />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
