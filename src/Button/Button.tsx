import React from 'react';
import styles from './Button.module.scss';
import { mergeClasses } from '../utils/mergeClasses';

export type ButtonType = 'button' | 'submit';

export interface IButtonProps {
  block?: boolean; // TODO: I don't love the 'block' prop design
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  handleClick: (event: MouseEvent) => void;
  name?: string;
  type?: ButtonType;
}

export const Button = ({
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
      className={mergeClasses([
        styles.button,
        block ? styles.block : null,
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
