import type { ChangeEvent } from 'react';
type TAriaLabelProps = {
    ariaLabel: string;
    label?: never;
};
type THtmlLabelProps = {
    ariaLabel?: never;
    label: string;
};
export type TSwitchProps = {
    className?: string;
    checked: boolean;
    disabled?: boolean;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    id: string;
} & (TAriaLabelProps | THtmlLabelProps);
export declare function Switch({ ariaLabel, className, checked, disabled, handleChange, id, label, }: TSwitchProps): any;
export {};
