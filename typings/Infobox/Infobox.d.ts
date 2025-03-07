import type { ReactNode } from 'react';
interface IInfoboxProps {
    children: ReactNode;
    className?: string;
    dismissHandler?: () => void;
    dismissible?: boolean;
    dismissLabel?: string;
    id?: string;
    theme: 'neutral' | 'primary' | 'success' | 'warning' | 'error';
}
export declare function Infobox({ children, className, dismissHandler, dismissible, dismissLabel, id, theme, }: IInfoboxProps): any;
export {};
