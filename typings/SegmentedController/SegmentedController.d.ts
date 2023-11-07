import React from 'react';
export interface ISegmentedControllerProps {
    activeId: string;
    handleClick: (e: React.ClickEvent<HTMLAnchorElement>) => void;
    segments: {
        id: string;
        label: string;
        panelId?: string;
    }[];
}
export declare function SegmentedController({ activeId, handleClick, segments, }: ISegmentedControllerProps): any;
