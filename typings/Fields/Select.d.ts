import React from 'react';
interface ISelectProps {
  children: React.ReactNode;
  disabled?: boolean;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  label: string;
  name: string;
}
export declare function Select(props: ISelectProps): JSX.Element;
export {};
