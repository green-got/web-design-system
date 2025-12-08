import type {
  ButtonHTMLAttributes,
  MouseEvent,
  ReactNode,
  RefObject,
} from 'react';
import styles from './Button.module.scss';
import { mergeClasses } from '../utils/mergeClasses';

export type ButtonType = 'button' | 'submit';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  children?: ReactNode;
  className?: string;
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  ref?: RefObject<HTMLButtonElement | null>;
  type?: ButtonType;
  variant?: 'danger' | 'primary' | 'secondary';
}

export const Button = ({
  block,
  className,
  children,
  handleClick,
  ref,
  type = 'button',
  variant = 'primary',
  ...props
}: IButtonProps) => {
  return (
    <button
      {...props}
      className={mergeClasses([
        styles.button,
        variant === 'primary'
          ? styles.primary
          : variant === 'secondary'
            ? styles.secondary
            : variant === 'danger'
              ? styles.danger
              : undefined,
        block ? styles.block : undefined,
        className,
      ])}
      onClick={handleClick}
      ref={ref}
      type={type}
    >
      {children}
    </button>
  );
};
