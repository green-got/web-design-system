import { type ChangeEvent, type FocusEvent, type InputHTMLAttributes, type KeyboardEvent, type RefObject } from 'react';
export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    defaultValue?: string;
    disabled?: boolean;
    errorMessage?: string;
    handleBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    id: string;
    isValid?: boolean;
    label?: string;
    name: string;
    ref?: RefObject<HTMLInputElement | null>;
    required?: boolean;
    requiredText?: string;
    title?: string;
    type?: 'date' | 'datetime-local' | 'email' | 'number' | 'search' | 'tel' | 'text';
    value?: string;
}
export declare function Input({ className, defaultValue, disabled, errorMessage, handleBlur, handleChange, handleKeyDown, id, isValid, label, name, required, requiredText, ref, title, type, value, ...props }: IInputProps): import("react/jsx-runtime").JSX.Element;
