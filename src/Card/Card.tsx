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
        ...(radius ? { borderRadius: radius } : {}),
        ...(ratio ? { aspectRatio: ratio } : {}),
      }}
    >
      {children}
    </div>
  );
}
