import type { ReactNode } from 'react';
interface IInfoboxProps {
    border?: boolean;
    children: ReactNode;
    className?: string;
    dismissHandler?: () => void;
    dismissible?: boolean;
    dismissLabel?: string;
    id?: string;
    theme: 'neutral' | 'primary' | 'success' | 'warning' | 'error';
}
export declare function Infobox({ border, children, className, dismissHandler, dismissible, dismissLabel, id, theme, }: IInfoboxProps): import("react/jsx-runtime").JSX.Element;
export {};
