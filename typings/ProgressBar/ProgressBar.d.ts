export interface IProgressBar {
    className?: string;
    id: string;
    label: string;
    max: string | number;
    value: string | number;
}
export declare function ProgressBar({ className, id, label, max, value, }: IProgressBar): any;
