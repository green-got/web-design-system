import type { IInputProps } from './Input';
interface IUnitInputProps extends IInputProps {
    unit: string;
    unitLabel: string;
    unitPlacement?: 'start' | 'end';
}
export declare function UnitInput({ attributes, className, disabled, errorMessage, handleKeyDown, id, label, name, ref, required, type, unit, unitLabel, unitPlacement, value, ...props }: IUnitInputProps): import("react/jsx-runtime").JSX.Element;
export {};
