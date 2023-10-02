import React from 'react';
export interface IIconProps {
    attributes?: {
        [key: string]: string | number;
    };
    className?: string;
    height: number;
    title?: string;
    width: number;
}
export interface IIconBaseProps extends IIconProps {
    renderIcon: (title: string) => React.ReactNode;
}
export declare function ChevronRightIcon(props: any): any;
export declare function ChevronLeftIcon(props: IIconProps): any;
export declare function ChevronUpIcon(props: IIconProps): any;
export declare function ChevronDownIcon(props: IIconProps): any;
export declare function ExternalLinkIcon(props: IIconProps): any;
export declare function HelpIcon(props: IIconProps): any;
export declare function InfoIcon(props: IIconProps): any;
export declare function PaperclipIcon(props: IIconProps): any;
export declare function YoutubeIcon(props: IIconProps): any;
export declare function ClockIcon(props: IIconProps): any;
export declare function CircledXIcon(props: IIconProps): any;
export declare function TextFileIcon(props: IIconProps): any;
export declare function EditIcon(props: IIconProps): any;
export declare function EditLineIcon(props: IIconProps): any;
export declare function PlusIcon(props: IIconProps): any;
export declare function XIcon(props: IIconProps): any;
export declare function DownloadIcon(props: IIconProps): any;
export declare function TrashIcon(props: IIconProps): any;
export declare function CircledPlusIcon(props: IIconProps): any;
export declare function CheckedSquareIcon(props: IIconProps): any;
export declare function LockIcon(props: IIconProps): any;
export declare function UnlockIcon(props: IIconProps): any;
export declare function DeleteIcon(props: IIconProps): any;
export declare function ListIcon(props: IIconProps): any;
export declare function StarIcon(props: IIconProps): any;
export declare function UserIcon(props: IIconProps): any;
export declare function CheckmarkIcon(props: IIconProps): any;
export declare function BellIcon(props: IIconProps): any;
export declare function GearIcon(props: IIconProps): any;
export declare function EyeIcon(props: IIconProps): any;
export declare function EyeClosedIcon(props: IIconProps): any;
export declare function SlidersIcon(props: IIconProps): any;
export declare function BoltIcon(props: IIconProps): any;
export declare function MoreHorizontalIcon(props: IIconProps): any;
export declare function MoreVerticalIcon(props: IIconProps): any;
export declare function CopyIcon(props: IIconProps): any;
export declare function UsersIcon(props: IIconProps): any;
export declare function SendIcon(props: IIconProps): any;
export declare function LoginIcon(props: IIconProps): any;
export declare function CalendarIcon(props: IIconProps): any;
export declare function CardIcon(props: IIconProps): any;
export declare function PhoneIcon(props: IIconProps): any;
export declare function ArcIcon(props: IIconProps): any;
export declare function UpToTheRightIcon(props: IIconProps): any;
export declare function ShieldIcon(props: IIconProps): any;
export declare function SnowflakeIcon(props: IIconProps): any;
export declare function SearchIcon(props: IIconProps): any;
export declare function BankIcon(props: IIconProps): any;
export declare function StatementIcon(props: IIconProps): any;
export declare function NoCardIcon(props: IIconProps): any;
export declare function SpeechBubblesIcon(props: IIconProps): any;
export declare function LeftRightArrowsIcon(props: IIconProps): any;
export declare function UpDownArrowsIcon(props: IIconProps): any;
export declare function SmartphoneRingingIcon(props: IIconProps): any;
export declare function FaceIdIcon(props: IIconProps): any;
export declare function TouchIdIcon(props: IIconProps): any;
export declare function AsteriskIcon(props: IIconProps): any;
export declare function AlertTriangleIcon(props: IIconProps): any;
export declare function RotateClockwiseIcon(props: IIconProps): any;
export declare function CoinsIcon(props: IIconProps): any;
export declare function NoSmokingIcon(props: IIconProps): any;
export declare function NoPornographyIcon(props: IIconProps): any;
export declare function NoWeaponIcon(props: IIconProps): any;
export declare function NoOilIcon(props: IIconProps): any;
