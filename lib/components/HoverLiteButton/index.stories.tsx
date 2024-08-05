import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { HoverLiteButton } from ".";

// Define metadata for the component
const meta: Meta<typeof HoverLiteButton> = {
  title: "Components/Buttons/HoverLiteButton",
  component: HoverLiteButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: { action: "clicked" },
    label: { control: "text" },
    size: { control: "radio", options: ["small", "medium", "large"] },
    color: {
      control: {
        type: "select",
        options: ["blue", "red"],
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
    label: "Button",
    onClick: fn(),
  },
};
export const Blue: Story = {
  args: {
    label: "Blue",
    color: "blue",
  },
};
export const Red: Story = {
  args: {
    label: "Red",
    color: "red",
  },
};
export const Small: Story = {
  args: {
    label: "Small",
    size: "small",
  },
};
export const Medium: Story = {
  args: {
    label: "Medium",
    size: "medium",
  },
};
export const Large: Story = {
  args: {
    label: "Large",
    size: "large",
  },
};
