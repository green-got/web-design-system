import { type ChangeEvent, type KeyboardEvent, type RefObject } from 'react';
export interface IInputProps {
    attributes?: {
        'aria-disabled'?: boolean;
        autoFocus?: boolean;
        inputMode?: 'numeric' | 'decimal';
        max?: number | string;
        maxLength?: number;
        min?: number | string;
        minLength?: number;
        pattern?: string;
        placeholder?: string;
        title?: string;
    };
    className?: string;
    defaultValue?: string;
    disabled?: boolean;
    errorMessage?: string;
    handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    id: string;
    isValid?: boolean;
    label: string;
    name: string;
    ref?: RefObject<HTMLInputElement | null>;
    required?: boolean;
    requiredText?: string;
    title?: string;
    type?: 'date' | 'datetime-local' | 'email' | 'number' | 'search' | 'tel' | 'text';
    value?: string;
}
export declare function Input({ attributes, className, defaultValue, disabled, errorMessage, handleKeyDown, id, isValid, label, name, required, requiredText, ref, title, type, value, ...props }: IInputProps): import("react/jsx-runtime").JSX.Element;
