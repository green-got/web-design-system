import { type ChangeEvent, type ElementType, type ReactNode } from 'react';
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
} & (TStringLabelProps | TJSXLabelProps) & Record<string, unknown>;
export type TRadio = Omit<TRadioProps, 'checked' | 'handleChange' | 'name' | 'required'>;
export interface IRadioGroupProps {
    checked: string;
    className?: string;
    handleChange: (e: TChangeEvent) => void;
    legend: string;
    name: name;
    radios: TRadio[];
    renderRadio: (radio: TRadio, checked: string, handleChange: (e: TChangeEvent) => void, name: name, required: boolean) => ReactNode;
    required?: boolean;
}
export declare function RadioGroup({ checked, className, handleChange, legend, name, radios, renderRadio, required, }: IRadioGroupProps): any;
export declare const Radio: any;
export {};
