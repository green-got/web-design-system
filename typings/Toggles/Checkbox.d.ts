import type { ChangeEvent, RefObject } from 'react';
export interface ICheckboxProps {
    checked?: boolean;
    className?: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    id: string;
    label: string;
    name: string;
    ref?: RefObject<HTMLInputElement | null>;
    required?: boolean;
}
export declare function Checkbox({ checked, className, defaultChecked, disabled, handleChange, id, label, name, ref, required, }: ICheckboxProps): import("react/jsx-runtime").JSX.Element;
