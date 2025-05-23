import type { MouseEvent, ReactNode, RefObject } from 'react';
export type ButtonType = 'button' | 'submit';
export interface IButtonProps {
    accent?: boolean;
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
    secondary?: boolean;
    type?: ButtonType;
}
export declare const Button: ({ accent, attributes, block, className, children, disabled, handleClick, name, ref, secondary, type, }: IButtonProps) => import("react/jsx-runtime").JSX.Element;
