import { mergeClasses } from '../utils/mergeClasses';
import styles from './SkeletonLoader.module.scss';

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

type TSkeletonLoaderProps = ISkeletonLoaderProps &
  (IDimensionProps | IRatioProps);

export function SkeletonLoader({
  className,
  height,
  ratio,
  width,
}: TSkeletonLoaderProps) {
  // It might be nice to have a "type" prop allowing users to specify a
  // page element instead of having a height/width props
  // e.g. <SkeletonLoader type="h1" />
  // where type could be: "card" | "infobox" | "h1" | etc..
  // alternatively, or additionally either pass a collection of "types"
  // as children or actual components as children
  // Coming up with the right approach will require a better understanding
  // of what we'll be asking of this component
  return (
    <div
      className={mergeClasses([styles.skeleton, className])}
      style={{
        ...(ratio ? { aspectRatio: ratio } : {}),
        ...(height ? { height } : {}),
        ...(width ? { width } : {}),
      }}
    />
  );
}
