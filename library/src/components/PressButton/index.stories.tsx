import { Meta, StoryObj } from "@storybook/react";
import { PressButton } from ".";

// Define metadata for the component
const meta: Meta<typeof PressButton> = {
  title: "Components/PressButton",
  component: PressButton,
  parameters: {
    layout: "centered", // Centers the component in the Storybook canvas
  },
  argTypes: {
    size: {
      control: { type: "select", options: ["sm", "md", "lg", "xl", "xxl"] },
      description: "The size of the button",
    },

    className: {
      control: { type: "text" },
      description: "Additional class names for the button",
    },
    text: {
      control: { type: "text" },
      description: "Text content for the button",
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
    text: "Click me",
    size: "md",
  },
};
