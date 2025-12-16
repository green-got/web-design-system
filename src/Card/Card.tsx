import type { ReactNode } from 'react';
import styles from './Card.module.scss';
import { mergeClasses } from '../utils/mergeClasses';

interface ICardProps {
  bg: string;
  children?: ReactNode;
  className?: string;
  radius?: string;
  ratio?: string;
  variant: 'img' | 'color';
}

export function Card({
  bg,
  children,
  className,
  radius,
  ratio,
  variant,
}: ICardProps) {
  return (
    <div
      className={mergeClasses([styles.card, className])}
      style={{
        ...(variant === 'img'
          ? { backgroundImage: `url(${bg})` }
          : { backgroundColor: bg }),
        borderRadius: radius ?? 'var(--corner-2xl)',
        aspectRatio: ratio ?? '1 / 1',
      }}
    >
      {children}
    </div>
  );
}
