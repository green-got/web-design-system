import React from 'react';
interface ISelectProps {
    children: React.ReactNode;
    disabled?: boolean;
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    id: string;
    label: string;
    name: string;
    required?: boolean;
    value: string;
}
export declare function Select({ children, disabled, handleChange, label, id, name, required, value, }: ISelectProps): any;
export {};
