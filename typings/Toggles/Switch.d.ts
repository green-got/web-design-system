export interface ISwitchProps {
    checked: boolean;
    disabled: boolean;
    handleChange: () => void;
    id: string;
    label: string;
}
export declare function Switch({ checked, disabled, handleChange, id, label, }: ISwitchProps): any;
