import type { ReactNode } from 'react';
interface ITablistProps {
    children: ReactNode;
}
export declare function Tablist({ children }: ITablistProps): import("react/jsx-runtime").JSX.Element;
interface ITabProps {
    active?: boolean;
    className?: string;
    disabled?: boolean;
    href: string;
    id: string;
    label: string;
}
export declare function Tab({ active, className, disabled, href, id, label }: ITabProps): import("react/jsx-runtime").JSX.Element;
export {};
