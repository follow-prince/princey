import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { HoverButton } from ".";

// Define metadata for the component
const meta: Meta<typeof HoverButton> = {
  title: "Components/Buttons/HoverButton",
  component: HoverButton,
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
    color: "primary",
  },
};

export const Red: Story = {
  args: {
    label: "Red",
    color: "danger",
  },
};

export const Small: Story = {
  args: {
    label: "Small",
    size: "small",
  },
};
