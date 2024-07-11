import { type ReactNode } from 'react';
export interface IDialogProps {
    children: ReactNode;
    className?: string;
    closeBtnAriaLabel?: string;
    dismissable?: boolean;
    handleClose: () => void;
    id: string;
    isFullscreen?: boolean;
    isOpen: boolean;
    showOverflowIndicators?: boolean;
}
export declare function Dialog({ children, className, closeBtnAriaLabel, dismissable, handleClose, id, isFullscreen, isOpen, showOverflowIndicators, }: IDialogProps): any;
