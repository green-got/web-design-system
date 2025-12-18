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
        renderItem={() => (
          <a href="#">
            <span>
              <InfoIcon height={20} width={20} />
              <span>My route</span>
            </span>
            <ChevronDownIcon height={16} width={16} />
          </a>
        )}
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
      <p>Group with selected nav item</p>
      <NavGroup
        active
        activeGroup
        renderItem={() => (
          <a href="#">
            <span>
              <InfoIcon height={20} width={20} />
              <span>My other route</span>
            </span>
            <ChevronDownIcon height={16} width={16} />
          </a>
        )}
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
      <p>Group with selected sub nav item</p>
      <NavGroup
        active
        renderItem={() => (
          <a href="#">
            <span>
              <InfoIcon height={20} width={20} />
              <span>Yet another route</span>
            </span>
            <ChevronDownIcon height={16} width={16} />
          </a>
        )}
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
