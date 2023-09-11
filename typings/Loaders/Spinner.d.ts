import React from 'react';
declare const SpinSizes: readonly ['small', 'large'];
export type SpinSize = typeof SpinSizes[number];
declare const Themes: readonly ['dark', 'light'];
export type Theme = typeof Themes[number];
export interface ISpinner extends React.HTMLAttributes<HTMLSpanElement> {
  size?: SpinSize;
  theme?: Theme;
}
export declare const Spinner: React.FC<ISpinner>;
export {};
