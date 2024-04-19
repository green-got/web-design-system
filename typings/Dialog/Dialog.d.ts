import React from 'react';
export interface IDialogProps {
    children: React.ReactNode;
    className?: string;
    closeBtnAriaLabel?: string;
    dismissable?: boolean;
    handleClose: () => void;
    id: string;
    isFullscreen?: boolean;
    isOpen: boolean;
}
export declare function Dialog({ children, className, closeBtnAriaLabel, dismissable, handleClose, id, isFullscreen, isOpen, }: IDialogProps): any;
