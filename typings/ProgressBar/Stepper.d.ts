export interface IStepper {
    className?: string;
    step?: number;
    steps: number;
}
export declare function Stepper({ className, step, steps }: IStepper): any;
