import type { StoryDefault, Story } from '@ladle/react';
import { NavGroup } from './NavGroup';
import { NavItem } from './NavItem';
import { NavSubItem } from './NavSubItem';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';
import { ChevronDownIcon, InfoIcon } from '../Icons/Icons';

export default {
  title: 'Components / Nav',
} satisfies StoryDefault;

export const NavMain: Story = () => {
  return (
    <>
      <GlobalStyles />

      <h1>Nav</h1>

      <p>Default</p>
      <NavItem>
        <a href="#">
          <InfoIcon height={20} width={20} />
          <span>Navigation label</span>
        </a>
      </NavItem>
      <br />
      <p>Selected</p>
      <NavItem active>
        <a href="#">
          <InfoIcon height={20} width={20} />
          <span>Navigation label</span>
        </a>
      </NavItem>
      <br />
      <p>Group</p>
      <NavGroup
        id="nav-group"
        label="My route"
        renderIcon={() => <InfoIcon height={20} width={20} />}
      >
        <NavSubItem>
          <a href="#">
            <span>Navigation label</span>
          </a>
        </NavSubItem>
        <NavSubItem>
          <a href="#">
            <span>Navigation label</span>
          </a>
        </NavSubItem>
        <NavSubItem>
          <a href="#">
            <span>Navigation label</span>
          </a>
        </NavSubItem>
      </NavGroup>
      <br />
      <p>Group with selected</p>
      <NavGroup
        id="nav-group"
        label="My other route"
        renderIcon={() => <InfoIcon height={20} width={20} />}
      >
        <NavSubItem>
          <a href="#">
            <span>Navigation label</span>
          </a>
        </NavSubItem>
        <NavSubItem active>
          <a href="#">
            <span>Navigation label</span>
          </a>
        </NavSubItem>
        <NavSubItem>
          <a href="#">
            <span>Navigation label</span>
          </a>
        </NavSubItem>
      </NavGroup>
    </>
  );
};
