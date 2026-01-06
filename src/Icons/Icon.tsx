import type { ReactNode } from 'react';
import { mergeClasses } from '../utils/mergeClasses';
import styles from './Icon.module.scss';

interface IIconProps {
  className?: string;
  children: ReactNode;
  corner?: 'soft' | 'firm' | 'hard' | 'round';
  size?: 'md' | 'lg';
  variant?: 'light' | 'dark' | 'dark-light';
}
export function Icon({
  className,
  children,
  corner = 'round',
  size = 'md',
  variant = 'light',
}: IIconProps) {
  return (
    <div
      className={mergeClasses([
        styles.icon,
        size === 'md' ? styles.md : styles.lg,
        corner === 'soft'
          ? styles.soft
          : corner === 'hard'
            ? styles.hard
            : corner === 'firm'
              ? styles.firm
              : styles.round,
        styles[variant ?? 'dark'],
        className,
      ])}
    >
      {children}
    </div>
  );
}
