import { type ReactNode } from 'react';
interface INotificationProps {
    className?: string;
    children: ReactNode;
    form?: string;
    id: string;
    name: string;
    setShow: (value: boolean) => void;
    show: boolean;
}
export declare function Notification({ className, children, form, id, name, setShow, show, }: INotificationProps): any;
export {};
