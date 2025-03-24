'use client';
import type {
  ChangeEvent,
  ComponentType,
  ReactElement,
  ReactNode,
  RefObject,
} from 'react';
import { mergeClasses } from '../utils/mergeClasses.js';
import styles from './RadioGroup.module.scss';

const restrictedKeys = ['checked', 'handleChange', 'name', 'required'] as const;
type ReservedRadioProps = (typeof restrictedKeys)[number];

type TRadio = {
  id: string;
  label: string | ComponentType;
  value: string;
} & Record<string, unknown> &
  Partial<Record<ReservedRadioProps, never>>;

export interface IRadioGroupProps {
  checked?: string;
  className?: string;
  disabled?: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  legend: string;
  name: string;
  radios: TRadio[];
  renderRadio: (
    radio: TRadio,
    checked: string | undefined,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
    name: string,
    required: boolean,
  ) => ReactElement;
  required?: boolean;
  requiredText?: string;
}

interface IRadio {
  id: string;
  label: string;
  value: string;
}

type TRadios = {
  radios: IRadio[];
  renderRadio: (
    radio: IRadio,
    checked: string | undefined,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
    name: string,
    required: boolean,
  ) => ReactElement;
};

type TRadiosCustom = {
  radios: TRadio[];
  renderRadio: (
    radio: TRadio,
    checked: string | undefined,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
    name: string,
    required: boolean,
  ) => ReactElement;
};

type TRadioGroupProps = {
  checked?: string;
  className?: string;
  disabled?: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  legend: string;
  name: string;
  radios: TRadio[];
  renderRadio: (
    radio: TRadio,
    checked: string | undefined,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
    name: string,
    required: boolean,
  ) => ReactElement;
  required?: boolean;
  requiredText?: string;
} & (TRadios | TRadiosCustom);

interface IRadioProps {
  checked: boolean;
  className?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label: string | ComponentType;
  name: string;
  radio?: IRadio | TRadio;
  ref?: RefObject<HTMLInputElement | null>;
  required?: boolean;
  value: string;
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
  required = false,
  requiredText,
}: TRadioGroupProps) {
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
}: IRadioProps) {
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
        {typeof label === 'string'
          ? label
          : isCallable(label)
            ? label(radio)
            : value}
      </label>
    </div>
  );
}

function isCallable(fn: unknown): fn is (...args: unknown[]) => ReactNode {
  return typeof fn === 'function';
}
