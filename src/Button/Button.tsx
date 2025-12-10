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
  active?: boolean;
  block?: boolean;
  children?: ReactNode;
  className?: string;
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  ref?: RefObject<HTMLButtonElement | null>;
  type?: ButtonType;
  variant?: 'danger' | 'ghost' | 'primary' | 'secondary' | 'tab';
}

export const Button = ({
  active = false,
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
              : variant === 'ghost'
                ? styles.ghost
                : variant === 'tab'
                  ? styles.tab
                  : undefined,
        active ? styles.active : undefined,
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
