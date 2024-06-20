import React, { type KeyboardEvent, useEffect } from 'react';
import { Button } from '../Button';
import { XIcon } from '../Icons';
import { mergeClasses } from '../utils/mergeClasses';
import styles from './Dialog.module.scss';

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

export function Dialog({
  children,
  className,
  closeBtnAriaLabel = 'Close dialog',
  dismissable = false,
  handleClose,
  id,
  isFullscreen,
  isOpen,
}: IDialogProps) {
  const ref = React.useRef(null);

  if (ref.current) {
    if (isOpen) {
      ref.current.showModal();
    } else {
      ref.current.close();
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return function cleanup() {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

  function handleKeyDown(e: KeyboardEvent<HTMLDialogElement>) {
    if (e.key === 'Escape') {
      handleClose();
    }
  }

  return (
    <dialog
      className={mergeClasses([
        styles.dialog,
        isFullscreen ? styles.fullscreen : undefined,
        className,
      ])}
      id={id}
      ref={ref}
    >
      {dismissable && (
        <div className={styles.chrome}>
          <Button
            attributes={{ 'aria-label': closeBtnAriaLabel }}
            className={styles['close-btn']}
            handleClick={handleClose}
          >
            <XIcon height={16} width={16} />
          </Button>
        </div>
      )}
      {children}
    </dialog>
  );
}
