import React from 'react';
import styles from './Spinner.module.scss';
import { mergeClasses } from '../utils/mergeClasses';

const SpinSizes = ['small', 'large'] as const;
export type SpinSize = typeof SpinSizes[number];
const sizesClassNames = {
  small: styles.small,
  large: styles.large,
};

const Themes = ['dark', 'light'] as const;
export type Theme = typeof Themes[number];
const themesClassNames = {
  dark: styles.dark,
  light: styles.light,
};

export interface ISpinner extends React.HTMLAttributes<HTMLSpanElement> {
  size?: SpinSize;
  theme?: Theme;
}

export const Spinner: React.FC<ISpinner> = ({
  size,
  className,
  style,
  ...props
}) => {
  return (
    <span
      className={mergeClasses([
        styles.container,
        sizesClassNames[size],
        themesClassNames[style],
        className,
      ])}
      {...props}
    />
  );
};
