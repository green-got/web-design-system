interface ISkeletonLoaderProps {
    className?: string;
}
interface IDimensionProps {
    height: string | number;
    ratio?: never;
    width: string | number;
}
interface IRatioProps {
    height?: never;
    ratio: string;
    width?: never;
}
type TSkeletonLoaderProps = ISkeletonLoaderProps & (IDimensionProps | IRatioProps);
export declare function SkeletonLoader({ className, height, ratio, width, }: TSkeletonLoaderProps): import("react/jsx-runtime").JSX.Element;
export {};
