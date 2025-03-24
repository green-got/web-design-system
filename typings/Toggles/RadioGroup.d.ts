import type { ChangeEvent, ComponentType, ReactElement, RefObject } from 'react';
declare const restrictedKeys: readonly ["checked", "handleChange", "name", "required"];
type ReservedRadioProps = (typeof restrictedKeys)[number];
type TRadio = {
    id: string;
    label: string | ComponentType;
    value: string;
} & Record<string, unknown> & Partial<Record<ReservedRadioProps, never>>;
export interface IRadioGroupProps {
    checked?: string;
    className?: string;
    disabled?: boolean;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    legend: string;
    name: string;
    radios: TRadio[];
    renderRadio: (radio: TRadio, checked: string | undefined, handleChange: (e: ChangeEvent<HTMLInputElement>) => void, name: string, required: boolean) => ReactElement;
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
    renderRadio: (radio: IRadio, checked: string | undefined, handleChange: (e: ChangeEvent<HTMLInputElement>) => void, name: string, required: boolean) => ReactElement;
};
type TRadiosCustom = {
    radios: TRadio[];
    renderRadio: (radio: TRadio, checked: string | undefined, handleChange: (e: ChangeEvent<HTMLInputElement>) => void, name: string, required: boolean) => ReactElement;
};
type TRadioGroupProps = {
    checked?: string;
    className?: string;
    disabled?: boolean;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    legend: string;
    name: string;
    radios: TRadio[];
    renderRadio: (radio: TRadio, checked: string | undefined, handleChange: (e: ChangeEvent<HTMLInputElement>) => void, name: string, required: boolean) => ReactElement;
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
export declare function RadioGroup({ checked, className, disabled, handleChange, legend, name, radios, renderRadio, required, requiredText, }: TRadioGroupProps): import("react/jsx-runtime").JSX.Element;
export declare function Radio({ checked, className, handleChange, id, label, name, radio, ref, required, value, }: IRadioProps): import("react/jsx-runtime").JSX.Element;
export {};
