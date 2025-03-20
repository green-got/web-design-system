import { type ChangeEvent, type KeyboardEvent, type RefObject } from 'react';
export interface IInputProps {
    attributes?: {
        'aria-disabled'?: boolean;
        autoFocus?: boolean;
        max?: number;
        maxLength?: number;
        min?: number;
        minLength?: number;
        pattern?: string;
        placeholder?: string;
        title?: string;
    };
    className?: string;
    disabled?: boolean;
    errorMessage?: string;
    handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    id: string;
    isValid?: boolean;
    label: string;
    name: string;
    ref?: RefObject;
    required?: boolean;
    requiredText?: string;
    title?: string;
    type?: 'date' | 'email' | 'number' | 'search' | 'tel' | 'text';
    value: string;
}
export declare function Input({ attributes, className, disabled, errorMessage, handleKeyDown, id, isValid, label, name, required, requiredText, ref, title, type, value, ...props }: IInputProps): any;
