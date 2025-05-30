import type { HTMLAttributes } from 'react';
import styles from './Spinner.module.scss';
import { mergeClasses } from '../utils/mergeClasses';

const SpinSizes = ['small', 'large'] as const;
export type SpinSize = (typeof SpinSizes)[number];
const sizesClassNames = {
  small: styles.small,
  large: styles.large,
};

const Themes = ['dark', 'light'] as const;
export type Theme = (typeof Themes)[number];
const themesClassNames = {
  dark: styles.dark,
  light: styles.light,
};

export interface ISpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  size?: SpinSize;
  theme?: Theme;
}

export function Spinner({
  className,
  size = 'small',
  theme = 'light',
  ...props
}: ISpinnerProps) {
  return (
    <span
      className={mergeClasses([
        styles.container,
        sizesClassNames[size],
        themesClassNames[theme],
        className,
      ])}
      {...props}
    />
  );
}
