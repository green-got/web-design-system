import { type ReactNode, useEffect, useRef } from 'react';
import { CheckmarkIcon } from '../Icons';
import styles from './Notification.module.scss';
import { mergeClasses } from '../utils/mergeClasses';

interface INotificationProps {
  className?: string;
  children: ReactNode;
  id: string;
  setShow: (value: boolean) => void;
  show: boolean;
}

export function Notification({
  className,
  children,
  id,
  setShow,
  show,
}: INotificationProps) {
  const ref = useRef(null);

  useEffect(() => {
    if (show && ref.current) {
      ref.current.addEventListener('animationend', handleAnimationEnd);
    }
    return function cleanup() {
      if (ref.current) {
        ref.current.removeEventListener('animationend', handleAnimationEnd);
      }
    };

    function handleAnimationEnd() {
      setShow(false);
    }
  }, [setShow, show]);

  if (show) {
    return (
      <div className={styles.container}>
        <div
          className={mergeClasses([
            styles.notification,
            className,
            show ? styles.show : undefined,
          ])}
          id={id}
          ref={ref}
          role="status"
        >
          <div className={styles.circle}>
            <CheckmarkIcon height={12} width={12} />
          </div>
          {children}
        </div>
      </div>
    );
  }
  return;
}
