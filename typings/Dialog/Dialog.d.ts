import { type ReactNode } from 'react';
export interface IDialogProps {
    children: ReactNode;
    className?: string;
    closeBtnAriaLabel?: string;
    dismissable?: boolean;
    handleClose: () => void;
    hasOverflowIndicator?: boolean;
    id: string;
    isFullscreen?: boolean;
    isOpen: boolean;
}
export declare function Dialog({ children, className, closeBtnAriaLabel, dismissable, handleClose, hasOverflowIndicator, id, isFullscreen, isOpen, }: IDialogProps): any;
