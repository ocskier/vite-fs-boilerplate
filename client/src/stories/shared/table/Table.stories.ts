import type { Meta, StoryObj } from '@storybook/react';
import {
  within,
  // userEvent, expect
} from '@storybook/test';

import Table from './Table';

const meta = {
  title: 'CustomTable',
  component: Table,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithHeader: Story = {
  args: {
    header: true
  },
  play: async ({ canvasElement }: {canvasElement: any}) => {
    const canvas = within(canvasElement);
    // Placeholders for interaction testing
    await Promise.resolve(canvas);
  },
};

export const WithoutHeader: Story = {
  args: {
    header: false
  },
  play: async ({ canvasElement }: {canvasElement: any}) => {
    const canvas = within(canvasElement);
    // Placeholders for interaction testing
    await Promise.resolve(canvas);
  },
};
