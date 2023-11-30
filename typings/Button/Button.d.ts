import React from 'react';
export type ButtonType = 'button' | 'submit';
export interface IButtonProps {
    attributes?: {
        'aria-disabled': boolean;
    };
    block?: boolean;
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    handleClick?: (event: MouseEvent) => void;
    name?: string;
    type?: ButtonType;
}
export declare const Button: ({ attributes, block, className, children, disabled, handleClick, name, type, }: IButtonProps) => any;
