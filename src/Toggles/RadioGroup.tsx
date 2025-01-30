'use client';
import {
  type ChangeEvent,
  type ElementType,
  forwardRef,
  type ReactNode,
  type Ref,
} from 'react';
import { mergeClasses } from '../utils/mergeClasses';
import styles from './RadioGroup.module.scss';

export type name = string;
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
  name: name;
  required?: boolean;
  value: string;
} & (TStringLabelProps | TJSXLabelProps) &
  Record<string, unknown>;

export type TRadio = Omit<
  TRadioProps,
  'checked' | 'handleChange' | 'name' | 'required'
>;

export interface IRadioGroupProps {
  checked: string;
  className?: string;
  disabled?: boolean;
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

export const Radio = forwardRef<HTMLInputElement, TRadioProps>(function Radio(
  {
    checked,
    className,
    handleChange,
    id,
    label,
    name,
    radio,
    required,
    value,
  }: TRadioProps,
  inputRef?: Ref<HTMLInputElement>,
) {
  return (
    <div className={mergeClasses([styles.radio, className])}>
      <input
        checked={checked}
        id={id}
        name={name}
        onChange={handleChange}
        ref={inputRef}
        required={required}
        type="radio"
        value={value}
      />
      <label htmlFor={id}>
        {typeof label === 'string' ? label : label(radio)}
      </label>
    </div>
  );
});
