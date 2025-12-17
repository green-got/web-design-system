import type { ReactNode } from 'react';
interface ICardProps {
    bg: string;
    children?: ReactNode;
    className?: string;
    radius?: string;
    ratio?: string;
    variant: 'img' | 'color';
}
export declare function Card({ bg, children, className, radius, ratio, variant, }: ICardProps): import("react/jsx-runtime").JSX.Element;
export {};
