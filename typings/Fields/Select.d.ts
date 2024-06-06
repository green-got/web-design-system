import { type ChangeEvent, type ReactNode } from 'react';
type TAriaLabelProps = {
    ariaLabel: string;
    label?: never;
};
type THtmlLabelProps = {
    ariaLabel?: never;
    label: string;
};
type TSelectProps = {
    className?: string;
    children: ReactNode;
    disabled?: boolean;
    errorMessage?: string;
    handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    id: string;
    isValid?: boolean;
    name: string;
    required?: boolean;
    requiredText?: string;
    value: string;
} & (TAriaLabelProps | THtmlLabelProps);
export declare function Select({ ariaLabel, className, children, disabled, errorMessage, label, id, isValid, name, required, requiredText, value, ...props }: TSelectProps): any;
export {};
