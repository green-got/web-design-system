import type { ReactNode } from 'react';
import styles from './Card.module.scss';
import { mergeClasses } from '../utils/mergeClasses';

interface ICardProps {
  bg: string;
  children?: ReactNode;
  className?: string;
  mask?: string;
  radius?: string;
  variant: 'img' | 'color';
}

export function Card({
  bg,
  children,
  className,
  mask,
  radius,
  variant,
}: ICardProps) {
  return (
    <div
      className={mergeClasses([styles.card, className])}
      style={{
        ...(variant === 'img'
          ? { backgroundImage: `url(${bg})` }
          : { backgroundColor: bg }),
        ...(radius ? { borderRadius: radius } : {}),
      }}
    >
      {typeof mask === 'string' ? (
        <div className={styles.mask} style={{ mask }} />
      ) : null}
      {children}
    </div>
  );
}
