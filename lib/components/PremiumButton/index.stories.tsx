import { Meta, StoryObj } from "@storybook/react";
import { PremiumButton } from ".";

// Define metadata for the component
const meta: Meta<typeof PremiumButton> = {
  title: "Components/Buttons/PremiumButton",
  component: PremiumButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["red", "green", "blue", "yellow", "purple"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["xsmall", "small", "medium", "large", "xlarge"],
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

export const Red: Story = {
  args: {
    label: "Danger",
    color: "red",
  },
};

export const Green: Story = {
  args: {
    label: "Success",
    color: "green",
  },
};

export const Blue: Story = {
  args: {
    label: "Info",
    color: "blue",
  },
};

export const Yellow: Story = {
  args: {
    label: "Warning",
    color: "yellow",
  },
};
