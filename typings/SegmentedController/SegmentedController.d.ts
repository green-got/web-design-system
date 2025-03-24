import type { MouseEvent } from 'react';
export interface ISegmentedControllerProps {
    activeId: string;
    className?: string;
    handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
    segments: {
        id: string;
        label: string;
        panelId?: string;
    }[];
}
export declare function SegmentedController({ activeId, className, handleClick, segments, }: ISegmentedControllerProps): import("react/jsx-runtime").JSX.Element;
