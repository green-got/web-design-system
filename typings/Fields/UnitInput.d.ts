import { IInputProps } from './Input';
interface IUnitInputProps extends IInputProps {
    unit: string;
    unitLabel: string;
}
export declare function UnitInput({ attributes, disabled, errorMessage, id, label, name, required, type, unit, unitLabel, value, ...props }: IUnitInputProps): any;
export {};
