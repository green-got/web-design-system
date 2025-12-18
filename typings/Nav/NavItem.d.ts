import type { ReactNode } from 'react';
export interface INavItemProps {
    active?: boolean;
    className?: string;
    children: ReactNode;
    isGroup?: boolean;
}
export declare function NavItem({ active, children, className, isGroup, }: INavItemProps): import("react/jsx-runtime").JSX.Element;
