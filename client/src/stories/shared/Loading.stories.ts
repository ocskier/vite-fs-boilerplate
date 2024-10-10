import type { Meta, StoryObj } from '@storybook/react';

import Loading from '@shared/loading';

const meta = {
  title: 'Loading',
  component: Loading,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CenteredLoading: Story = {
  args: {
    msg: 'Sample Loading Message',
  },
};
