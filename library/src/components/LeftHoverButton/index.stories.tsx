import { Meta, StoryObj } from "@storybook/react";
import { LeftHoverButton } from ".";

// Define metadata for the component
const meta: Meta<typeof LeftHoverButton> = {
  title: "Components/Buttons/LeftHoverButton",
  component: LeftHoverButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: { action: "clicked" },
    label: { control: "text" },
    size: {
      control: "radio",
      options: ["xsmall", "small", "medium", "large", "xlarge"],
    },
    color: {
      control: {
        type: "select",
        options: [
          "default",
          "primary",
          "secondary",
          "tertiary",
          "danger",
          "green",
        ],
        iconBg: {
          control: {
            type: "select",
            options: [
              "default",
              "primary",
              "secondary",
              "tertiary",
              "danger",
              "green",
            ],
          },
        },
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
    label: "Go Back",
    onClick: () => console.log("Clicked"),
  },
};

export const Primary: Story = {
  args: {
    label: "Primary",
    color: "primary",
    size: "medium",
    onClick: () => console.log("Clicked"),
    iconBg: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    color: "secondary",
    size: "medium",
    onClick: () => console.log("Clicked"),
    iconBg: "secondary",
  },
};

export const Danger: Story = {
  args: {
    label: "Danger",
    color: "danger",
    size: "medium",
    onClick: () => console.log("Clicked"),
    iconBg: "danger",
  },
};
