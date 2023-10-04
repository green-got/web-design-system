import React from 'react';
export interface IInputProps {
    attributes?: {
        [key: string]: number | string;
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
export declare function Input({ disabled, errorMessage, id, label, required, type, value, ...props }: IInputProps): any;
