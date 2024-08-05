import { Meta, StoryObj } from "@storybook/react";
import { MagicButton } from ".";

// Define metadata for the component
const meta: Meta<typeof MagicButton> = {
  title: "Components/Buttons/MagicButton",
  component: MagicButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
  },
  tags: ["autodocs"], // Automatically generate documentation
};

export default meta;

// Define the type for the stories
type Story = StoryObj<typeof meta>;

// Default button story
export const Default: Story = {
  args: {
    label: "Magic Button",
  },
};
