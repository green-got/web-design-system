import type { ChangeEvent, ComponentType, ReactElement, RefObject } from 'react';
declare const restrictedKeys: readonly ["checked", "handleChange", "name", "required"];
type ReservedRadioProps = (typeof restrictedKeys)[number];
type TRadio = {
    id: string;
    label: string;
    value: string;
} & Record<string, unknown> & Partial<Record<ReservedRadioProps, never>>;
type TRadioCustom = {
    id: string;
    label: ComponentType;
    value: string;
} & Record<string, unknown> & Partial<Record<ReservedRadioProps, never>>;
type Radio = TRadio | TRadioCustom;
export type IRadioGroupProps<T> = {
    checked?: string;
    className?: string;
    disabled?: boolean;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    legend: string;
    name: string;
    radios: T[];
    renderRadio: (radio: T, checked: string | undefined, handleChange: (e: ChangeEvent<HTMLInputElement>) => void, name: string, required: boolean) => ReactElement;
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
} & (R extends TRadioCustom ? {
    radio: R;
} : {});
export declare function RadioGroup<R extends Radio>({ checked, className, disabled, handleChange, legend, name, radios, renderRadio, required, requiredText, }: IRadioGroupProps<R>): import("react/jsx-runtime").JSX.Element;
export declare function Radio<R extends Radio>({ checked, className, handleChange, id, label, name, radio, ref, required, value, }: TRadioProps<R>): import("react/jsx-runtime").JSX.Element;
export {};
