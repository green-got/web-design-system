import type { ClickEvent } from 'react';
export interface ISegmentedControllerProps {
    activeId: string;
    className?: string;
    handleClick: (e: ClickEvent<HTMLButtonElement>) => void;
    segments: {
        id: string;
        label: string;
        panelId?: string;
    }[];
}
export declare function SegmentedController({ activeId, className, handleClick, segments, }: ISegmentedControllerProps): any;
