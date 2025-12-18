import type { ReactNode } from 'react';
interface INavGroupProps {
    active?: boolean;
    activeGroup?: boolean;
    children: ReactNode;
    className?: string;
    renderItem: () => ReactNode;
}
export declare function NavGroup({ active, activeGroup, children, className, renderItem, }: INavGroupProps): import("react/jsx-runtime").JSX.Element;
export {};
