import { type ChangeEvent, type KeyboardEvent, type ReactNode, type RefObject } from 'react';
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
    handleChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
    handleKeyDown?: (event: KeyboardEvent<HTMLSelectElement>) => void;
    id: string;
    isValid?: boolean;
    name: string;
    ref?: RefObject<HTMLSelectElement | null>;
    required?: boolean;
    requiredText?: string;
    value?: string;
} & (TAriaLabelProps | THtmlLabelProps);
export declare function Select({ ariaLabel, className, children, disabled, errorMessage, handleKeyDown, label, id, isValid, name, ref, required, requiredText, value, ...props }: TSelectProps): import("react/jsx-runtime").JSX.Element;
export {};
