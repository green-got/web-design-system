import React from 'react';
import styles from './Spinner.module.scss';

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
  const classMerged = [
    styles.container,
    sizesClassNames[size],
    themesClassNames[style],
    className,
  ]
    .filter((value) => Boolean(value))
    .join(' ');

  return <span className={classMerged} {...props} />;
};
