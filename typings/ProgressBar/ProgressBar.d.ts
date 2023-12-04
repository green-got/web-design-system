export type TProgressAriaLabel = {
    ariaLabel: string;
    label?: never;
};
export type TProgressHtmlLabel = {
    ariaLabel?: never;
    label: string;
};
export type TProgressBarProps = {
    className?: string;
    id: string;
    label: string;
    max: string | number;
    value: string | number;
} & (TProgressAriaLabel | TProgressHtmlLabel);
export declare function ProgressBar({ ariaLabel, className, id, label, max, value, }: TProgressBarProps): any;
