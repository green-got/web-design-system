import { type ChangeEvent, type KeyboardEvent } from 'react';
export interface IInputProps {
    attributes?: {
        maxLength?: number;
        min?: number;
        pattern?: string;
        placeholder?: string;
        title?: string;
    };
    className?: string;
    disabled?: boolean;
    errorMessage?: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    id: string;
    isValid?: boolean;
    label: string;
    name: string;
    required?: boolean;
    requiredText?: string;
    title?: string;
    type?: 'date' | 'email' | 'number' | 'search' | 'tel' | 'text';
    value: string;
}
export declare const Input: any;
