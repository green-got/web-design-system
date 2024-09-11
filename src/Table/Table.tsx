import type { ReactNode } from 'react';
import { mergeClasses } from '../utils/mergeClasses';
import styles from './Table.module.scss';

export function Table({
  ariaLabel,
  caption,
  children,
  className,
  id,
}: {
  ariaLabel: string;
  caption?: string;
  children: ReactNode;
  className?: string;
  id: string;
}) {
  const props = {
    ...(caption ? { 'aria-describedby': `${id}_description` } : {}),
  };
  return (
    <div
      {...props}
      aria-label={ariaLabel}
      className={mergeClasses([styles.table, className])}
      id={id}
      role="table"
    >
      {caption && <div id={`${id}_description`}>{caption}</div>}
      {children}
    </div>
  );
}

export function TableHeader({
  children,
  className,
}: { children: ReactNode; className?: string }) {
  return (
    <div className={mergeClasses([styles.head, className])} role="rowgroup">
      {children}
    </div>
  );
}

export function TableBody({
  children,
  className,
}: { children: ReactNode; className?: string }) {
  return (
    <div className={mergeClasses([styles.body, className])} role="rowgroup">
      {children}
    </div>
  );
}

export function TableColumn({
  children,
  className,
}: { children: ReactNode; className?: string }) {
  return (
    <span className={className} role="columnheader">
      {children}
    </span>
  );
}

export function TableRow({
  children,
  className,
}: { children: ReactNode; className?: string }) {
  return (
    <div
      className={mergeClasses([styles.row, className])}
      role="row"
      style={{ gridTemplateColumns: `repeat(${children.length}, 1fr)` }}
    >
      {children}
    </div>
  );
}

export function TableCell({
  children,
  className,
}: { children: ReactNode; className?: string }) {
  return (
    <span className={className} role="cell">
      {children}
    </span>
  );
}
