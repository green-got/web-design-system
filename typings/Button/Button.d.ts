import type { ButtonHTMLAttributes, MouseEvent, ReactNode, RefObject } from 'react';
export type ButtonType = 'button' | 'submit';
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
    block?: boolean;
    children?: ReactNode;
    className?: string;
    handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    ref?: RefObject<HTMLButtonElement | null>;
    type?: ButtonType;
    variant?: 'danger' | 'ghost' | 'primary' | 'secondary' | 'tab';
}
export declare const Button: ({ active, block, className, children, handleClick, ref, type, variant, ...props }: IButtonProps) => import("react/jsx-runtime").JSX.Element;
