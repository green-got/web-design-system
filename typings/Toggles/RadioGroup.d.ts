import React from 'react';
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
export declare function RadioGroup({
  checked,
  handleChange,
  legend,
  name,
  radios,
  renderRadio,
  required,
}: IRadioGroupProps): JSX.Element;
export declare function Radio({
  handleChange,
  id,
  label,
  name,
  required,
  value,
}: IRadioProps): JSX.Element;
