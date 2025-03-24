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
  label: string;
  value: string;
} & Record<string, unknown> &
  Partial<Record<ReservedRadioProps, never>>;

type TRadioCustom = {
  id: string;
  label: ComponentType;
  value: string;
} & Record<string, unknown> &
  Partial<Record<ReservedRadioProps, never>>;

type Radio = TRadio | TRadioCustom;

export type IRadioGroupProps<T> = {
  checked?: string;
  className?: string;
  disabled?: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  legend: string;
  name: string;
  radios: T[];
  renderRadio: (
    radio: T,
    checked: string | undefined,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
    name: string,
    required: boolean,
  ) => ReactElement;
  required?: boolean;
  requiredText?: string;
};

type TLabel<R extends Radio> = R extends TRadio ? string : ComponentType;

export type TRadioProps<R extends Radio> = {
  checked: boolean;
  className?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label: TLabel<R>;
  name: string;
  radio?: R;
  ref?: RefObject<HTMLInputElement | null>;
  required?: boolean;
  value: string;
  // biome-ignore lint/complexity/noBannedTypes: <explanation>
} & (R extends TRadioCustom ? { radio: R } : {});

export function RadioGroup<R extends Radio>({
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
}: IRadioGroupProps<R>) {
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

export function Radio<R extends Radio>({
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
}: TRadioProps<R>) {
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
