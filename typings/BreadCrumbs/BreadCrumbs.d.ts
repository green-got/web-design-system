import type { ReactElement } from 'react';
import { type IIconProps } from '../Icons/Icons';
interface ILevel {
    href: string;
    label: string | (() => ReactElement<IIconProps>);
    nextLevel?: ILevel;
}
interface IBreadCrumbsProps {
    className?: string;
    level: ILevel;
}
export declare function BreadCrumbs({ className, level }: IBreadCrumbsProps): import("react/jsx-runtime").JSX.Element;
export {};
