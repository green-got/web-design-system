import type { ButtonHTMLAttributes, MouseEvent, ReactNode, RefObject } from 'react';
export type ButtonType = 'button' | 'submit';
export interface IRoundButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    block?: boolean;
    children?: ReactNode;
    className?: string;
    handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    ref?: RefObject<HTMLButtonElement | null>;
    size?: 'sm' | 'md';
    type?: ButtonType;
}
export declare function RoundButton({ block, className, children, handleClick, ref, size, type, ...props }: IRoundButtonProps): import("react/jsx-runtime").JSX.Element;
