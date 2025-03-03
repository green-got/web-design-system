import type { ChangeEvent, ElementType, ReactNode, RefObject } from 'react';
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
    ref?: RefObject;
    required?: boolean;
    value: string;
} & (TStringLabelProps | TJSXLabelProps) & Record<string, unknown>;
export type TRadio = Omit<TRadioProps, 'checked' | 'handleChange' | 'name' | 'required'>;
export interface IRadioGroupProps {
    checked: string;
    className?: string;
    disabled?: boolean;
    handleChange: (e: TChangeEvent) => void;
    legend: string;
    name: name;
    radios: TRadio[];
    renderRadio: (radio: TRadio, checked: string, handleChange: (e: TChangeEvent) => void, name: name, required: boolean) => ReactNode;
    required?: boolean;
    requiredText?: string;
}
export declare function RadioGroup({ checked, className, disabled, handleChange, legend, name, radios, renderRadio, required, requiredText, }: IRadioGroupProps): any;
export declare function Radio({ checked, className, handleChange, id, label, name, radio, ref, required, value, }: TRadioProps): any;
export {};
