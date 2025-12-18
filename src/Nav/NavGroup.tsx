import type { ReactNode } from 'react';
import styles from './NavGroup.module.scss';
import { mergeClasses } from '../utils/mergeClasses';
import { NavItem } from './NavItem';

interface INavGroupProps {
  active?: boolean;
  activeGroup?: boolean;
  children: ReactNode;
  className?: string;
  renderItem: () => ReactNode;
}
export function NavGroup({
  active,
  activeGroup,
  children,
  className,
  renderItem,
}: INavGroupProps) {
  if (active) {
    return (
      <div className={mergeClasses([styles['nav-group'], className])}>
        <NavItem active={activeGroup} isGroup>
          {renderItem()}
        </NavItem>
        <ul>{children}</ul>
      </div>
    );
  }
  return <NavItem>{renderItem()}</NavItem>;
}
