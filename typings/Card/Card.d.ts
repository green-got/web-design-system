import type { ReactNode } from 'react';
interface ICardProps {
    bg: string;
    children?: ReactNode;
    className?: string;
    mask?: string;
    radius?: string;
    variant: 'img' | 'color';
}
export declare function Card({ bg, children, className, mask, radius, variant, }: ICardProps): import("react/jsx-runtime").JSX.Element;
export {};
