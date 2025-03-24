import type { ReactNode } from 'react';
export declare function Table({ ariaLabel, caption, children, className, id, }: {
    ariaLabel: string;
    caption?: string;
    children: ReactNode;
    className?: string;
    id: string;
}): import("react/jsx-runtime").JSX.Element;
export declare function TableHeader({ children, className, }: {
    children: ReactNode;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
export declare function TableBody({ children, className, }: {
    children: ReactNode;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
export declare function TableColumn({ children, className, }: {
    children: ReactNode;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
export declare function TableRow({ children, className, columns, }: {
    children: ReactNode;
    className?: string;
    columns: {
        field: string;
        label: string;
    }[];
}): import("react/jsx-runtime").JSX.Element;
export declare function TableCell({ children, className, }: {
    children: ReactNode;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
