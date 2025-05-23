import type { ReactNode } from 'react';
import { mergeClasses } from '../utils/mergeClasses';
import styles from './Infobox.module.scss';
import { Button } from '../Button/index';
import { XIcon } from '../Icons/index';

interface IInfoboxProps {
  border?: boolean;
  children: ReactNode;
  className?: string;
  dismissHandler?: () => void;
  dismissible?: boolean;
  dismissLabel?: string;
  id?: string;
  theme: 'neutral' | 'primary' | 'success' | 'warning' | 'error';
}

export function Infobox({
  border,
  children,
  className,
  dismissHandler,
  dismissible = false,
  dismissLabel,
  id,
  theme,
}: IInfoboxProps) {
  return (
    <div
      className={mergeClasses([
        styles.container,
        styles[theme],
        border ? styles.border : undefined,
        className,
      ])}
      id={id}
    >
      {dismissible ? (
        <Button
          className={mergeClasses([styles.button, styles[theme]])}
          handleClick={dismissHandler}
        >
          <XIcon height={16} title={dismissLabel ?? 'Close'} width={16} />
        </Button>
      ) : null}
      {children}
    </div>
  );
}
