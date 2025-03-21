'use client';
import type { ChangeEvent, ElementType, ReactElement, RefObject } from 'react';
import { mergeClasses } from '../utils/mergeClasses';
import styles from './RadioGroup.module.scss';

export type TChangeEvent = ChangeEvent<HTMLInputElement>;

type TStringLabelProps = {
  label: string;
  radio?: TRadioProps;
};

type TJSXLabelProps = {
  label: ElementType;
  radio: TRadio;
};

export type TRadioProps = {
  checked: boolean;
  className?: string;
  handleChange: (e: TChangeEvent) => void;
  id: string;
  name: string;
  ref?: RefObject;
  required?: boolean;
  value: string;
} & (TStringLabelProps | TJSXLabelProps);

const restrictedKeys = ['checked', 'handleChange', 'name', 'required'] as const;
type ReservedRadioProps = (typeof restrictedKeys)[number];
export type TRadio = Omit<TRadioProps, ReservedRadioProps> &
  Record<string, unknown> &
  Partial<Record<ReservedRadioProps, never>>;

export interface IRadioGroupProps {
  checked: string;
  className?: string;
  disabled?: boolean;
  handleChange: (e: TChangeEvent) => void;
  legend: string;
  name: string;
  radios: TRadio[];
  renderRadio: (
    radio: TRadio,
    checked: string,
    handleChange: (e: TChangeEvent) => void,
    name: string,
    required: boolean,
  ) => ReactElement;
  required?: boolean;
  requiredText?: string;
}

export function RadioGroup({
  checked,
  className,
  disabled,
  handleChange,
  legend,
  name,
  radios,
  renderRadio,
  required,
  requiredText,
}: IRadioGroupProps) {
  return (
    <fieldset
      aria-disabled={disabled}
      className={mergeClasses([styles['radio-group'], className])}
      disabled={disabled}
    >
      <legend>
        {legend}
        {required ? (requiredText ? ` ${requiredText}` : ' *') : ''}
      </legend>
      {radios.map((radio) =>
        renderRadio(radio, checked, handleChange, name, required),
      )}
    </fieldset>
  );
}

export function Radio({
  checked,
  className,
  handleChange,
  id,
  label,
  name,
  radio,
  ref,
  required,
  value,
}: TRadioProps) {
  return (
    <div className={mergeClasses([styles.radio, className])}>
      <input
        checked={checked}
        id={id}
        name={name}
        onChange={handleChange}
        ref={ref}
        required={required}
        type="radio"
        value={value}
      />
      <label htmlFor={id}>
        {typeof label === 'string' ? label : label(radio)}
      </label>
    </div>
  );
}
