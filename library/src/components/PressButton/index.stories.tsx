import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { PressButton } from ".";

// Define metadata for the component
const meta: Meta<typeof PressButton> = {
  title: "Components/PressButton",
  component: PressButton,
  parameters: {
    layout: "centered", // Centers the component in the Storybook canvas
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["red", "green", "yellow", "pink", "purple", "blue", "gray"],
      },
      description:
        "The color variant of the button (red, green, yellow, pink, purple, blue, gray)",
    },
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
    variant: "gray",
    onClick: fn(),
  },
};
export const Red: Story = {
  args: {
    text: "Click me",
    variant: "red",
    size: "md",
    onClick: fn(),
  },
};
export const Green: Story = {
  args: {
    text: "Click me",
    variant: "green",
    size: "md",
    onClick: fn(),
  },
};
export const Yellow: Story = {
  args: {
    text: "Click me",
    variant: "yellow",
    size: "md",
    onClick: fn(),
  },
};
export const Pink: Story = {
  args: {
    text: "Click me",
    variant: "pink",
    size: "md",
    onClick: fn(),
  },
};
export const Purple: Story = {
  args: {
    text: "Click me",
    variant: "purple",
    size: "md",
    onClick: fn(),
  },
};
export const Blue: Story = {
  args: {
    text: "Click me",
    variant: "blue",
    size: "md",
    onClick: fn(),
  },
};
