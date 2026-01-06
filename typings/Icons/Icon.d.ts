import type { ReactNode } from 'react';
interface IIconProps {
    className?: string;
    children: ReactNode;
    corner?: 'soft' | 'firm' | 'hard' | 'round';
    size?: 'md' | 'lg';
    variant?: 'light' | 'dark' | 'dark-light';
}
export declare function Icon({ className, children, corner, size, variant, }: IIconProps): import("react/jsx-runtime").JSX.Element;
export {};
