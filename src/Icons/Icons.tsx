import React, { type ReactNode } from 'react';
// export const Icons = {
//   icon1: 'icon',
//   icon2: 'icon',
// };

export interface IIconProps {
  attributes?: { [key: string]: string | number };
  className?: string;
  height: number;
  title?: string;
  width: number;
}

export interface IIconBaseProps extends IIconProps {
  renderIcon: (title: string) => ReactNode;
}

function Icon({
  attributes,
  className,
  height,
  renderIcon,
  title,
  width,
}: IIconBaseProps) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: title provided by child
    <svg
      className={className}
      fill="currentColor"
      height={height}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0"
      {...attributes}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      {renderIcon(title)}
    </svg>
  );
}

export function ChevronRightIcon(props) {
  return (
    <>
      <Icon
        attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
        className={props.className}
        height={props.height}
        renderIcon={(title) => (
          <>
            <title>{title ? title : 'Chevron right icon'}</title>
            <polyline points="9 18 15 12 9 6" />
          </>
        )}
        title={props.title}
        width={props.height}
      />
    </>
  );
}

export function ChevronLeftIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Chevron left icon'}</title>
          <polyline points="15 18 9 12 15 6" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function ChevronUpIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Chevron up icon'}</title>
          <polyline points="18 15 12 9 6 15" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function ChevronDownIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Chevron down icon'}</title>
          <polyline points="6 9 12 15 18 9" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function ExternalLinkIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'External link icon'}</title>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function HelpIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Help icon'}</title>
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function InfoIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Info icon'}</title>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function PaperclipIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Paperclip icon'}</title>
          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function YoutubeIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Youtube icon'}</title>
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function ClockIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Clock icon'}</title>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function CircledXIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Circled x icon'}</title>
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function TextFileIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Text file icon'}</title>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function EditIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Edit icon'}</title>
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function EditLineIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Edit line icon'}</title>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function PlusIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Plus icon'}</title>
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function XIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'X icon'}</title>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function DownloadIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Download icon'}</title>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function TrashIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Trash icon'}</title>
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function CircledPlusIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Circled plus icon'}</title>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function CheckedSquareIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Checked square icon'}</title>
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function LockIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Lock icon'}</title>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function UnlockIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Unlock icon'}</title>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 9.9-1" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function DeleteIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Delete icon'}</title>
          <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
          <line x1="18" y1="9" x2="12" y2="15" />
          <line x1="12" y1="9" x2="18" y2="15" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function ListIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'List icon'}</title>
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function StarIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Star icon'}</title>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function UserIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'User icon'}</title>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function CheckmarkIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Checkmark icon'}</title>
          <polyline points="20 6 9 17 4 12" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function BellIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Bell icon'}</title>
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function GearIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Gear icon'}</title>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function EyeIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Eye icon'}</title>
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function EyeClosedIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Eye closed icon'}</title>
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
          <line x1="1" y1="1" x2="23" y2="23" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function SlidersIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Sliders icon'}</title>
          <line x1="4" y1="21" x2="4" y2="14" />
          <line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="3" />
          <line x1="20" y1="21" x2="20" y2="16" />
          <line x1="20" y1="12" x2="20" y2="3" />
          <line x1="1" y1="14" x2="7" y2="14" />
          <line x1="9" y1="8" x2="15" y2="8" />
          <line x1="17" y1="16" x2="23" y2="16" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function BoltIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Bolt icon'}</title>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function MoreHorizontalIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Horizontal more icon'}</title>
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function MoreVerticalIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Vertical more icon'}</title>
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="19" r="1" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function CopyIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Copy icon'}</title>
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function UsersIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Users icon'}</title>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function SendIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Send icon'}</title>
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function LoginIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Log in icon'}</title>
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
          <polyline points="10 17 15 12 10 7" />
          <line x1="15" y1="12" x2="3" y2="12" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function CalendarIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Calendar icon'}</title>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function CardIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Card icon'}</title>
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function PhoneIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Phone icon'}</title>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function ArcIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Arc icon'}</title>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function UpToTheRightIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Up and to the right icon'}</title>
          <polyline points="15 14 20 9 15 4" />
          <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function ShieldIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Shield icon'}</title>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function SnowflakeIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Snowflake icon'}</title>
          <path d="M12,2L12,22" />
          <path d="M7.969,3.969L12,8" />
          <path d="M12,8L16.031,3.969" />
          <path d="M16.031,20.031L12,16" />
          <path d="M12,16L7.969,20.031" />
          <path d="M22,12L2,12" />
          <path d="M20.031,7.969L16,12" />
          <path d="M16,12L20.031,16.031" />
          <path d="M3.969,16.031L8,12" />
          <path d="M8,12L3.969,7.969" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function SearchIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Search icon'}</title>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function MenuIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Menu icon'}</title>
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function BankIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'currentColor', strokeWidth: 0, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Bank icon'}</title>
          <path d="M1.62118 17.6449C1.85454 16.8273 2.59269 16.2647 3.43191 16.2647H20.5681C21.4073 16.2647 22.1455 16.8273 22.3788 17.6449L22.9245 19.5566C23.2735 20.7794 22.3689 22 21.1138 22H2.88623C1.63111 22 0.726513 20.7793 1.07551 19.5566L1.62118 17.6449ZM20.5681 18.1765H3.43191L2.88623 20.0882L21.1138 20.0882L20.5681 18.1765Z" />
          <path d="M11.2999 2.13674C11.7493 1.95442 12.2507 1.95442 12.7001 2.13674L21.1829 5.57793C21.8985 5.86826 22.3678 6.57124 22.3678 7.35297V8.61758C22.3678 9.67342 21.5239 10.5294 20.4828 10.5294H3.51723C2.47614 10.5294 1.63217 9.67342 1.63217 8.61758V7.35297C1.63217 6.57124 2.10145 5.86826 2.81713 5.57793L11.2999 2.13674ZM12 3.91177L3.51723 7.35297V8.61758H20.4828V7.35297L12 3.91177Z" />
          <path d="M5.69315 9.57346V17.2206H3.80809V9.57346H5.69315Z" />
          <path d="M18.3069 17.2206V9.57346H20.1919V17.2206H18.3069Z" />
          <path d="M9.46327 9.57346V17.2206H7.57821V9.57346H9.46327Z" />
          <path d="M14.5367 17.2206V9.57346H16.4218V17.2206H14.5367Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function StatementIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'currentColor', strokeWidth: 0, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Statement icon'}</title>
          <path d="M4 7C3.44772 7 3 7.44772 3 8V16C3 16.5523 3.44772 17 4 17H20C20.5523 17 21 16.5523 21 16V8C21 7.44772 20.5523 7 20 7H4ZM1 8C1 6.34315 2.34315 5 4 5H20C21.6569 5 23 6.34315 23 8V16C23 17.6569 21.6569 19 20 19H4C2.34315 19 1 17.6569 1 16V8Z" />
          <path d="M5 10C5 9.44772 5.44772 9 6 9H11C11.5523 9 12 9.44772 12 10C12 10.5523 11.5523 11 11 11H6C5.44772 11 5 10.5523 5 10Z" />
          <path d="M5 14C5 13.4477 5.44772 13 6 13H17C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15H6C5.44772 15 5 14.5523 5 14Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function NoCardIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'currentColor', strokeWidth: 0, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'No card icon'}</title>
          <path d="M3.75 5.58333C3.24374 5.58333 2.83333 5.99374 2.83333 6.5V17.5C2.83333 18.0063 3.24374 18.4167 3.75 18.4167H19.3333C19.8396 18.4167 20.25 18.8271 20.25 19.3333C20.25 19.8396 19.8396 20.25 19.3333 20.25H3.75C2.23122 20.25 1 19.0188 1 17.5V6.5C1 4.98122 2.23122 3.75 3.75 3.75H4.66667C5.17293 3.75 5.58333 4.16041 5.58333 4.66667C5.58333 5.17293 5.17293 5.58333 4.66667 5.58333H3.75ZM7.55431 4.66667C7.55431 4.16041 7.96472 3.75 8.47098 3.75H20.25C21.7688 3.75 23 4.98122 23 6.5V17.5C23 18.0063 22.5896 18.4167 22.0833 18.4167C21.5771 18.4167 21.1667 18.0063 21.1667 17.5V6.5C21.1667 5.99374 20.7563 5.58333 20.25 5.58333H8.47098C7.96472 5.58333 7.55431 5.17293 7.55431 4.66667Z" />
          <path d="M1 10.1667C1 9.66041 1.41041 9.25 1.91667 9.25H10.1667C10.6729 9.25 11.0833 9.66041 11.0833 10.1667C11.0833 10.6729 10.6729 11.0833 10.1667 11.0833H1.91667C1.41041 11.0833 1 10.6729 1 10.1667ZM13.375 10.1667C13.375 9.66041 13.7854 9.25 14.2917 9.25H22.0833C22.5896 9.25 23 9.66041 23 10.1667C23 10.6729 22.5896 11.0833 22.0833 11.0833H14.2917C13.7854 11.0833 13.375 10.6729 13.375 10.1667Z" />
          <path d="M1.26849 1.26849C1.62647 0.910505 2.20687 0.910505 2.56485 1.26849L22.7315 21.4352C23.0895 21.7931 23.0895 22.3735 22.7315 22.7315C22.3735 23.0895 21.7931 23.0895 21.4352 22.7315L1.26849 2.56485C0.910505 2.20687 0.910505 1.62647 1.26849 1.26849Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function SpeechBubblesIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'currentColor', strokeWidth: 0, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Speech bubbles icon'}</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.5667 4.6815C13.8171 4.6815 16.452 7.31641 16.452 10.5667C16.452 13.8171 13.8171 16.452 10.5667 16.452C9.39688 16.452 8.30909 16.1115 7.39404 15.5245C7.08011 15.3232 6.67834 15.2583 6.29808 15.3863L5.43596 15.6765L5.73705 15.0179C5.92632 14.604 5.87126 14.1403 5.64005 13.7874C5.03398 12.8625 4.6815 11.757 4.6815 10.5667C4.6815 7.31641 7.31642 4.6815 10.5667 4.6815ZM17.8729 8.59083C17.004 5.37006 14.0622 3 10.5667 3C6.38775 3 3 6.38774 3 10.5667C3 12.0151 3.40775 13.3706 4.1149 14.522L3.50304 15.8602C3.04388 16.8645 4.00573 17.9321 5.05229 17.5798L6.64998 17.042C7.24776 17.4043 7.89979 17.6862 8.59068 17.8726C9.7834 19.7524 11.883 21 14.274 21C15.5413 21 16.7287 20.6488 17.7418 20.0381L18.7518 20.4999C19.756 20.959 20.8236 19.9972 20.4714 18.9506L20.055 17.7137C20.6553 16.7067 21 15.5295 21 14.274C21 11.8831 19.7525 9.78358 17.8729 8.59083ZM18.1207 11.0104C17.8995 14.8361 14.8361 17.8995 11.0104 18.1207C11.8901 18.8678 13.0295 19.3185 14.274 19.3185C15.2852 19.3185 16.2245 19.0219 17.0128 18.5111C17.3635 18.2839 17.8254 18.2274 18.24 18.417L18.568 18.5669L18.3999 18.0675C18.2717 17.6866 18.3376 17.2864 18.5358 16.9744C19.0314 16.1941 19.3185 15.2689 19.3185 14.274C19.3185 13.0294 18.8678 11.8901 18.1207 11.0104Z"
          />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function LeftRightArrowsIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'currentColor', strokeWidth: 0, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Left and right arrows icon'}</title>
          <path d="M15.5355 4.29289C15.9261 3.90237 16.5592 3.90237 16.9497 4.29289L21.1924 8.53553C21.5829 8.92606 21.5829 9.55922 21.1924 9.94975L16.9497 14.1924C16.5592 14.5829 15.9261 14.5829 15.5355 14.1924C15.145 13.8019 15.145 13.1687 15.5355 12.7782L19.0711 9.24264L15.5355 5.70711C15.145 5.31658 15.145 4.68342 15.5355 4.29289Z" />
          <path d="M9.99996 9C9.99996 8.44772 10.4477 8 11 8H19C19.5522 8 20 8.44772 20 9C20 9.55228 19.5522 10 19 10H11C10.4477 10 9.99996 9.55228 9.99996 9Z" />
          <path d="M7.94975 10.2929C7.55922 9.90237 6.92606 9.90237 6.53553 10.2929L2.29289 14.5355C1.90237 14.9261 1.90237 15.5592 2.29289 15.9497L6.53553 20.1924C6.92606 20.5829 7.55922 20.5829 7.94975 20.1924C8.34027 19.8019 8.34027 19.1687 7.94975 18.7782L4.41421 15.2426L7.94975 11.7071C8.34027 11.3166 8.34027 10.6834 7.94975 10.2929Z" />
          <path d="M13.4853 15C13.4853 14.4477 13.0376 14 12.4853 14H4.48532C3.93303 14 3.48532 14.4477 3.48532 15C3.48532 15.5523 3.93303 16 4.48532 16H12.4853C13.0376 16 13.4853 15.5523 13.4853 15Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function UpDownArrowsIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'currentColor', strokeWidth: 0, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Up and down arrows icon'}</title>
          <path d="M3.79289 8.44976C3.40237 8.05923 3.40237 7.42607 3.79289 7.03554L8.03553 2.7929C8.42606 2.40238 9.05922 2.40238 9.44975 2.7929L13.6924 7.03554C14.0829 7.42607 14.0829 8.05923 13.6924 8.44976C13.3019 8.84028 12.6687 8.84028 12.2782 8.44976L8.74264 4.91422L5.20711 8.44976C4.81658 8.84028 4.18342 8.84028 3.79289 8.44976Z" />
          <path d="M8.5 13.9853C7.94772 13.9853 7.5 13.5376 7.5 12.9853V4.98532C7.5 4.43304 7.94772 3.98532 8.5 3.98532C9.05228 3.98532 9.5 4.43304 9.5 4.98532V12.9853C9.5 13.5376 9.05228 13.9853 8.5 13.9853Z" />
          <path d="M9.79289 16.0355C9.40237 16.4261 9.40237 17.0592 9.79289 17.4498L14.0355 21.6924C14.4261 22.0829 15.0592 22.0829 15.4497 21.6924L19.6924 17.4498C20.0829 17.0592 20.0829 16.4261 19.6924 16.0355C19.3019 15.645 18.6687 15.645 18.2782 16.0355L14.7426 19.5711L11.2071 16.0355C10.8166 15.645 10.1834 15.645 9.79289 16.0355Z" />
          <path d="M14.5 10.5C13.9477 10.5 13.5 10.9477 13.5 11.5V19.5C13.5 20.0523 13.9477 20.5 14.5 20.5C15.0523 20.5 15.5 20.0523 15.5 19.5V11.5C15.5 10.9477 15.0523 10.5 14.5 10.5Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function SmartphoneRingingIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'currentColor', strokeWidth: 0, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Ringing smartphone icon'}</title>
          <path d="M9.89968 19.42C10.1795 19.42 10.4063 19.1932 10.4063 18.9134C10.4063 18.6335 10.1795 18.4067 9.89968 18.4067C9.61986 18.4067 9.39301 18.6335 9.39301 18.9134C9.39301 19.1932 9.61986 19.42 9.89968 19.42ZM8.60635 18.9134C8.60635 18.1991 9.18539 17.62 9.89968 17.62C10.614 17.62 11.193 18.1991 11.193 18.9134C11.193 19.6276 10.614 20.2067 9.89968 20.2067C9.18539 20.2067 8.60635 19.6276 8.60635 18.9134Z" />
          <path d="M7.11676 2.85002H6.00002C5.3649 2.85002 4.85002 3.3649 4.85002 4.00002V19.6667C4.85002 20.3018 5.3649 20.8167 6.00003 20.8167H13.8C14.4352 20.8167 14.95 20.3018 14.95 19.6667V17.75C14.95 17.2806 15.3306 16.9 15.8 16.9C16.2695 16.9 16.65 17.2806 16.65 17.75V19.6667C16.65 21.2407 15.374 22.5167 13.8 22.5167H6.00003C4.42602 22.5167 3.15002 21.2407 3.15002 19.6667V4.00002C3.15002 2.42601 4.42601 1.15002 6.00002 1.15002H7.96963C8.08318 1.11743 8.20312 1.09998 8.32715 1.09998H11.4738C11.5978 1.09998 11.7178 1.11743 11.8313 1.15002H13.8C15.374 1.15002 16.65 2.42601 16.65 4.00002V6.40002C16.65 6.86947 16.2695 7.25002 15.8 7.25002C15.3306 7.25002 14.95 6.86947 14.95 6.40002V4.00002C14.95 3.3649 14.4352 2.85002 13.8 2.85002H12.6842C12.4996 3.33893 12.0273 3.68664 11.4738 3.68664H8.32715C7.77364 3.68664 7.30134 3.33893 7.11676 2.85002Z" />
          <path d="M13.7993 10.399C14.1313 10.067 14.6695 10.067 15.0014 10.399C15.4817 10.8792 15.604 11.552 15.5874 12.0649C15.5713 12.567 15.4132 13.1893 15.0014 13.601C14.6695 13.933 14.1313 13.933 13.7993 13.601C13.4694 13.2711 13.4674 12.7375 13.7933 12.4051C13.7945 12.4029 13.8137 12.3761 13.8361 12.3113C13.864 12.2306 13.8846 12.125 13.8883 12.0101C13.8968 11.748 13.8191 11.6208 13.7993 11.601C13.4674 11.2691 13.4674 10.7309 13.7993 10.399Z" />
          <path d="M17.7993 6.39896C18.1313 6.06701 18.6695 6.06701 19.0014 6.39896C21.8602 9.25778 21.7892 14.2612 19.0534 17.5442C18.7528 17.9048 18.2169 17.9535 17.8562 17.653C17.4956 17.3525 17.4469 16.8165 17.7474 16.4558C20.0116 13.7388 19.9405 9.74222 17.7993 7.60104C17.4674 7.2691 17.4674 6.7309 17.7993 6.39896Z" />
          <path d="M15.804 8.39432C16.1385 8.06496 16.6767 8.06913 17.0061 8.40363C17.9716 9.38424 18.2877 10.8549 18.2469 12.1395C18.2064 13.4136 17.8058 14.7842 17.0061 15.5964C16.6767 15.9309 16.1385 15.935 15.804 15.6057C15.4695 15.2763 15.4653 14.7381 15.7947 14.4036C16.1766 14.0158 16.5144 13.1364 16.5478 12.0855C16.5808 11.0451 16.3061 10.1158 15.7947 9.59637C15.4653 9.26186 15.4695 8.72369 15.804 8.39432Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function FaceIdIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'currentColor', strokeWidth: 0, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Face ID icon'}</title>
          <path d="M2 5.50459C2 3.54207 3.54207 2 5.50459 2H7.65138C8.12767 2 8.51377 2.38611 8.51377 2.86239C8.51377 3.33868 8.12767 3.72479 7.65138 3.72479H5.50459C4.49464 3.72479 3.72479 4.49464 3.72479 5.50459V7.65138C3.72479 8.12767 3.33868 8.51377 2.86239 8.51377C2.38611 8.51377 2 8.12767 2 7.65138V5.50459Z" />
          <path d="M15.4867 2.86239C15.4867 2.38611 15.8728 2 16.3491 2H18.4958C20.4584 2 22.0004 3.54207 22.0004 5.50459V7.65138C22.0004 8.12767 21.6143 8.51377 21.138 8.51377C20.6618 8.51377 20.2756 8.12767 20.2756 7.65138V5.50459C20.2756 4.49464 19.5058 3.72479 18.4958 3.72479H16.3491C15.8728 3.72479 15.4867 3.33868 15.4867 2.86239Z" />
          <path d="M2 16.3486C2 15.8723 2.38611 15.4862 2.86239 15.4862C3.33868 15.4862 3.72479 15.8723 3.72479 16.3486V18.4954C3.72479 19.5054 4.49464 20.2752 5.50459 20.2752H7.65138C8.12767 20.2752 8.51377 20.6613 8.51377 21.1376C8.51377 21.6139 8.12767 22 7.65138 22H5.50459C3.54207 22 2 20.4579 2 18.4954V16.3486Z" />
          <path d="M20.2756 16.3486C20.2756 15.8723 20.6618 15.4862 21.138 15.4862C21.6143 15.4862 22.0004 15.8723 22.0004 16.3486V18.4954C22.0004 20.4579 20.4584 22 18.4958 22H16.3491C15.8728 22 15.4867 21.6139 15.4867 21.1376C15.4867 20.6613 15.8728 20.2752 16.3491 20.2752H18.4958C19.5058 20.2752 20.2756 19.5054 20.2756 18.4954V16.3486Z" />
          <path d="M7.23922 9.64313C7.23922 9.1797 7.59573 8.7601 8.08785 8.7601C8.57997 8.7601 8.93648 9.1797 8.93648 9.64313V11.0201C8.93648 11.4835 8.57997 11.9031 8.08785 11.9031C7.59573 11.9031 7.23922 11.4835 7.23922 11.0201V9.64313Z" />
          <path d="M15.1815 9.64313C15.1815 9.1797 15.538 8.7601 16.0301 8.7601C16.5222 8.7601 16.8787 9.1797 16.8787 9.64313V11.0201C16.8787 11.4835 16.5222 11.9031 16.0301 11.9031C15.538 11.9031 15.1815 11.4835 15.1815 11.0201V9.64313Z" />
          <path d="M8.31888 15.6285C8.64823 15.2756 9.20127 15.2566 9.55414 15.5859C10.2348 16.2212 11.0347 16.5339 11.9998 16.5339C12.9649 16.5339 13.7649 16.2212 14.4455 15.5859C14.7984 15.2566 15.3514 15.2756 15.6807 15.6285C16.0101 15.9814 15.991 16.5344 15.6382 16.8638C14.6291 17.8056 13.4011 18.2818 11.9998 18.2818C10.5985 18.2818 9.37054 17.8056 8.36148 16.8638C8.00861 16.5344 7.98954 15.9814 8.31888 15.6285Z" />
          <path d="M11.6328 9.63408C11.6328 9.15139 12.0241 8.7601 12.5068 8.7601C12.9895 8.7601 13.3808 9.15139 13.3808 9.63408V13.1831C13.3808 14.1735 12.6509 14.9021 11.6605 14.9021H11.3238C10.8411 14.9021 10.4498 14.5108 10.4498 14.0281C10.4498 13.5454 10.8411 13.1541 11.3238 13.1541H11.6328V9.63408Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function TouchIdIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'currentColor', strokeWidth: 0, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Touch ID icon'}</title>
          <path d="M11.7436 14.3776C12.2407 14.378 12.6433 14.7812 12.643 15.2783C12.6425 15.9945 12.8019 16.7017 13.1096 17.3484C13.4172 17.9951 13.8655 18.565 14.4215 19.0164C14.9775 19.4678 15.6272 19.7893 16.3234 19.9576C17.0195 20.1258 17.7444 20.1365 18.4452 19.9889C18.9316 19.8864 19.4089 20.1976 19.5114 20.684C19.6139 21.1704 19.3027 21.6478 18.8163 21.7502C17.8533 21.9531 16.8571 21.9384 15.9005 21.7072C14.9439 21.476 14.051 21.0341 13.2869 20.4138C12.5229 19.7935 11.907 19.0104 11.4841 18.1217C11.0613 17.233 10.8423 16.2612 10.843 15.277C10.8433 14.7799 11.2466 14.3773 11.7436 14.3776Z" />
          <path d="M11.743 10.4672C10.4672 10.4672 9.24358 10.974 8.34143 11.8761L8.33634 11.8812C7.43796 12.7822 6.93311 14.0026 6.93243 15.2751L6.93243 15.2784C6.93064 17.8312 7.86134 20.2968 9.54961 22.2116C9.87832 22.5845 9.84255 23.1532 9.46971 23.4819C9.09687 23.8106 8.52815 23.7749 8.19943 23.402C6.22177 21.1589 5.13118 18.2709 5.13243 15.2806L5.13243 15.2777C5.13243 13.5244 5.8289 11.843 7.06861 10.6033L7.07463 10.5973C8.31377 9.36136 9.99259 8.66715 11.743 8.66715C13.4962 8.66715 15.1776 9.3636 16.4173 10.6033C17.657 11.843 18.3535 13.5245 18.3535 15.2777C18.3535 15.7747 17.9506 16.1777 17.4535 16.1777C16.9565 16.1777 16.5535 15.7747 16.5535 15.2777C16.5535 14.0018 16.0467 12.7783 15.1445 11.8761C14.2424 10.974 13.0188 10.4672 11.743 10.4672Z" />
          <path d="M11.743 7.6117C9.70992 7.6117 7.7601 8.41934 6.32249 9.85695C4.885 11.2944 4.07737 13.2441 4.07723 15.277C4.07924 16.8462 4.35786 18.4028 4.90029 19.8752C5.07211 20.3417 4.83329 20.8591 4.36688 21.0309C3.90046 21.2027 3.38307 20.9639 3.21125 20.4975C2.59562 18.8262 2.27944 17.0596 2.27723 15.2786L2.27723 15.2775C2.27723 12.767 3.27451 10.3593 5.04969 8.58416C6.82488 6.80898 9.23254 5.81171 11.743 5.81171C14.2535 5.81171 16.6612 6.80898 18.4363 8.58416C20.2115 10.3593 21.2088 12.767 21.2088 15.2775C21.2088 15.7746 20.8059 16.1775 20.3088 16.1775C19.8118 16.1775 19.4088 15.7746 19.4088 15.2775C19.4088 13.2444 18.6012 11.2946 17.1635 9.85695C15.7259 8.41934 13.7761 7.6117 11.743 7.6117Z" />
          <path d="M9.08769 12.6221C9.79195 11.9178 10.7471 11.5222 11.7431 11.5222C12.739 11.5222 13.6942 11.9178 14.3984 12.6221C15.1027 13.3263 15.4983 14.2815 15.4983 15.2775C15.4983 15.796 15.7043 16.2934 16.071 16.6601C16.4377 17.0267 16.935 17.2327 17.4536 17.2327C17.9722 17.2327 18.4695 17.0267 18.8362 16.6601C19.2029 16.2934 19.4088 15.7961 19.4088 15.2775C19.4088 14.7804 19.8118 14.3775 20.3089 14.3775C20.8059 14.3775 21.2088 14.7804 21.2088 15.2775C21.2088 16.2735 20.8132 17.2286 20.109 17.9329C19.4047 18.6371 18.4496 19.0327 17.4536 19.0327C16.4576 19.0327 15.5025 18.6371 14.7982 17.9329C14.094 17.2286 13.6983 16.2734 13.6983 15.2775C13.6983 14.7589 13.4923 14.2616 13.1256 13.8949C12.759 13.5282 12.2616 13.3222 11.7431 13.3222C11.2245 13.3222 10.7272 13.5282 10.3605 13.8949C9.9938 14.2616 9.7878 14.7589 9.7878 15.2775C9.78718 16.7214 10.1944 18.1366 10.9626 19.3593C11.7307 20.5819 12.8286 21.5628 14.1298 22.1889C14.5777 22.4044 14.7661 22.9422 14.5506 23.3901C14.335 23.838 13.7972 24.0264 13.3493 23.8109C11.7426 23.0378 10.387 21.8266 9.43842 20.3168C8.48994 18.8072 7.98711 17.0604 7.9878 15.2775M9.08769 12.6221C8.38353 13.3263 7.9879 14.2817 7.9878 15.2775L9.08769 12.6221Z" />
          <path d="M11.7529 4.7491C9.9483 4.7491 8.17404 5.21326 6.60064 6.09699C5.02723 6.98072 3.70759 8.2543 2.76853 9.79533C2.50988 10.2198 1.95611 10.3542 1.53165 10.0955C1.1072 9.83689 0.972784 9.28312 1.23144 8.85867C2.33115 7.054 3.87657 5.56252 5.71916 4.5276C7.56175 3.49267 9.63956 2.9491 11.7529 2.9491C13.8662 2.9491 15.9441 3.49267 17.7867 4.5276C19.6292 5.56252 21.1747 7.054 22.2744 8.85867C22.533 9.28312 22.3986 9.83689 21.9742 10.0955C21.5497 10.3542 20.9959 10.2198 20.7373 9.79533C19.7982 8.2543 18.4786 6.98072 16.9052 6.09699C15.3318 5.21326 13.5575 4.7491 11.7529 4.7491Z" />
          <path d="M11.7528 1.89998C9.35019 1.89998 6.9919 2.54711 4.92576 3.77338C4.49832 4.02707 3.94615 3.88622 3.69246 3.45878C3.43877 3.03134 3.57963 2.47917 4.00707 2.22548C6.35124 0.834197 9.02687 0.0999756 11.7528 0.0999756C14.4788 0.0999756 17.1544 0.834197 19.4986 2.22548C19.926 2.47917 20.0669 3.03134 19.8132 3.45878C19.5595 3.88622 19.0073 4.02707 18.5799 3.77338C16.5137 2.54711 14.1555 1.89998 11.7528 1.89998Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function AsteriskIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'currentColor', strokeWidth: 0, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Asterisk icon'}</title>
          <path d="M11.9999 21C11.4477 21 10.9999 20.5523 10.9999 20L10.9999 13.732L5.5717 16.866C5.09341 17.1422 4.48182 16.9783 4.20567 16.5C3.92953 16.0217 4.09341 15.4101 4.5717 15.134L9.9999 12L4.5717 8.86602C4.09341 8.58988 3.92953 7.97829 4.20567 7.5C4.48182 7.0217 5.09341 6.85783 5.5717 7.13397L10.9999 10.268L10.9999 4C10.9999 3.44772 11.4477 3 11.9999 3C12.5522 3 12.9999 3.44772 12.9999 4L12.9999 10.2679L18.4281 7.13397C18.9064 6.85783 19.518 7.02171 19.7941 7.5C20.0703 7.97829 19.9064 8.58988 19.4281 8.86602L13.9999 12L19.4281 15.134C19.9064 15.4101 20.0703 16.0217 19.7941 16.5C19.518 16.9783 18.9064 17.1422 18.4281 16.866L12.9999 13.7321L12.9999 20C12.9999 20.5523 12.5522 21 11.9999 21Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function AlertTriangleIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Alert triangle icon'}</title>
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function RotateClockwiseIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Rotate clockwise icon'}</title>
          <polyline points="23 4 23 10 17 10" />
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function CoinsIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'currentColor', strokeWidth: 0, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Coins icon'}</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 8.75054L1.00006 12.5C1.00006 13.2053 1.34443 13.7989 1.80196 14.2533C2.25542 14.7036 2.86417 15.0661 3.54089 15.3504C4.89774 15.9203 6.70552 16.25 8.65221 16.25C10.5989 16.25 12.4067 15.9203 13.7635 15.3504C14.4403 15.0661 15.049 14.7036 15.5025 14.2533C15.96 13.7989 16.3044 13.2053 16.3044 12.5V10.6554C17.6572 10.7422 18.838 11.0087 19.7055 11.373C20.2405 11.5977 20.6123 11.8412 20.8364 12.0639C21.0565 12.2824 21.0869 12.4288 21.0869 12.5001C21.0869 12.5714 21.0565 12.7177 20.8364 12.9363C20.6123 13.1589 20.2405 13.4024 19.7055 13.6271C18.6443 14.0729 17.1142 14.3721 15.3738 14.375C14.9367 14.7695 14.3782 15.0922 13.7635 15.3504C13.2374 15.5714 12.6434 15.7563 11.9998 15.8998C13.016 16.1265 14.1558 16.2501 15.3478 16.2501C17.2945 16.2501 19.1022 15.9204 20.4591 15.3505C20.6764 15.2592 20.8866 15.1599 21.087 15.0522V16.25C21.087 16.3213 21.0566 16.4676 20.8365 16.6862C20.6123 16.9088 20.2405 17.1523 19.7056 17.377C18.6391 17.825 17.099 18.125 15.3478 18.125C13.5966 18.125 12.0566 17.825 10.9901 17.377C10.4551 17.1523 10.0833 16.9088 9.85914 16.6862C9.63903 16.4676 9.60868 16.3213 9.60868 16.25V16.2232C9.29462 16.2409 8.97536 16.25 8.65221 16.25C8.32907 16.25 8.0097 16.2409 7.69563 16.2232L7.69563 16.25C7.69563 16.9554 8.04001 17.5489 8.49753 18.0033C8.951 18.4536 9.55975 18.8162 10.2365 19.1004C11.5933 19.6704 13.4011 20 15.3478 20C17.2945 20 19.1023 19.6704 20.4592 19.1004C21.1359 18.8162 21.7446 18.4536 22.1981 18.0033C22.6556 17.5489 23 16.9554 23 16.25L22.9999 12.5001C22.9999 11.7947 22.6556 11.2012 22.198 10.7468C21.7446 10.2965 21.1358 9.9339 20.4591 9.64964C19.3275 9.17432 17.8823 8.86614 16.3044 8.77692V8.75003C16.3044 8.04467 15.9599 7.45109 15.5024 6.99672C15.0489 6.54638 14.4402 6.18382 13.7635 5.89957C12.4066 5.32962 10.5988 5 8.65215 5C6.70546 5 4.89768 5.32962 3.54083 5.89957C2.86411 6.18382 2.25536 6.54638 1.8019 6.99672C1.34437 7.45109 1 8.04519 1 8.75054ZM3.1635 8.31379C2.94338 8.53239 2.91304 8.67871 2.91304 8.75001C2.91304 8.82131 2.94339 8.96764 3.1635 9.18623C3.38766 9.40885 3.75947 9.65235 4.29442 9.87705C5.36091 10.325 6.90094 10.625 8.65215 10.625C10.4034 10.625 11.9434 10.325 13.0099 9.87705C13.5448 9.65235 13.9166 9.40885 14.1408 9.18623C14.3609 8.96763 14.3913 8.82131 14.3913 8.75001C14.3913 8.67871 14.3609 8.53239 14.1408 8.31379C13.9166 8.09117 13.5448 7.84767 13.0099 7.62297C11.9434 7.17498 10.4034 6.87501 8.65215 6.87501C6.90094 6.87501 5.36091 7.17498 4.29442 7.62297C3.75947 7.84767 3.38766 8.09117 3.1635 8.31379ZM13.7635 11.6005C13.9807 11.5092 14.191 11.4099 14.3913 11.3022V12.5C14.3913 12.5713 14.361 12.7176 14.1409 12.9362C13.9167 13.1588 13.5449 13.4023 13.0099 13.627C11.9435 14.075 10.4034 14.375 8.65221 14.375C6.90101 14.375 5.36098 14.075 4.29448 13.627C3.75953 13.4023 3.38773 13.1588 3.16356 12.9362C2.94345 12.7176 2.9131 12.5713 2.9131 12.5L2.91308 11.3022C3.1134 11.4099 3.32362 11.5092 3.54083 11.6005C4.89768 12.1704 6.70546 12.5 8.65215 12.5C10.5988 12.5 12.4066 12.1704 13.7635 11.6005Z"
          />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function NoSmokingIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'currentColor', strokeWidth: 0, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'No smoking icon'}</title>
          <path d="M17.214 4.05164C17.0933 3.80022 17 3.47988 17 3C17 2.44772 16.5523 2 16 2C15.4477 2 15 2.44772 15 3C15 3.77012 15.1567 4.38728 15.411 4.91711C15.6483 5.41156 15.9594 5.80018 16.1989 6.09936L16.2191 6.12469C16.4771 6.44722 16.6551 6.67563 16.786 6.94836C16.9067 7.19978 17 7.52012 17 8C17 8.55228 17.4477 9 18 9C18.5523 9 19 8.55228 19 8C19 7.22988 18.8433 6.61272 18.589 6.08289C18.3517 5.58845 18.0406 5.19983 17.8012 4.90065L17.7809 4.8753C17.5229 4.55278 17.3449 4.32437 17.214 4.05164Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L15.5858 17H2C1.44772 17 1 16.5523 1 16V12C1 11.4477 1.44772 11 2 11H9.58579L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289ZM6 13H3V15H6V13ZM8 15V13H11.5858L13.5858 15H8Z"
          />
          <path d="M23 12C23 11.4477 22.5523 11 22 11C21.4477 11 21 11.4477 21 12V16C21 16.5523 21.4477 17 22 17C22.5523 17 23 16.5523 23 16V12Z" />
          <path d="M16.5 12C16.5 11.4477 16.9477 11 17.5 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H17.5C16.9477 13 16.5 12.5523 16.5 12Z" />
          <path d="M20 2C20.5523 2 21 2.44772 21 3C21 3.47988 21.0933 3.80022 21.214 4.05164C21.3449 4.32437 21.5229 4.55278 21.7809 4.8753L21.8011 4.90063C22.0406 5.19982 22.3517 5.58845 22.589 6.08289C22.8433 6.61272 23 7.22988 23 8C23 8.55228 22.5523 9 22 9C21.4477 9 21 8.55228 21 8C21 7.52012 20.9067 7.19978 20.786 6.94836C20.6551 6.67563 20.4771 6.44722 20.2191 6.12469L20.1989 6.09936C19.9594 5.80018 19.6483 5.41156 19.411 4.91711C19.1567 4.38728 19 3.77012 19 3C19 2.44772 19.4477 2 20 2Z" />{' '}
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function NoPornographyIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'currentColor', strokeWidth: 0, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'No pornography icon'}</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L2.68177 4.09598C2.2565 4.6134 2 5.27695 2 6.0001V14.0001C2 15.657 3.34315 17.0001 5 17.0001H15.5C15.5278 17.0001 15.5553 16.999 15.5825 16.9967L17.5858 19H2C1.44772 19 1 19.4477 1 20C1 20.5523 1.44772 21 2 21H19.5858L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L3.70711 2.29289ZM13.5859 15.0001L4.11652 5.53074C4.0419 5.67084 4 5.8305 4 6.0001V14.0001C4 14.5524 4.44772 15.0001 5 15.0001H13.5859Z"
          />
          <path d="M9 3C8.44772 3 8 3.44772 8 4C8 4.55228 8.44772 5 9 5H19C19.5523 5 20 5.44772 20 6V14C20 14.3689 19.8008 14.6924 19.4993 14.8668C19.0212 15.1434 18.8579 15.7551 19.1344 16.2332C19.4109 16.7112 20.0227 16.8746 20.5007 16.598C21.3948 16.0808 22 15.1117 22 14V6C22 4.34315 20.6569 3 19 3H9Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function NoWeaponIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'currentColor', strokeWidth: 0, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'No weapon icon'}</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L3.82474 5.23895C2.752 5.69615 2 6.76026 2 8V17C2 18.6569 3.34314 20 5 20H5.11428C6.77114 20 8.11429 18.6569 8.11429 17V15.5H10.7714C11.6799 15.5 12.494 15.0962 13.0441 14.4583L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L3.70711 2.29289ZM11.6181 13.0323L10.5824 11.9967C10.5553 11.9989 10.5278 12 10.5 12H9.11429C8.562 12 8.11429 12.4477 8.11429 13V13.5H10.7714C11.1281 13.5 11.4411 13.3133 11.6181 13.0323ZM8.62542 10.0396L5.58579 7H5C4.44772 7 4 7.44772 4 8V17C4 17.5523 4.44772 18 5 18H5.11428C5.66657 18 6.11429 17.5523 6.11429 17V13C6.11429 11.5096 7.20109 10.2731 8.62542 10.0396Z"
          />
          <path d="M20 8C20 7.44772 19.5523 7 19 7H11C10.4477 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5H19C20.6569 5 22 6.34315 22 8V9C22 10.6569 20.6569 12 19 12H15.5C14.9477 12 14.5 11.5523 14.5 11C14.5 10.4477 14.9477 10 15.5 10H19C19.5523 10 20 9.55228 20 9V8Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function NoOilIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'currentColor', strokeWidth: 0, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'No oil icon'}</title>
          <path d="M8.69819 4.45433C9.59062 4.17495 10.7348 4 12 4C13.5578 4 14.9213 4.26499 15.858 4.65531C16.3286 4.85138 16.6441 5.0594 16.8267 5.23928C16.9152 5.32641 16.9595 5.39422 16.9805 5.43698C16.997 5.4705 16.9996 5.48893 16.9999 5.49686C16.9999 5.49791 16.9999 5.49895 16.9999 5.5C16.9977 5.51525 16.9398 5.827 16.1257 6.22409C15.377 6.58931 14.2609 6.87485 12.9303 6.96787C12.3793 7.00638 11.9639 7.48423 12.0025 8.03517C12.041 8.58611 12.5188 9.00151 13.0698 8.963C14.5756 8.85774 15.9584 8.53041 16.9999 8.02292V13C16.9999 13.5523 17.4477 14 17.9999 14C18.5522 14 18.9999 13.5523 18.9999 13V5.51857C19 5.51239 19 5.5062 19 5.5C19 4.80647 18.6585 4.23628 18.2303 3.8145C17.8057 3.39618 17.2425 3.0655 16.6273 2.80916C15.3925 2.29465 13.7559 2 12 2C10.5632 2 9.21404 2.19714 8.10068 2.54567C7.57362 2.71067 7.28011 3.27169 7.44511 3.79875C7.6101 4.32581 8.17113 4.61933 8.69819 4.45433Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L5 6.41421V18.4C5 19.0932 5.32843 19.6726 5.75589 20.1105C6.17887 20.5439 6.74205 20.8884 7.35974 21.156C8.59837 21.6928 10.2397 22 12 22C13.7603 22 15.4016 21.6928 16.6402 21.156C17.2579 20.8884 17.8211 20.5439 18.2441 20.1105C18.3181 20.0347 18.3892 19.9545 18.4561 19.8703L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L3.70711 2.29289ZM16.9992 18.4134L13.5112 14.9254C13.0245 14.9743 12.5185 15 12 15C10.2441 15 8.60755 14.7053 7.37274 14.1908C7.24604 14.138 7.12154 14.0821 7 14.0229V18.4C7 18.4247 7.00735 18.5294 7.18713 18.7135C7.37138 18.9023 7.68687 19.1181 8.15496 19.3209C9.0879 19.7252 10.4466 20 12 20C13.5534 20 14.912 19.7252 15.845 19.3209C16.3131 19.1181 16.6286 18.9023 16.8128 18.7135C16.9695 18.553 16.9952 18.4529 16.9992 18.4134ZM7 11.5C7 11.5053 7.00026 11.5239 7.01949 11.563C7.0405 11.6058 7.08484 11.6736 7.17329 11.7607C7.35589 11.9406 7.67141 12.1486 8.14197 12.3447C8.99341 12.6995 10.1973 12.9507 11.5793 12.9935L7 8.41421V11.5Z"
          />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function HomeIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Home icon'}</title>
          <path d="M5,22C3.903,22 3,21.097 3,20L3,9L12,2L21,9L21,20C21,21.097 20.097,22 19,22M15,22L19,22M9,22L9,12L15,12L15,22M5,22L9,22Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function HistoryTimerIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'currentColor', strokeWidth: 0, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'History timer icon'}</title>
          <path d="M10,1C9.448,1 9,1.448 9,2C9,2.552 9.448,3 10,3L14,3C14.552,3 15,2.552 15,2C15,1.448 14.552,1 14,1L10,1Z" />
          <path d="M13,10C13,9.448 12.552,9 12,9C11.448,9 11,9.448 11,10L11,14C11,14.552 11.448,15 12,15C12.552,15 13,14.552 13,14L13,10Z" />
          <path d="M11.992,7C10.278,6.986 8.618,7.603 7.328,8.732C6.038,9.861 5.207,11.424 4.992,13.125C4.923,13.673 4.423,14.061 3.875,13.992C3.327,13.923 2.939,13.423 3.008,12.875C3.283,10.688 4.352,8.678 6.011,7.227C7.669,5.776 9.802,4.984 12.005,5C13.459,5.002 14.892,5.357 16.179,6.034C17.468,6.711 18.573,7.691 19.4,8.889C20.226,10.087 20.75,11.468 20.926,12.913C21.102,14.359 20.924,15.825 20.409,17.186C19.893,18.548 19.055,19.764 17.967,20.73C16.878,21.697 15.571,22.385 14.158,22.735C12.745,23.086 11.268,23.088 9.854,22.742C8.44,22.397 7.131,21.713 6.039,20.75L6.036,20.747L5,19.827L5,22C5,22.552 4.552,23 4,23C3.448,23 3,22.552 3,22L3,17C3,16.448 3.448,16 4,16L9,16C9.552,16 10,16.448 10,17C10,17.552 9.552,18 9,18L5.955,18L7.362,19.25L7.363,19.251C8.212,20 9.23,20.531 10.329,20.8C11.429,21.069 12.577,21.067 13.676,20.794C14.775,20.522 15.792,19.987 16.639,19.235C17.486,18.483 18.137,17.537 18.538,16.478C18.939,15.419 19.077,14.279 18.94,13.155C18.804,12.031 18.396,10.957 17.753,10.025C17.111,9.093 16.251,8.331 15.249,7.804C14.246,7.277 13.131,7.001 11.999,7L11.992,7Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function SignalIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Signal icon'}</title>
          <path d="M2 8.82a15 15 0 0 1 20 0" />
          <path d="M5 12.859a10 10 0 0 1 14 0" />
          <path d="M8.5 16.429a5 5 0 0 1 7 0" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}
