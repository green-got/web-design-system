import type { RefObject } from 'react';
export interface ICheckboxProps {
    checked?: boolean;
    className?: string;
    disabled?: boolean;
    handleChange?: () => void;
    id: string;
    label: string;
    name: string;
    ref?: RefObject;
    required?: boolean;
}
export declare function Checkbox({ checked, className, disabled, handleChange, id, label, name, ref, required, }: ICheckboxProps): any;
