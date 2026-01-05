import type { MouseEvent, ReactNode } from 'react';
import { mergeClasses } from '../utils/mergeClasses';
import styles from './Tablist.module.scss';

interface ITablistProps {
  children: ReactNode;
}

export function Tablist({ children }: ITablistProps) {
  return (
    <div className={styles.tablist} role="tablist">
      {children}
    </div>
  );
}

interface ITabProps {
  active?: boolean;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  handleClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  href: string;
  id: string;
}

export function Tab({
  active,
  children,
  className,
  disabled,
  handleClick,
  href,
  id,
}: ITabProps) {
  return (
    <a
      aria-selected={active}
      aria-disabled={disabled}
      className={mergeClasses([
        styles.tab,
        active ? styles.active : disabled ? styles.disabled : undefined,
        className,
      ])}
      href={href}
      id={id}
      onClick={handleClick}
      role="tab"
    >
      {children}
    </a>
  );
}
