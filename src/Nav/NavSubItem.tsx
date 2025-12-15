import type { ReactNode } from 'react';
import styles from './NavSubItem.module.scss';
import { mergeClasses } from '../utils/mergeClasses';

interface INavSubItemProps {
  active?: boolean;
  children: ReactNode;
}

export function NavSubItem({ active, children }: INavSubItemProps) {
  return (
    <li
      className={mergeClasses([
        styles['nav-sub-item'],
        active ? styles.active : undefined,
      ])}
    >
      {children}
    </li>
  );
}
