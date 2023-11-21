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
  DeleteIcon,
  DownloadIcon,
  EditIcon,
  EditLineIcon,
  ExternalLinkIcon,
  EyeClosedIcon,
  EyeIcon,
  FaceIdIcon,
  GearIcon,
  HelpIcon,
  HistoryTimerIcon,
  HomeIcon,
  InfoIcon,
  LeftRightArrowsIcon,
  ListIcon,
  LockIcon,
  LoginIcon,
  MenuIcon,
  MoreHorizontalIcon,
  MoreVerticalIcon,
  NoCardIcon,
  NoOilIcon,
  NoPornographyIcon,
  NoSmokingIcon,
  NoWeaponIcon,
  PaperclipIcon,
  PhoneIcon,
  PlusIcon,
  RotateClockwiseIcon,
  SearchIcon,
  SendIcon,
  ShieldIcon,
  SlidersIcon,
  SmartphoneRingingIcon,
  SnowflakeIcon,
  SpeechBubblesIcon,
  StarIcon,
  StatementIcon,
  TextFileIcon,
  TouchIdIcon,
  TrashIcon,
  UnlockIcon,
  UpDownArrowsIcon,
  UpToTheRightIcon,
  UserIcon,
  UsersIcon,
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
        <ChevronLeftIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <ChevronRightIcon height={16} title="Chevron droit" width={16} />
      </div>
      <div style={cardStyles}>
        <ChevronDownIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <ChevronUpIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <ExternalLinkIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <HelpIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <InfoIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <PaperclipIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <YoutubeIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <ClockIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <CircledXIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <TextFileIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <EditIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <EditLineIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <PlusIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <XIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <DownloadIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <TrashIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <CircledPlusIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <CheckedSquareIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <UnlockIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <LockIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <DeleteIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <ListIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <StarIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <UserIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <CheckmarkIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <BellIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <GearIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <EyeIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <EyeClosedIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <SlidersIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <BoltIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <MoreHorizontalIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <MoreVerticalIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <CopyIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <UsersIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <SendIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <LoginIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <CalendarIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <CardIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <PhoneIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <ArcIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <UpToTheRightIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <ShieldIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <SnowflakeIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <SearchIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <MenuIcon height={16} width={16} />
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
        <BankIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <StatementIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <NoCardIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <StarIcon
          attributes={{ fill: 'currentColor' }}
          height={16}
          width={16}
        />
      </div>
      <div style={cardStyles}>
        <SpeechBubblesIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <LeftRightArrowsIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <UpDownArrowsIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <SmartphoneRingingIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <FaceIdIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <TouchIdIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <AsteriskIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <AlertTriangleIcon height={16} width={16} />
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
        <HomeIcon height={16} width={16} />
      </div>
      <div style={cardStyles}>
        <HistoryTimerIcon height={16} width={16} />
      </div>
    </div>
  </>
);
