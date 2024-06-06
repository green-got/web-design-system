import type { ClickEvent } from 'react';
export interface ISegmentedControllerProps {
    activeId: string;
    handleClick: (e: ClickEvent<HTMLAnchorElement>) => void;
    segments: {
        id: string;
        label: string;
        panelId?: string;
    }[];
}
export declare function SegmentedController({ activeId, handleClick, segments, }: ISegmentedControllerProps): any;
