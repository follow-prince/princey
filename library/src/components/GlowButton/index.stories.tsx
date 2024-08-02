import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { GlowButton } from ".";

// Define metadata for the component
const meta: Meta<typeof GlowButton> = {
  title: "Components/Buttons/GlowButton",
  component: GlowButton,
  parameters: {
    layout: "centered", // Centers the component in the Storybook canvas
  },
  argTypes: {
    text: {
      control: { type: "text" },
      description: "Text content for the button",
    },
    onClick: {
      action: "clicked",
      description: "Function to call when the button is clicked",
    },
    backgroundColor: {
      control: { type: "color" },
      description: "Background color of the button",
    },
    borderColor: {
      control: { type: "color" },
      description: "Border color of the button",
    },
    hoverBackgroundColor: {
      control: { type: "color" },
      description: "Background color of the button on hover",
    },
    hoverBorderColor: {
      control: { type: "color" },
      description: "Border color of the button on hover",
    },
    hoverTextColor: {
      control: { type: "color" },
      description: "Text color of the button on hover",
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
    onClick: fn(),
    backgroundColor: "#FFD700",
    borderColor: "#FFD700",
    hoverBackgroundColor: "#FFD700",
    hoverBorderColor: "#FFD700",
    hoverTextColor: "#000000",
  },
};

// Secondary button story
export const Secondary: Story = {
  args: {
    text: "Click me",
    onClick: fn(),
    backgroundColor: "#000000",
    borderColor: "#000000",
    hoverBackgroundColor: "#000000",
    hoverBorderColor: "#000000",
    hoverTextColor: "#FFD700",
  },
};

export const RedGlow: Story = {
  args: {
    text: "Click me",
    onClick: fn(),
    backgroundColor: "#FF0000",
    borderColor: "#FF0000",
    hoverBackgroundColor: "#FF0000",
    hoverBorderColor: "#FF0000",
    hoverTextColor: "#000000",
  },
};
export const GreenGlow: Story = {
  args: {
    text: "Click me",
    onClick: fn(),
    backgroundColor: "#00FF00",
    borderColor: "#00FF00",
    hoverBackgroundColor: "#00FF00",
    hoverBorderColor: "#00FF00",
    hoverTextColor: "#000000",
  },
};
