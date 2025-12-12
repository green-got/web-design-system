import type { ReactNode } from 'react';
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
  href: string;
  id: string;
}

export function Tab({
  active,
  children,
  className,
  disabled,
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
      role="tab"
    >
      {children}
    </a>
  );
}
