import type { ReactElement } from 'react';
import { ChevronRightIcon, type IIconProps } from '../Icons/Icons';
import { mergeClasses } from '../utils/mergeClasses';
import styles from './BreadCrumbs.module.scss';

interface ILevel {
  href: string;
  label: string | (() => ReactElement<IIconProps>);
  nextLevel?: ILevel;
}
interface IBreadCrumbsProps {
  className?: string;
  level: ILevel;
}

export function BreadCrumbs({ className, level }: IBreadCrumbsProps) {
  return (
    <div className={mergeClasses([styles['bread-crumbs'], className])}>
      <Crumb level={level} />
    </div>
  );
}

function Crumb({ level }: IBreadCrumbsProps) {
  const { label } = level;
  const isStringLabel = typeof label === 'string';
  const lbl = isStringLabel ? label : label();
  return (
    <>
      {level.nextLevel ? (
        <a className={styles.crumb} href={level.href}>
          {isStringLabel ? (
            <span>
              <ChevronRightIcon height={16} width={16} />
              <span>{lbl}</span>
            </span>
          ) : (
            lbl
          )}
        </a>
      ) : (
        <span className={styles.crumb}>
          {isStringLabel ? (
            <span>
              <ChevronRightIcon height={14} width={14} />
              <span>{lbl}</span>
            </span>
          ) : (
            lbl
          )}
        </span>
      )}
      {level.nextLevel && <Crumb level={level.nextLevel} />}
    </>
  );
}
