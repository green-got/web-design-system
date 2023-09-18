import React from 'react';
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
export declare function RadioGroup({
  legend,
  name,
  radios,
  renderRadio,
}: IRadioGroupProps): JSX.Element;
export declare function Radio({ id, label, name }: IRadioProps): JSX.Element;
