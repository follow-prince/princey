import { Meta, StoryObj } from "@storybook/react";
import { BlinkButton } from ".";

// Define metadata for the component
const meta: Meta<typeof BlinkButton> = {
  title: "Components/Buttons/BlinkButton",
  component: BlinkButton,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["green", "red", "blue"],
      },
    },
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
    color: "green",
    label: "Your Name",
  },
};
