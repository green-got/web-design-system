import type { ReactNode } from 'react';
interface IBadgeProps {
    children: ReactNode;
    className?: string;
    size?: 'sm' | 'md';
    variant: 'positive' | 'negative' | 'neutral';
}
export declare function Badge({ children, className, size, variant, }: IBadgeProps): import("react/jsx-runtime").JSX.Element;
export {};
