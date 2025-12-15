import type { ReactElement, ReactNode } from 'react';
import styles from './NavGroup.module.scss';
import { mergeClasses } from '../utils/mergeClasses';
import { ChevronDownIcon } from '../Icons';
import type { IIconProps } from '../Icons/Icons';

interface INavGroupProps {
  active?: boolean;
  children: ReactNode;
  id: string;
  label: string;
  renderIcon?: () => ReactElement<IIconProps>;
}
export function NavGroup({
  active,
  children,
  id,
  label,
  renderIcon,
}: INavGroupProps) {
  const icon = renderIcon?.();
  return (
    <details className={mergeClasses([styles['nav-group']])} name={id}>
      <summary className={mergeClasses([active ? styles.active : undefined])}>
        <span>
          {icon && icon}
          <span>{label}</span>
        </span>
        <ChevronDownIcon height={16} width={16} />
      </summary>
      <ul>{children}</ul>
    </details>
  );
}
