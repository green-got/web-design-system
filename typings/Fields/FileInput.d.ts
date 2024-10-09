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
}
export declare function FileInput({ accept, block, className, label, labelClassName, handleChange, id, multiple, name, previewClassName, }: IFileInputProps): any;
