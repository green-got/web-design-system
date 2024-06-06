import { type ReactNode } from 'react';
interface INotificationProps {
    className?: string;
    children: ReactNode;
    id: string;
    setShow: (value: boolean) => void;
    show: boolean;
}
export declare function Notification({ className, children, id, setShow, show, }: INotificationProps): any;
export {};
