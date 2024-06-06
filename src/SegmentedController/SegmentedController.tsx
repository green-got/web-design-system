import type { ClickEvent } from 'react';
import styles from './SegmentedController.module.scss';

export interface ISegmentedControllerProps {
  activeId: string;
  handleClick: (e: ClickEvent<HTMLAnchorElement>) => void;
  segments: { id: string; label: string; panelId?: string }[];
}

export function SegmentedController({
  activeId,
  handleClick,
  segments,
}: ISegmentedControllerProps) {
  return (
    <ul className={styles.container} role="tablist">
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
