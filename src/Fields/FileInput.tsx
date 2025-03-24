import { type ChangeEvent, type RefObject, useState } from 'react';
import { PaperclipIcon } from '../Icons/index.js';
import { mergeClasses } from '../utils/mergeClasses.js';
import styles from './FileInput.module.scss';

export interface IFileInputProps {
  accept?: string;
  block: boolean;
  className?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label: string;
  labelClassName?: string;
  multiple?: boolean;
  name: string;
  previewClassName?: string;
  ref?: RefObject<HTMLInputElement | null>;
  required?: boolean;
}

export function FileInput({
  accept,
  block = false,
  className,
  label,
  labelClassName,
  handleChange,
  id,
  multiple = false,
  name,
  previewClassName,
  ref,
  required,
}: IFileInputProps) {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className={mergeClasses([styles.container, className])}>
      <label
        className={mergeClasses([styles.label, block ? styles.block : ''])}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        accept={accept}
        className={mergeClasses([styles.input, labelClassName])}
        id={id}
        multiple={multiple}
        name={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (e.target.files !== null) {
            setFiles(Array.from(e.target.files));
          }
          if (handleChange) {
            handleChange(e);
          }
        }}
        ref={ref}
        required={required}
        type="file"
      />
      {files.length > 0 && (
        <ul
          className={mergeClasses([
            styles.preview,
            block ? styles.block : '',
            previewClassName,
          ])}
        >
          {files.map((file: File) => (
            <li key={file.name}>
              <PaperclipIcon height={14} width={14} /> <span>{file.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
