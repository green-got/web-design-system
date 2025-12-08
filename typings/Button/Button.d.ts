import type {
  ButtonHTMLAttributes,
  MouseEvent,
  ReactNode,
  RefObject,
} from 'react';
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
export declare const Button: ({
  block,
  className,
  children,
  handleClick,
  ref,
  type,
  variant,
  ...props
}: IButtonProps) => import('react/jsx-runtime').JSX.Element;
