import type { MouseEvent, ReactNode } from 'react';
import styles from './Button.module.scss';
import { mergeClasses } from '../utils/mergeClasses';

export type ButtonType = 'button' | 'submit';

export interface IButtonProps {
  // 1. Maybe we nix `attributes` ?
  // 2. Re-purpose `disabled` to be applied
  // as aria-disabled="<disabled>" ?
  attributes?: { [key: string]: string | boolean };
  block?: boolean; // TODO: I don't love the 'block' prop design
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  name?: string;
  type?: ButtonType;
}

export const Button = ({
  attributes,
  block,
  className,
  children,
  disabled,
  handleClick,
  name,
  type = 'button',
}: IButtonProps) => {
  return (
    <button
      {...attributes}
      className={mergeClasses([
        styles.button,
        block ? styles.block : undefined,
        className,
      ])}
      disabled={disabled}
      name={name}
      onClick={handleClick}
      type={type}
    >
      {children}
    </button>
  );
};
