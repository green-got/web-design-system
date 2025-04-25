import type { MouseEvent, ReactNode, RefObject } from 'react';
export type ButtonType = 'button' | 'submit';
export interface IButtonProps {
    attributes?: {
        [key: string]: string | boolean;
    };
    block?: boolean;
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
    handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    name?: string;
    ref?: RefObject<HTMLButtonElement | null>;
    type?: ButtonType;
}
export declare const Button: ({ attributes, block, className, children, disabled, handleClick, name, ref, type, }: IButtonProps) => import("react/jsx-runtime").JSX.Element;
