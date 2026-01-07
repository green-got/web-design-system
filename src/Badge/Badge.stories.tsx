import type { StoryDefault, Story } from '@ladle/react';
import { Badge } from './Badge';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default {
  title: 'Components / Badge',
} satisfies StoryDefault;

export const BadgeMain: Story = () => (
  <>
    <GlobalStyles />

    <h1>Badge</h1>
    <br />
    <Badge variant="positive">$500.00</Badge>
    <br />
    <br />
    <Badge size="sm" variant="positive">
      $500.00
    </Badge>
    <br />
    <br />
    <Badge size="sm" variant="negative">
      $500.00
    </Badge>
    <br />
    <br />
    <Badge variant="negative">$500.00</Badge>
    <br />
    <br />
    <div
      style={{
        background: `repeating-linear-gradient(
    45deg,
    var(--colors-primary-700) 0px,
    var(--colors-primary-700) 10px,
    var(--colors-primary-600) 10px,
    var(--colors-primary-600) 20px
  )`,
        padding: 'var(--spacing-sm)',
      }}
    >
      <Badge variant="neutral">$500.00</Badge>
      <br />
      <br />
      <Badge size="sm" variant="neutral">
        $500.00
      </Badge>
    </div>
  </>
);
