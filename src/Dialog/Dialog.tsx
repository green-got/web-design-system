import { type ReactNode, useEffect, useRef, useState } from 'react';
import { Button } from '../Button/index.js';
import { XIcon } from '../Icons/index.js';
import { mergeClasses } from '../utils/mergeClasses.js';
import styles from './Dialog.module.scss';

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

export function Dialog({
  children,
  className,
  closeBtnAriaLabel = 'Close dialog',
  dismissable = false,
  handleClose,
  hasOverflowIndicator = false,
  id,
  isFullscreen,
  isOpen,
}: IDialogProps) {
  const [showOverflowIndicator, setShowOverflowIndicator] =
    useState<boolean>(false);
  const ref = useRef<HTMLDialogElement>(null);

  if (ref.current) {
    if (isOpen) {
      ref.current.showModal();
    } else {
      ref.current.close();
    }
  }

  useEffect(() => {
    function handleKeyDown(this: Document, e: KeyboardEvent) {
      if (e.key === 'Escape') {
        handleClose();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      const ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const wrapper = entry.target.querySelector(`div.${styles.wrapper}`);
          if (wrapper) {
            if (wrapper.scrollHeight > wrapper.clientHeight) {
              setShowOverflowIndicator(true);
            } else {
              setShowOverflowIndicator(false);
            }
          } else {
            if (entry.target.scrollHeight > entry.target.clientHeight) {
              setShowOverflowIndicator(true);
            } else {
              setShowOverflowIndicator(false);
            }
          }
        }
      });

      if (hasOverflowIndicator && ref.current) {
        ro.observe(ref.current);
      }

      return function cleanup() {
        document.removeEventListener('keydown', handleKeyDown);
        ro.disconnect();
      };
    }
  }, [handleClose, isOpen, hasOverflowIndicator]);

  return (
    <dialog
      className={mergeClasses([
        styles.dialog,
        isFullscreen ? styles.fullscreen : undefined,
        showOverflowIndicator ? styles.wrapped : undefined,
        className,
      ])}
      id={id}
      ref={ref}
    >
      {dismissable &&
        (showOverflowIndicator ? (
          <Button
            attributes={{ 'aria-label': closeBtnAriaLabel }}
            className={styles['close-btn']}
            handleClick={handleClose}
          >
            <XIcon height={16} width={16} />
          </Button>
        ) : (
          <div className={styles.chrome}>
            <Button
              attributes={{ 'aria-label': closeBtnAriaLabel }}
              className={styles['close-btn']}
              handleClick={handleClose}
            >
              <XIcon height={16} width={16} />
            </Button>
          </div>
        ))}
      {showOverflowIndicator ? (
        <div
          className={mergeClasses([
            styles.wrapper,
            dismissable ? styles.dismissable : undefined,
          ])}
        >
          {children}
        </div>
      ) : (
        children
      )}
      {showOverflowIndicator && <div className={styles.mask} />}
    </dialog>
  );
}
