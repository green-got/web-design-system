import type { ReactNode } from 'react';
interface IInfoboxProps {
    children: ReactNode;
    className?: string;
    dismissHandler?: () => void;
    dismissible?: boolean;
    dismissLabel?: string;
    theme: 'neutral' | 'primary' | 'success' | 'warning' | 'error';
}
export declare function Infobox({ children, className, dismissHandler, dismissible, dismissLabel, theme, }: IInfoboxProps): any;
export {};
