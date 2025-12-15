import type { ReactNode } from 'react';
import styles from './NavItem.module.scss';
import { mergeClasses } from '../utils/mergeClasses';

interface INavItemProps {
  active?: boolean;
  children: ReactNode;
}

export function NavItem({ active, children }: INavItemProps) {
  return (
    <li
      className={mergeClasses([
        styles['nav-item'],
        active ? styles.active : undefined,
      ])}
    >
      {children}
    </li>
  );
}
