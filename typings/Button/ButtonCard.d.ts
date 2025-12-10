import type { ButtonHTMLAttributes, MouseEvent, ReactNode, RefObject } from 'react';
export type ButtonType = 'button' | 'submit';
export interface IButtonCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    className?: string;
    handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    ref?: RefObject<HTMLButtonElement | null>;
    type?: ButtonType;
    variant?: 'light' | 'dark';
}
export declare function ButtonCard({ children, className, handleClick, ref, type, variant, ...props }: IButtonCardProps): import("react/jsx-runtime").JSX.Element;
