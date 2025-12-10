import type {
  ButtonHTMLAttributes,
  MouseEvent,
  ReactNode,
  RefObject,
} from 'react';
import styles from './RoundButton.module.scss';
import { mergeClasses } from '../utils/mergeClasses';

export type ButtonType = 'button' | 'submit';

export interface IRoundButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  children?: ReactNode;
  className?: string;
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  ref?: RefObject<HTMLButtonElement | null>;
  size?: 'sm' | 'md';
  type?: ButtonType;
}

export function RoundButton({
  block,
  className,
  children,
  handleClick,
  ref,
  size = 'md',
  type = 'button',
  ...props
}: IRoundButtonProps) {
  return (
    <button
      {...props}
      className={mergeClasses([
        styles['round-button'],
        size === 'sm' ? styles.sm : size === 'md' ? styles.md : undefined,
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
