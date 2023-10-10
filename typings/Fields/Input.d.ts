import React from 'react';
export interface IInputProps {
    attributes?: {
        maxLength?: number;
        min?: number;
        pattern?: string;
        placeholder?: string;
        title?: string;
    };
    disabled?: boolean;
    errorMessage?: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
    isValid?: boolean;
    label: string;
    required?: boolean;
    type?: 'email' | 'number' | 'search' | 'tel' | 'text';
    value: string;
}
export declare function Input({ attributes, disabled, errorMessage, id, isValid, label, required, type, value, ...props }: IInputProps): any;
