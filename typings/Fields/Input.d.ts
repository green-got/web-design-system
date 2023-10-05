import React from 'react';
export interface IInputProps {
    attributes?: {
        maxLength?: number;
        min?: number;
        pattern?: string;
        title?: string;
    };
    disabled?: boolean;
    errorMessage?: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
    label: string;
    required?: boolean;
    type?: 'email' | 'number' | 'search' | 'tel' | 'text';
    value: string;
}
export declare function Input({ attributes, disabled, errorMessage, id, label, required, type, value, ...props }: IInputProps): any;
