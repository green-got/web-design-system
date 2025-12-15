import type { StoryDefault, Story } from '@ladle/react';
import { BreadCrumbs } from './BreadCrumbs';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';
import { LayoutMasonryIcon } from '../Icons';

export default {
  title: 'Components / BreadCrumbs',
} satisfies StoryDefault;

export const BreadCrumbsMain: Story = () => (
  <>
    <GlobalStyles />

    <h1>Bread crumbs</h1>
    <BreadCrumbs
      level={{
        href: '#',
        label: () => <LayoutMasonryIcon height={20} width={20} />,
        nextLevel: {
          href: '#',
          label: 'Something here',
          nextLevel: {
            href: '#',
            label: 'Sure',
          },
        },
      }}
    />
  </>
);
