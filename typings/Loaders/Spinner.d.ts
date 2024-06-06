import type { HTMLAttributes } from 'react';
declare const SpinSizes: readonly ["small", "large"];
export type SpinSize = (typeof SpinSizes)[number];
declare const Themes: readonly ["dark", "light"];
export type Theme = (typeof Themes)[number];
export interface ISpinnerProps extends HTMLAttributes<HTMLSpanElement> {
    className?: string;
    size?: SpinSize;
    theme?: Theme;
}
export declare function Spinner({ className, size, theme, ...props }: ISpinnerProps): any;
export {};
