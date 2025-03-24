import type { MouseEvent } from 'react';
import { mergeClasses } from '../utils/mergeClasses';
import styles from './SegmentedController.module.scss';

export interface ISegmentedControllerProps {
  activeId: string;
  className?: string;
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
  segments: { id: string; label: string; panelId?: string }[];
}

export function SegmentedController({
  activeId,
  className,
  handleClick,
  segments,
}: ISegmentedControllerProps) {
  return (
    <ul className={mergeClasses([styles.container, className])} role="tablist">
      {segments.map((segment) => {
        const selected = segment.id === activeId;
        return (
          <li key={segment.id} role="presentation">
            <button
              aria-selected={selected}
              aria-controls={segment.panelId}
              className={selected ? styles.active : ''}
              id={segment.id}
              onClick={handleClick}
              role="tab"
              type="button"
            >
              {segment.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
