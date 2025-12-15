import type { ReactElement, ReactNode } from 'react';
import type { IIconProps } from '../Icons/Icons';
interface INavGroupProps {
    active?: boolean;
    children: ReactNode;
    id: string;
    label: string;
    renderIcon?: () => ReactElement<IIconProps>;
}
export declare function NavGroup({ active, children, id, label, renderIcon, }: INavGroupProps): import("react/jsx-runtime").JSX.Element;
export {};
