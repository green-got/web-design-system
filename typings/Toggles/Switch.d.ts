export interface ISwitchProps {
    className?: string;
    checked: boolean;
    disabled?: boolean;
    handleChange: () => void;
    id: string;
    label: string;
}
export declare function Switch({ className, checked, disabled, handleChange, id, label, }: ISwitchProps): any;
