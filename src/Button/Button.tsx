import React from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
  label: string;
}

export const Button = ({ label }: IButtonProps) => {
  return <button type="button">{label}</button>;
};
