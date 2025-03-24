import { type ReactNode, useEffect, useRef } from 'react';
import { CheckmarkIcon } from '../Icons/index';
import styles from './Notification.module.scss';
import { mergeClasses } from '../utils/mergeClasses';

interface INotificationProps {
  className?: string;
  children: ReactNode;
  form?: string;
  id: string;
  name: string;
  setShow: (value: boolean) => void;
  show: boolean;
}

export function Notification({
  className,
  children,
  form,
  id,
  name,
  setShow,
  show,
}: INotificationProps) {
  const ref = useRef<HTMLOutputElement>(null);

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
        <output
          className={mergeClasses([
            styles.notification,
            className,
            show ? styles.show : undefined,
          ])}
          form={form}
          id={id}
          name={name}
          ref={ref}
        >
          <div className={styles.circle}>
            <CheckmarkIcon height={12} width={12} />
          </div>
          {children}
        </output>
      </div>
    );
  }
  return;
}
