import React from 'react';
import styles from './Button.module.scss';
import { mergeClasses } from '../utils/mergeClasses';

export type ButtonType = 'button' | 'submit';

export interface IButtonProps {
  // Maybe we nix `attributes` and re-purpose `disabled`
  // to be applied as aria-disabled="<disabled>"
  attributes?: { 'aria-disabled': boolean };
  block?: boolean; // TODO: I don't love the 'block' prop design
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  handleClick?: (event: MouseEvent) => void;
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
