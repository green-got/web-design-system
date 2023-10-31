import React from 'react';
interface ISelectProps {
    children: React.ReactNode;
    disabled?: boolean;
    errorMessage?: string;
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    id: string;
    isValid?: boolean;
    label: string;
    name: string;
    required?: boolean;
    requiredText?: string;
    value: string;
}
export declare function Select({ children, disabled, errorMessage, label, id, isValid, name, required, requiredText, value, ...props }: ISelectProps): any;
export {};
