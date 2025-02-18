import { type ChangeEvent, type RefObject } from 'react';
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
    ref?: RefObject;
    required?: boolean;
}
export declare function FileInput({ accept, block, className, label, labelClassName, handleChange, id, multiple, name, previewClassName, ref, required, }: IFileInputProps): any;
