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
        <Tab active href="#" label="Option A" id="option-a" />
        <Tab href="#" label="Option B" id="option-b" />
        <Tab href="#" label="Option C" id="option-c" />
        <Tab disabled href="#" label="Option D" id="option-d" />
      </Tablist>
    </>
  );
};
