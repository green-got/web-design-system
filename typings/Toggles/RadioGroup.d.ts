import type { ChangeEvent, FC, ReactElement, RefObject } from 'react';
export type TChangeEvent = ChangeEvent<HTMLInputElement>;
type TStringLabelProps = {
    label: string;
    radio?: TRadioProps;
};
type TJSXLabelProps = {
    label: FC;
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
declare const restrictedKeys: readonly ["checked", "handleChange", "name", "required"];
type ReservedRadioProps = (typeof restrictedKeys)[number];
export type TRadio = Omit<TRadioProps, ReservedRadioProps> & Record<string, unknown> & Partial<Record<ReservedRadioProps, never>>;
export interface IRadioGroupProps {
    checked: string;
    className?: string;
    disabled?: boolean;
    handleChange: (e: TChangeEvent) => void;
    legend: string;
    name: string;
    radios: TRadio[];
    renderRadio: (radio: TRadio, checked: string, handleChange: (e: TChangeEvent) => void, name: string, required: boolean) => ReactElement;
    required?: boolean;
    requiredText?: string;
}
export declare function RadioGroup({ checked, className, disabled, handleChange, legend, name, radios, renderRadio, required, requiredText, }: IRadioGroupProps): any;
export declare function Radio({ checked, className, handleChange, id, label, name, radio, ref, required, value, }: TRadioProps): any;
export {};
