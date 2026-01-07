import type { ReactNode } from 'react';
import { StemlessUpArrowIcon } from '../Icons/Icons';
import { mergeClasses } from '../utils/mergeClasses';
import styles from './Badge.module.scss';

interface IBadgeProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md';
  variant: 'positive' | 'negative' | 'neutral';
}

export function Badge({
  children,
  className,
  size = 'md',
  variant,
}: IBadgeProps) {
  return (
    <div
      className={mergeClasses([
        styles.badge,
        styles[variant],
        styles[size],
        className,
      ])}
    >
      <StemlessUpArrowIcon
        className={styles[`arrow-${variant}`]}
        height={size === 'md' ? 20 : 16}
        title={
          variant === 'neutral'
            ? 'Right arrow icon'
            : variant === 'negative'
              ? 'Down arrow icon'
              : 'Up arrow icon'
        }
        width={size === 'md' ? 20 : 16}
      />
      {children}
    </div>
  );
}
