import { type ChangeEvent } from 'react';
interface ITextAreaProps {
    className?: string;
    cols?: number;
    disabled?: boolean;
    errorMessage?: string;
    handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    id: string;
    isValid?: boolean;
    label: string;
    maxLength?: number;
    minLength?: number;
    name: string;
    required?: boolean;
    requiredText?: string;
    rows?: number;
    value: string;
}
export declare function TextArea({ className, cols, disabled, errorMessage, id, isValid, label, maxLength, minLength, name, required, requiredText, rows, value, ...props }: ITextAreaProps): any;
export {};
