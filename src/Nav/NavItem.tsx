import type { ReactNode } from 'react';
import styles from './NavItem.module.scss';
import { mergeClasses } from '../utils/mergeClasses';

export interface INavItemProps {
  active?: boolean;
  className?: string;
  children: ReactNode;
  isGroup?: boolean;
}

export function NavItem({
  active,
  children,
  className,
  isGroup,
}: INavItemProps) {
  return (
    <li
      className={mergeClasses([
        styles['nav-item'],
        active ? styles.active : undefined,
        isGroup ? styles.group : undefined,
        className,
      ])}
    >
      {children}
    </li>
  );
}
