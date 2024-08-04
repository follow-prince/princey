import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FaGithub } from "react-icons/fa";
import { CircularButton } from ".";

// Define metadata for the component
const meta: Meta<typeof CircularButton> = {
  title: "Components/Buttons/CircularButton",
  component: CircularButton,
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
    color: "red",
    size: "medium",
    icon: <FaGithub />,
  },
};
