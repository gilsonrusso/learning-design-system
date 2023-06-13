import { StoryObj, Meta } from '@storybook/react'

import { Button, ButtonProps } from "@gsr-ui/react"

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: 'Enviar',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  
};
