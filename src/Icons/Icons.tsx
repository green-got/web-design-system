import type { ReactNode } from 'react';

export interface IIconProps {
  attributes?: { [key: string]: string | number };
  className?: string;
  height: number;
  title?: string;
  width: number;
}

export interface IIconBaseProps extends IIconProps {
  renderIcon: (title?: string) => ReactNode;
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

export function ChevronRightIcon(props: IIconProps) {
  return (
    <>
      <Icon
        attributes={props.attributes}
        className={props.className}
        height={props.height}
        renderIcon={(title) => (
          <>
            <title>{title ? title : 'Chevron right icon'}</title>
            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Chevron left icon'}</title>
          <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Chevron up icon'}</title>
          <path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Chevron down icon'}</title>
          <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'External link icon'}</title>
          <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Help icon'}</title>
          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Info icon'}</title>
          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Paperclip icon'}</title>
          <path d="M14.8287 7.75737L9.1718 13.4142C8.78127 13.8047 8.78127 14.4379 9.1718 14.8284C9.56232 15.219 10.1955 15.219 10.586 14.8284L16.2429 9.17158C17.4144 8.00001 17.4144 6.10052 16.2429 4.92894C15.0713 3.75737 13.1718 3.75737 12.0002 4.92894L6.34337 10.5858C4.39075 12.5384 4.39075 15.7042 6.34337 17.6569C8.29599 19.6095 11.4618 19.6095 13.4144 17.6569L19.0713 12L20.4855 13.4142L14.8287 19.0711C12.095 21.8047 7.66283 21.8047 4.92916 19.0711C2.19549 16.3374 2.19549 11.9053 4.92916 9.17158L10.586 3.51473C12.5386 1.56211 15.7045 1.56211 17.6571 3.51473C19.6097 5.46735 19.6097 8.63317 17.6571 10.5858L12.0002 16.2427C10.8287 17.4142 8.92916 17.4142 7.75759 16.2427C6.58601 15.0711 6.58601 13.1716 7.75759 12L13.4144 6.34316L14.8287 7.75737Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Youtube icon'}</title>
          <path d="M19.6069 6.99482C19.5307 6.69695 19.3152 6.47221 19.0684 6.40288C18.6299 6.28062 16.501 6 12.001 6C7.50098 6 5.37252 6.28073 4.93225 6.40323C4.68776 6.47123 4.4723 6.69593 4.3951 6.99482C4.2863 7.41923 4.00098 9.19595 4.00098 12C4.00098 14.804 4.2863 16.5808 4.3954 17.0064C4.47126 17.3031 4.68676 17.5278 4.93251 17.5968C5.37252 17.7193 7.50098 18 12.001 18C16.501 18 18.6299 17.7194 19.0697 17.5968C19.3142 17.5288 19.5297 17.3041 19.6069 17.0052C19.7157 16.5808 20.001 14.8 20.001 12C20.001 9.2 19.7157 7.41923 19.6069 6.99482ZM21.5442 6.49818C22.001 8.28 22.001 12 22.001 12C22.001 12 22.001 15.72 21.5442 17.5018C21.2897 18.4873 20.547 19.2618 19.6056 19.5236C17.8971 20 12.001 20 12.001 20C12.001 20 6.10837 20 4.39637 19.5236C3.45146 19.2582 2.70879 18.4836 2.45774 17.5018C2.00098 15.72 2.00098 12 2.00098 12C2.00098 12 2.00098 8.28 2.45774 6.49818C2.71227 5.51273 3.45495 4.73818 4.39637 4.47636C6.10837 4 12.001 4 12.001 4C12.001 4 17.8971 4 19.6056 4.47636C20.5505 4.74182 21.2932 5.51636 21.5442 6.49818ZM10.001 15.5V8.5L16.001 12L10.001 15.5Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Clock icon'}</title>
          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Circled x icon'}</title>
          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Text file icon'}</title>
          <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Edit icon'}</title>
          <path d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Edit line icon'}</title>
          <path d="M5 18.89H6.41421L15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89ZM21 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L9.24264 18.89H21V20.89ZM15.7279 6.74785L17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785Z" />
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
      attributes={{ fill: 'currentColor', strokeWidth: 0, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Plus icon'}</title>
          <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'X icon'}</title>
          <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Download icon'}</title>
          <path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Trash icon'}</title>
          <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 4V6H15V4H9Z" />
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
      attributes={{ fill: 'currentColor', strokeWidth: 0, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Circled plus icon'}</title>
          <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Checked square icon'}</title>
          <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Lock icon'}</title>
          <path d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM5 12V20H19V12H5ZM11 14H13V18H11V14ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Unlock icon'}</title>
          <path d="M7 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C14.7405 2 17.1131 3.5748 18.2624 5.86882L16.4731 6.76344C15.6522 5.12486 13.9575 4 12 4C9.23858 4 7 6.23858 7 9V10ZM5 12V20H19V12H5ZM10 15H14V17H10V15Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Delete icon'}</title>
          <path d="M6.53451 3H20.9993C21.5516 3 21.9993 3.44772 21.9993 4V20C21.9993 20.5523 21.5516 21 20.9993 21H6.53451C6.20015 21 5.88792 20.8329 5.70246 20.5547L0.369122 12.5547C0.145189 12.2188 0.145189 11.7812 0.369122 11.4453L5.70246 3.4453C5.88792 3.1671 6.20015 3 6.53451 3ZM7.06969 5L2.40302 12L7.06969 19H19.9993V5H7.06969ZM12.9993 10.5858L15.8277 7.75736L17.242 9.17157L14.4135 12L17.242 14.8284L15.8277 16.2426L12.9993 13.4142L10.1709 16.2426L8.75668 14.8284L11.5851 12L8.75668 9.17157L10.1709 7.75736L12.9993 10.5858Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'List icon'}</title>
          <path d="M8 4H21V6H8V4ZM3 3.5H6V6.5H3V3.5ZM3 10.5H6V13.5H3V10.5ZM3 17.5H6V20.5H3V17.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Star icon'}</title>
          <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'User icon'}</title>
          <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Checkmark icon'}</title>
          <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Bell icon'}</title>
          <path d="M5 18H19V11.0314C19 7.14806 15.866 4 12 4C8.13401 4 5 7.14806 5 11.0314V18ZM12 2C16.9706 2 21 6.04348 21 11.0314V20H3V11.0314C3 6.04348 7.02944 2 12 2ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Gear icon'}</title>
          <path d="M2.21232 14.0601C1.91928 12.6755 1.93115 11.2743 2.21316 9.94038C3.32308 10.0711 4.29187 9.7035 4.60865 8.93871C4.92544 8.17392 4.50032 7.22896 3.62307 6.53655C4.3669 5.3939 5.34931 4.39471 6.53554 3.62289C7.228 4.50059 8.17324 4.92601 8.93822 4.60914C9.7032 4.29227 10.0708 3.32308 9.93979 2.21281C11.3243 1.91977 12.7255 1.93164 14.0595 2.21364C13.9288 3.32356 14.2964 4.29235 15.0612 4.60914C15.8259 4.92593 16.7709 4.5008 17.4633 3.62356C18.606 4.36739 19.6052 5.3498 20.377 6.53602C19.4993 7.22849 19.0739 8.17373 19.3907 8.93871C19.7076 9.70369 20.6768 10.0713 21.7871 9.94028C22.0801 11.3248 22.0682 12.726 21.7862 14.06C20.6763 13.9293 19.7075 14.2969 19.3907 15.0616C19.0739 15.8264 19.4991 16.7714 20.3763 17.4638C19.6325 18.6064 18.6501 19.6056 17.4638 20.3775C16.7714 19.4998 15.8261 19.0743 15.0612 19.3912C14.2962 19.7081 13.9286 20.6773 14.0596 21.7875C12.675 22.0806 11.2738 22.0687 9.93989 21.7867C10.0706 20.6768 9.70301 19.708 8.93822 19.3912C8.17343 19.0744 7.22848 19.4995 6.53606 20.3768C5.39341 19.633 4.39422 18.6506 3.62241 17.4643C4.5001 16.7719 4.92552 15.8266 4.60865 15.0616C4.29179 14.2967 3.32259 13.9291 2.21232 14.0601ZM3.99975 12.2104C5.09956 12.5148 6.00718 13.2117 6.45641 14.2963C6.90564 15.3808 6.75667 16.5154 6.19421 17.5083C6.29077 17.61 6.38998 17.7092 6.49173 17.8056C7.4846 17.2432 8.61912 17.0943 9.70359 17.5435C10.7881 17.9927 11.485 18.9002 11.7894 19.9999C11.9295 20.0037 12.0697 20.0038 12.2099 20.0001C12.5143 18.9003 13.2112 17.9927 14.2958 17.5435C15.3803 17.0942 16.5149 17.2432 17.5078 17.8057C17.6096 17.7091 17.7087 17.6099 17.8051 17.5081C17.2427 16.5153 17.0938 15.3807 17.543 14.2963C17.9922 13.2118 18.8997 12.5149 19.9994 12.2105C20.0032 12.0704 20.0033 11.9301 19.9996 11.7899C18.8998 11.4856 17.9922 10.7886 17.543 9.70407C17.0937 8.61953 17.2427 7.48494 17.8052 6.49204C17.7086 6.39031 17.6094 6.2912 17.5076 6.19479C16.5148 6.75717 15.3803 6.9061 14.2958 6.4569C13.2113 6.0077 12.5144 5.10016 12.21 4.00044C12.0699 3.99666 11.9297 3.99659 11.7894 4.00024C11.4851 5.10005 10.7881 6.00767 9.70359 6.4569C8.61904 6.90613 7.48446 6.75715 6.49155 6.1947C6.38982 6.29126 6.29071 6.39047 6.19431 6.49222C6.75668 7.48509 6.90561 8.61961 6.45641 9.70407C6.00721 10.7885 5.09967 11.4855 3.99995 11.7899C3.99617 11.93 3.9961 12.0702 3.99975 12.2104ZM11.9997 15.0002C10.3428 15.0002 8.99969 13.657 8.99969 12.0002C8.99969 10.3433 10.3428 9.00018 11.9997 9.00018C13.6565 9.00018 14.9997 10.3433 14.9997 12.0002C14.9997 13.657 13.6565 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Eye icon'}</title>
          <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Eye closed icon'}</title>
          <path d="M17.8827 19.2968C16.1814 20.3755 14.1638 21.0002 12.0003 21.0002C6.60812 21.0002 2.12215 17.1204 1.18164 12.0002C1.61832 9.62282 2.81932 7.5129 4.52047 5.93457L1.39366 2.80777L2.80788 1.39355L22.6069 21.1925L21.1927 22.6068L17.8827 19.2968ZM5.9356 7.3497C4.60673 8.56015 3.6378 10.1672 3.22278 12.0002C4.14022 16.0521 7.7646 19.0002 12.0003 19.0002C13.5997 19.0002 15.112 18.5798 16.4243 17.8384L14.396 15.8101C13.7023 16.2472 12.8808 16.5002 12.0003 16.5002C9.51498 16.5002 7.50026 14.4854 7.50026 12.0002C7.50026 11.1196 7.75317 10.2981 8.19031 9.60442L5.9356 7.3497ZM12.9139 14.328L9.67246 11.0866C9.5613 11.3696 9.50026 11.6777 9.50026 12.0002C9.50026 13.3809 10.6196 14.5002 12.0003 14.5002C12.3227 14.5002 12.6309 14.4391 12.9139 14.328ZM20.8068 16.5925L19.376 15.1617C20.0319 14.2268 20.5154 13.1586 20.7777 12.0002C19.8603 7.94818 16.2359 5.00016 12.0003 5.00016C11.1544 5.00016 10.3329 5.11773 9.55249 5.33818L7.97446 3.76015C9.22127 3.26959 10.5793 3.00016 12.0003 3.00016C17.3924 3.00016 21.8784 6.87992 22.8189 12.0002C22.5067 13.6998 21.8038 15.2628 20.8068 16.5925ZM11.7229 7.50857C11.8146 7.50299 11.9071 7.50016 12.0003 7.50016C14.4855 7.50016 16.5003 9.51488 16.5003 12.0002C16.5003 12.0933 16.4974 12.1858 16.4919 12.2775L11.7229 7.50857Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Sliders icon'}</title>
          <path d="M21 18V21H19V18H17V16H23V18H21ZM5 18V21H3V18H1V16H7V18H5ZM11 6V3H13V6H15V8H9V6H11ZM11 10H13V21H11V10ZM3 14V3H5V14H3ZM19 14V3H21V14H19Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Bolt icon'}</title>
          <path d="M13 9H21L11 24V15H4L13 0V9ZM11 11V7.22063L7.53238 13H13V17.3944L17.263 11H11Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Horizontal more icon'}</title>
          <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Vertical more icon'}</title>
          <path d="M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Copy icon'}</title>
          <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Users icon'}</title>
          <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Send icon'}</title>
          <path d="M3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558ZM5 4.38249V10.9999H10V12.9999H5V19.6174L18.8499 11.9999L5 4.38249Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Log in icon'}</title>
          <path d="M4 15H6V20H18V4H6V9H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V15ZM10 11V8L15 12L10 16V13H2V11H10Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Calendar icon'}</title>
          <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Card icon'}</title>
          <path d="M3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979ZM20.0049 11.9998H4.00488V18.9998H20.0049V11.9998ZM20.0049 7.99979V4.99979H4.00488V7.99979H20.0049Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Phone icon'}</title>
          <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Up and to the right icon'}</title>
          <path d="M4.99989 10.0001L4.99976 19L6.99976 19L6.99986 12.0001L17.1717 12L13.222 15.9498L14.6362 17.364L21.0001 11L14.6362 4.63605L13.222 6.05026L17.1717 10L4.99989 10.0001Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Shield icon'}</title>
          <path d="M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM12 3.04879L5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879ZM16.4524 8.22183L17.8666 9.63604L11.5026 16L7.25999 11.7574L8.67421 10.3431L11.5019 13.1709L16.4524 8.22183Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Snowflake icon'}</title>
          <path d="M11.9998 3.29814L14.4451 1.66794L15.5545 3.33204L12.9998 5.03517V10.2678L17.5313 7.65149L17.7289 4.58748L19.7247 4.7162L19.5356 7.64899L22.17 8.95159L21.2836 10.7444L18.5313 9.38354L14.0001 11.9996L18.5317 14.616L21.284 13.2551L22.1704 15.0479L19.536 16.3505L19.7251 19.2833L17.7293 19.412L17.5317 16.348L12.9998 13.7315V18.9648L15.5545 20.6679L14.4451 22.332L11.9998 20.7018L9.55446 22.332L8.44506 20.6679L10.9998 18.9648V13.7319L6.46786 16.3484L6.27026 19.4124L4.2744 19.2836L4.46355 16.3508L1.8291 15.0483L2.71555 13.2554L5.46786 14.6163L10.0001 11.9996L5.46824 9.38319L2.71594 10.7441L1.82948 8.95124L4.46393 7.64864L4.27478 4.71585L6.27064 4.58713L6.46824 7.65113L10.9998 10.2674V5.03517L8.44506 3.33204L9.55446 1.66794L11.9998 3.29814Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Search icon'}</title>
          <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Menu icon'}</title>
          <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Bank icon'}</title>
          <path d="M2 20H22V22H2V20ZM4 12H6V19H4V12ZM9 12H11V19H9V12ZM13 12H15V19H13V12ZM18 12H20V19H18V12ZM2 7L12 2L22 7V11H2V7ZM4 8.23607V9H20V8.23607L12 4.23607L4 8.23607ZM12 8C11.4477 8 11 7.55228 11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7C13 7.55228 12.5523 8 12 8Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Statement icon'}</title>
          <path d="M3 6H21V18H3V6ZM2 4C1.44772 4 1 4.44772 1 5V19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19V5C23 4.44772 22.5523 4 22 4H2ZM13 9H19V11H13V9ZM18 13H13V15H18V13ZM6 13H7V16H9V11H6V13ZM9 8H7V10H9V8Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'No card icon'}</title>
          <path d="M19.5859 21L21.1925 22.6067L22.6068 21.1925L2.80777 1.39348L1.39355 2.80769L2.11974 3.53387C2.04627 3.67306 2.00468 3.83167 2.00468 4V20C2.00468 20.5523 2.4524 21 3.00468 21H19.5859ZM17.5859 19H4.00468V12H10.5859L17.5859 19ZM6.58586 8H4.00468V5.41882L6.58586 8ZM22.0047 4V17.7622L20.0047 15.7622V12H16.2425L12.2425 8H20.0047V5H9.24251L7.24251 3H21.0047C21.557 3 22.0047 3.44771 22.0047 4Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Speech bubbles icon'}</title>
          <path d="M10 3H14C18.4183 3 22 6.58172 22 11C22 15.4183 18.4183 19 14 19V22.5C9 20.5 2 17.5 2 11C2 6.58172 5.58172 3 10 3ZM12 17H14C17.3137 17 20 14.3137 20 11C20 7.68629 17.3137 5 14 5H10C6.68629 5 4 7.68629 4 11C4 14.61 6.46208 16.9656 12 19.4798V17Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Left and right arrows icon'}</title>
          <path d="M16.0503 12.0498L21 16.9996L16.0503 21.9493L14.636 20.5351L17.172 17.9988L4 17.9996V15.9996L17.172 15.9988L14.636 13.464L16.0503 12.0498ZM7.94975 2.0498L9.36396 3.46402L6.828 5.9988L20 5.99955V7.99955L6.828 7.9988L9.36396 10.5351L7.94975 11.9493L3 6.99955L7.94975 2.0498Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Up and down arrows icon'}</title>
          <path d="M11.9498 7.94975L10.5356 9.36396L8.00079 6.828L8.00004 20H6.00004L6.00079 6.828L3.46451 9.36396L2.05029 7.94975L7.00004 3L11.9498 7.94975ZM21.9498 16.0503L17 21L12.0503 16.0503L13.4645 14.636L16.0008 17.172L16 4H18L18.0008 17.172L20.5356 14.636L21.9498 16.0503Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Ringing smartphone icon'}</title>
          <path d="M11 2V4H7V20H17V11H19V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2H11ZM13 7C14.1046 7 15 7.89543 15 9H13V7ZM13 4C15.7614 4 18 6.23858 18 9H16C16 7.34315 14.6569 6 13 6V4ZM13 1C17.4183 1 21 4.58172 21 9H19C19 5.68629 16.3137 3 13 3V1Z" />
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
          <path d="M17.0003 13V14C17.0003 16.7696 16.3364 19.445 15.0853 21.8455L14.8585 22.2663L13.1116 21.2924C14.2716 19.2115 14.9211 16.8817 14.9935 14.4559L15.0003 14V13H17.0003ZM11.0003 10H13.0003V14L12.9948 14.3787C12.9153 17.1495 11.9645 19.7731 10.3038 21.928L10.073 22.2189L8.52406 20.9536C10.0408 19.0969 10.9145 16.8017 10.9943 14.3663L11.0003 14V10ZM12.0003 6C14.7617 6 17.0003 8.23858 17.0003 11H15.0003C15.0003 9.34315 13.6571 8 12.0003 8C10.3434 8 9.00025 9.34315 9.00025 11V14C9.00025 16.2354 8.1806 18.3444 6.72928 19.9768L6.51767 20.2067L5.06955 18.8273C6.23328 17.6056 6.92099 16.0118 6.99381 14.3027L7.00025 14V11C7.00025 8.23858 9.23883 6 12.0003 6ZM12.0003 2C16.9708 2 21.0003 6.02944 21.0003 11V14C21.0003 15.6979 20.7985 17.3699 20.4035 18.9903L20.2647 19.5285L18.3349 19.0032C18.726 17.5662 18.9475 16.0808 18.9919 14.5684L19.0003 14V11C19.0003 7.13401 15.8662 4 12.0003 4C10.4279 4 8.97663 4.51841 7.80805 5.39364L6.38308 3.96769C7.92267 2.73631 9.87547 2 12.0003 2ZM4.96794 5.38282L6.39389 6.8078C5.5635 7.91652 5.0543 9.27971 5.00431 10.7593L4.99961 10.999L5.00378 13C5.00378 14.1195 4.73991 15.2026 4.24263 16.1772L4.08648 16.4663L2.34961 15.4747C2.72889 14.8103 2.95077 14.0681 2.99539 13.2924L3.00378 13L3.00361 11C3.00025 8.87522 3.73656 6.92242 4.96794 5.38282Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Asterisk icon'}</title>
          <path d="M12.9998 3L12.9996 10.267L19.294 6.63397L20.294 8.36602L14.0006 11.999L20.294 15.634L19.294 17.366L12.9996 13.732L12.9998 21H10.9998L10.9996 13.732L4.70557 17.366L3.70557 15.634L9.99857 12L3.70557 8.36602L4.70557 6.63397L10.9996 10.267L10.9998 3H12.9998Z" />
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
      attributes={{ fill: 'currentColor', strokeWidth: 0, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Alert triangle icon'}</title>
          <path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM4.20568 19.0002H19.7941L11.9999 5.50017L4.20568 19.0002ZM10.9999 16.0002H12.9999V18.0002H10.9999V16.0002ZM10.9999 9.00017H12.9999V14.0002H10.9999V9.00017Z" />
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
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Home icon'}</title>
          <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z" />
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

export function HeartIcon(props: IIconProps) {
  return (
    <Icon
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Heart icon'}</title>
          <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function EarthIcon(props: IIconProps) {
  return (
    <Icon
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Earth icon'}</title>
          <path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function TreeIcon(props: IIconProps) {
  return (
    <Icon
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Tree icon'}</title>
          <path d="M6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 7.26214 17.9831 7.5207 17.9504 7.77457C19.77 8.80413 21 10.7575 21 13C21 16.3137 18.3137 19 15 19H13V22H11V19H8.5C5.46243 19 3 16.5376 3 13.5C3 11.2863 4.30712 9.37966 6.19098 8.50704C6.06635 8.02551 6 7.52039 6 7ZM7.00964 10.3319C5.82176 10.8918 5 12.1008 5 13.5C5 15.433 6.567 17 8.5 17H15C17.2091 17 19 15.2091 19 13C19 11.3056 17.9461 9.85488 16.4544 9.27234L15.6129 8.94372C15.7907 8.30337 16 7.67183 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 8.30783 8.6266 9.46903 9.60019 10.2005L8.39884 11.7995C7.85767 11.3929 7.38716 10.8963 7.00964 10.3319Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function TrainIcon(props: IIconProps) {
  return (
    <Icon
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Train icon'}</title>
          <path d="M17.2 20L19 21.5V22H5V21.5L6.8 20H5C3.89543 20 3 19.1046 3 18V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V18C21 19.1046 20.1046 20 19 20H17.2ZM7 5C5.89543 5 5 5.89543 5 7V18H19V7C19 5.89543 18.1046 5 17 5H7ZM12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15C14 16.1046 13.1046 17 12 17ZM6 7H18V11H6V7Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function BriefcaseIcon(props: IIconProps) {
  return (
    <Icon
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Briefcase icon'}</title>
          <path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM15 7H9V19H15V7ZM7 7H4V19H7V7ZM17 7V19H20V7H17ZM9 3V5H15V3H9Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function PackageIcon(props: IIconProps) {
  return (
    <Icon
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Package icon'}</title>
          <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM5.49388 7.0777L12.0001 10.8444L18.5062 7.07774L12 3.311L5.49388 7.0777ZM4.5 8.81329V16.3469L11.0001 20.1101V12.5765L4.5 8.81329ZM13.0001 20.11L19.5 16.3469V8.81337L13.0001 12.5765V20.11Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function LaptopIcon(props: IIconProps) {
  return (
    <Icon
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Laptop icon'}</title>
          <path d="M4 5V16H20V5H4ZM2 4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V18H2V4.00748ZM1 19H23V21H1V19Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function IdCardIcon(props: IIconProps) {
  return (
    <Icon
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Id card icon'}</title>
          <path d="M3 6H21V18H3V6ZM2 4C1.44772 4 1 4.44772 1 5V19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19V5C23 4.44772 22.5523 4 22 4H2ZM13 8H19V10H13V8ZM18 12H13V14H18V12ZM10.5 10C10.5 11.3807 9.38071 12.5 8 12.5C6.61929 12.5 5.5 11.3807 5.5 10C5.5 8.61929 6.61929 7.5 8 7.5C9.38071 7.5 10.5 8.61929 10.5 10ZM8 13.5C6.067 13.5 4.5 15.067 4.5 17H11.5C11.5 15.067 9.933 13.5 8 13.5Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function MaskIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Mask icon'}</title>
          <path d="M18 11c-1.5 0-2.5.5-3 2" />
          <path d="M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z" />
          <path d="M6 11c1.5 0 2.5.5 3 2" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function CrossIcon(props: IIconProps) {
  return (
    <Icon
      attributes={{ fill: 'none', strokeWidth: 2, ...props.attributes }}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Cross icon'}</title>
          <path d="M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function CrownIcon(props: IIconProps) {
  return (
    <Icon
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Crown icon'}</title>
          <path d="M2.00488 19H22.0049V21H2.00488V19ZM2.00488 5L7.00488 8.5L12.0049 2L17.0049 8.5L22.0049 5V17H2.00488V5ZM4.00488 8.84131V15H20.0049V8.84131L16.5854 11.2349L12.0049 5.28024L7.42435 11.2349L4.00488 8.84131Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function DumbbellIcon(props: IIconProps) {
  return (
    <Icon
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Dumbbell icon'}</title>
          <path d="M14.0004 6C14.0004 7.10457 13.1049 8 12.0004 8C10.8958 8 10.0004 7.10457 10.0004 6C10.0004 4.89543 10.8958 4 12.0004 4C13.1049 4 14.0004 4.89543 14.0004 6ZM15.4652 8C15.8056 7.41165 16.0004 6.72857 16.0004 6C16.0004 3.79086 14.2095 2 12.0004 2C9.79122 2 8.00036 3.79086 8.00036 6C8.00036 6.72857 8.19515 7.41165 8.53549 8H5.06615C4.57888 8 4.16255 8.3512 4.08045 8.8315L2.2001 19.8315C2.0957 20.4423 2.56618 21 3.18581 21H20.8149C21.4345 21 21.905 20.4423 21.8006 19.8315L19.9203 8.8315C19.8382 8.3512 19.4218 8 18.9346 8H15.4652ZM12.0004 10H18.091L19.6295 19H4.37125L5.90971 10H12.0004Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function ShirtIcon(props: IIconProps) {
  return (
    <Icon
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Shirt icon'}</title>
          <path d="M8.99805 3C8.99805 4.65685 10.3412 6 11.998 6C13.6549 6 14.998 4.65685 14.998 3H20.998C21.5503 3 21.998 3.44772 21.998 4V11C21.998 11.5523 21.5503 12 20.998 12H18.997L18.998 20C18.998 20.5523 18.5503 21 17.998 21H5.99805C5.44576 21 4.99805 20.5523 4.99805 20L4.99705 11.999L2.99805 12C2.44576 12 1.99805 11.5523 1.99805 11V4C1.99805 3.44772 2.44576 3 2.99805 3H8.99805ZM19.998 4.999H16.581L16.5642 5.04018C15.8115 6.7223 14.1566 7.91251 12.2149 7.99538L11.998 8C9.96331 8 8.21245 6.7846 7.43186 5.04018L7.41405 4.999H3.99805V9.999L6.9968 9.998L6.99705 19H16.998L16.9968 10L19.998 9.999V4.999Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function ShoppingBagIcon(props: IIconProps) {
  return (
    <Icon
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Shopping bag icon'}</title>
          <path d="M6.50488 2H17.5049C17.8196 2 18.116 2.14819 18.3049 2.4L21.0049 6V21C21.0049 21.5523 20.5572 22 20.0049 22H4.00488C3.4526 22 3.00488 21.5523 3.00488 21V6L5.70488 2.4C5.89374 2.14819 6.19013 2 6.50488 2ZM19.0049 8H5.00488V20H19.0049V8ZM18.5049 6L17.0049 4H7.00488L5.50488 6H18.5049ZM9.00488 10V12C9.00488 13.6569 10.348 15 12.0049 15C13.6617 15 15.0049 13.6569 15.0049 12V10H17.0049V12C17.0049 14.7614 14.7663 17 12.0049 17C9.24346 17 7.00488 14.7614 7.00488 12V10H9.00488Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function TrendingUpIcon(props: IIconProps) {
  return (
    <Icon
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Trending up icon'}</title>
          <path d="M4.41085 14.5258L7.81249 11.1241L10.6409 13.9526L13.7978 10.7957L12.0049 9.00281H17.0049V14.0028L15.212 12.2099L10.6409 16.781L7.81249 13.9526L5.33834 16.4267C6.77158 18.5822 9.22233 20.0028 12.0049 20.0028C16.4232 20.0028 20.0049 16.4211 20.0049 12.0028C20.0049 7.58453 16.4232 4.00281 12.0049 4.00281C7.5866 4.00281 4.00488 7.58453 4.00488 12.0028C4.00488 12.8844 4.14747 13.7326 4.41085 14.5258ZM2.87288 16.084L2.86275 16.0739L2.86662 16.07C2.31276 14.8274 2.00488 13.4511 2.00488 12.0028C2.00488 6.47996 6.48204 2.00281 12.0049 2.00281C17.5277 2.00281 22.0049 6.47996 22.0049 12.0028C22.0049 17.5257 17.5277 22.0028 12.0049 22.0028C7.93574 22.0028 4.43426 19.5724 2.87288 16.084Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function UtensilsIcon(props: IIconProps) {
  return (
    <Icon
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Utensils icon'}</title>
          <path d="M21 2V22H19V15H15V8C15 4.68629 17.6863 2 21 2ZM19 4.53C18.17 5 17 6.17 17 8V13H19V4.53ZM9 13.9V22H7V13.9C4.71776 13.4367 3 11.419 3 9V3H5V10H7V3H9V10H11V3H13V9C13 11.419 11.2822 13.4367 9 13.9Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}

export function PaletteIcon(props: IIconProps) {
  return (
    <Icon
      attributes={props.attributes}
      className={props.className}
      height={props.height}
      renderIcon={(title) => (
        <>
          <title>{title ? title : 'Palette icon'}</title>
          <path d="M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM10.8111 18.1111C10.8111 16.0843 12.451 14.4444 14.4778 14.4444H16.4444C18.4065 14.4444 20 12.851 20 10.8889C20 7.1392 16.4677 4 12 4C7.58235 4 4 7.58235 4 12C4 16.19 7.2226 19.6285 11.324 19.9718C10.9948 19.4168 10.8111 18.7761 10.8111 18.1111ZM7.5 12C6.67157 12 6 11.3284 6 10.5C6 9.67157 6.67157 9 7.5 9C8.32843 9 9 9.67157 9 10.5C9 11.3284 8.32843 12 7.5 12ZM16.5 12C15.6716 12 15 11.3284 15 10.5C15 9.67157 15.6716 9 16.5 9C17.3284 9 18 9.67157 18 10.5C18 11.3284 17.3284 12 16.5 12ZM12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5C13.5 8.32843 12.8284 9 12 9Z" />
        </>
      )}
      title={props.title}
      width={props.width}
    />
  );
}
