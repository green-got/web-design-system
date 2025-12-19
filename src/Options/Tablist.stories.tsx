import type { StoryDefault, Story } from '@ladle/react';
import { Tablist, Tab } from './Tablist';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default {
  title: 'Components / Tablist',
} satisfies StoryDefault;

export const TablistMain: Story = () => {
  return (
    <>
      <GlobalStyles />

      <h1>Tablist</h1>
      <Tablist>
        <Tab active href="#" id="option-a">
          Option A
        </Tab>
        <Tab href="#" id="option-b">
          Option B
        </Tab>
        <Tab href="#" id="option-c">
          Option C
        </Tab>
        <Tab disabled href="#" id="option-d">
          Option D
        </Tab>
      </Tablist>
    </>
  );
};
