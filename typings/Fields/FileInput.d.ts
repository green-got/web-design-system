import { type ChangeEvent } from 'react';
export interface IFileInputProps {
    accept?: string;
    block: boolean;
    className?: string;
    handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    id: string;
    label: string;
    labelClassName?: string;
    multiple?: boolean;
    name: string;
    previewClassName?: string;
    required?: boolean;
}
export declare const FileInput: any;
