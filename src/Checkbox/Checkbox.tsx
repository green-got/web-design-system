import React from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import './Checkbox.module.scss';

export const Checkbox = ({
  checked,
  disabled,
  id,
  label,
  ...props
}: { checked?: boolean; disabled?: boolean; id: string; label: string }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <RadixCheckbox.Root
        className="CheckboxRoot"
        checked={checked}
        disabled={disabled}
        id={id}
        {...props}
      >
        <RadixCheckbox.Indicator className="CheckboxIndicator">
          <svg
            fill="none"
            height="14"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            viewBox="0 0 24 24"
            width="14"
          >
            <title>Check mark</title>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label className="Label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
