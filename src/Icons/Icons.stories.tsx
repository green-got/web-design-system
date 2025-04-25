import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';
import {
  AlertTriangleIcon,
  ArcIcon,
  AsteriskIcon,
  BankIcon,
  BellIcon,
  BoltIcon,
  BriefcaseIcon,
  CalendarIcon,
  CardIcon,
  CheckedSquareIcon,
  CheckmarkIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircledPlusIcon,
  CircledXIcon,
  ClockIcon,
  CoinsIcon,
  CopyIcon,
  CrossIcon,
  CrownIcon,
  DeleteIcon,
  DownloadIcon,
  DumbbellIcon,
  EarthIcon,
  EditIcon,
  EditLineIcon,
  ExternalLinkIcon,
  EyeClosedIcon,
  EyeIcon,
  FaceIdIcon,
  GearIcon,
  HeartIcon,
  HelpIcon,
  HistoryTimerIcon,
  HomeIcon,
  IdCardIcon,
  InfoIcon,
  LaptopIcon,
  LeftRightArrowsIcon,
  ListIcon,
  LockIcon,
  LoginIcon,
  MaskIcon,
  MenuIcon,
  MoreHorizontalIcon,
  MoreVerticalIcon,
  NoCardIcon,
  NoOilIcon,
  NoPornographyIcon,
  NoSmokingIcon,
  NoWeaponIcon,
  PackageIcon,
  PaletteIcon,
  PaperclipIcon,
  PhoneIcon,
  PlusIcon,
  RotateClockwiseIcon,
  SearchIcon,
  SendIcon,
  ShieldIcon,
  SignalIcon,
  ShirtIcon,
  ShoppingBagIcon,
  SlidersIcon,
  SmartphoneRingingIcon,
  SnowflakeIcon,
  SpeechBubblesIcon,
  StarIcon,
  StatementIcon,
  TextFileIcon,
  TouchIdIcon,
  TrainIcon,
  TrashIcon,
  TreeIcon,
  TrendingUpIcon,
  UnlockIcon,
  UpDownArrowsIcon,
  UpToTheRightIcon,
  UserIcon,
  UsersIcon,
  UtensilsIcon,
  XIcon,
  YoutubeIcon,
} from './Icons';

export default {
  title: 'Foundations / Icons',
} satisfies StoryDefault;

const cardStyles = {
  alignItems: 'center',
  backgroundColor: '#efefef',
  borderRadius: '5px',
  display: 'flex',
  height: '50px',
  justifyContent: 'center',
  width: '35px',
};

const turnStyles = {
  ...cardStyles,
  transform: 'rotate(90deg)',
};

export const Icons: Story = () => (
  <>
    <GlobalStyles />
    <h1 style={{ margin: '2rem 0' }}>Functional icons</h1>
    <div
      style={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns:
          '35px 35px 35px 35px 35px 35px 35px 35px 35px 35px 35px 35px',
      }}
    >
      <div style={cardStyles}>
        <ChevronLeftIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <ChevronRightIcon height={18} title="Chevron droit" width={18} />
      </div>
      <div style={cardStyles}>
        <ChevronDownIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <ChevronUpIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <LeftRightArrowsIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <UpDownArrowsIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <ExternalLinkIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <AsteriskIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <PlusIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <XIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <CircledXIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <CircledPlusIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <HelpIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <InfoIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <AlertTriangleIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <CheckmarkIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <CheckedSquareIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <ShieldIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <PaperclipIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <ClockIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <CalendarIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <TextFileIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <EditIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <EditLineIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <DownloadIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <TrashIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <DeleteIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <UnlockIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <LockIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <UserIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <UsersIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <BellIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <GearIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <EyeIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <EyeClosedIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <SearchIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <SlidersIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <StarIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <BoltIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <CopyIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <SendIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <LoginIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <UpToTheRightIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <CardIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <NoCardIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <PhoneIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <ListIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <MenuIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <MoreHorizontalIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <MoreVerticalIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <YoutubeIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <SnowflakeIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <BankIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <StatementIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <IdCardIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <TouchIdIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <SpeechBubblesIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <SmartphoneRingingIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <HomeIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <HeartIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <EarthIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <TreeIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <TrainIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <LaptopIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <BriefcaseIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <PackageIcon height={18} width={18} />
      </div>

      <div style={cardStyles}>
        <CrownIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <DumbbellIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <ShirtIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <ShoppingBagIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <TrendingUpIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <UtensilsIcon height={18} width={18} />
      </div>
      <div style={cardStyles}>
        <PaletteIcon height={18} width={18} />
      </div>
    </div>
    <h1 style={{ margin: '2rem 0' }}>Custom icons</h1>
    <div
      style={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns:
          '35px 35px 35px 35px 35px 35px 35px 35px 35px 35px 35px 35px',
      }}
    >
      <div style={cardStyles}>
        <ArcIcon height={16} width={16} />
      </div>

      <div style={cardStyles}>
        <FaceIdIcon height={16} width={16} />
      </div>

      <div style={cardStyles}>
        <RotateClockwiseIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <CoinsIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <NoSmokingIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <NoPornographyIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <NoWeaponIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <NoOilIcon height={16} width={16} />
      </div>

      <div style={cardStyles}>
        <HistoryTimerIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <SignalIcon height={16} width={16} />
      </div>

      <div style={cardStyles}>
        <CrossIcon height={16} width={16} />
      </div>

      <div style={cardStyles}>
        <MaskIcon height={16} width={16} />
      </div>
    </div>
  </>
);
