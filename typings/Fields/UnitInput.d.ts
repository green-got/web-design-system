import { IInputProps } from './Input';
interface IUnitInputProps extends IInputProps {
    unit: string;
    unitLabel: string;
    unitPlacement?: 'start' | 'end';
}
export declare function UnitInput({ attributes, disabled, errorMessage, id, label, name, required, type, unit, unitLabel, unitPlacement, value, ...props }: IUnitInputProps): any;
export {};
