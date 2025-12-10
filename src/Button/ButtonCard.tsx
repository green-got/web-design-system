import type {
  ButtonHTMLAttributes,
  MouseEvent,
  ReactNode,
  RefObject,
} from 'react';
import styles from './ButtonCard.module.scss';
import { mergeClasses } from '../utils/mergeClasses';

export type ButtonType = 'button' | 'submit';

export interface IButtonCardProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  ref?: RefObject<HTMLButtonElement | null>;
  type?: ButtonType;
  variant?: 'light' | 'dark';
}

export function ButtonCard({
  children,
  className,
  handleClick,
  ref,
  type = 'button',
  variant = 'dark',
  ...props
}: IButtonCardProps) {
  return (
    <button
      {...props}
      className={mergeClasses([
        styles['button-card'],
        variant === 'light'
          ? styles.light
          : variant === 'dark'
            ? styles.dark
            : undefined,
        className,
      ])}
      onClick={handleClick}
      ref={ref}
      type={type}
    >
      {children}
    </button>
  );
}
