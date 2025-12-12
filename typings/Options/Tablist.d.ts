import type { ReactNode } from 'react';
interface ITablistProps {
    children: ReactNode;
}
export declare function Tablist({ children }: ITablistProps): import("react/jsx-runtime").JSX.Element;
interface ITabProps {
    active?: boolean;
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    href: string;
    id: string;
}
export declare function Tab({ active, children, className, disabled, href, id, }: ITabProps): import("react/jsx-runtime").JSX.Element;
export {};
