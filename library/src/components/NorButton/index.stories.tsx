import { Meta, StoryObj } from "@storybook/react";
import { NorButton } from ".";

// Define metadata for the component
const meta: Meta<typeof NorButton> = {
  title: "Components/Buttons/NorButton",
  component: NorButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    hoverBorder: {
      control: {
        type: "select",
        options: ["default", "red", "green", "blue", "rose", "custom"],
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
    bg: {
      control: {
        type: "select",
        options: ["default", "red", "green", "blue", "rose", "custom"],
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
    hoverBorder: "default",
    label: "Go Back",
    onClick: () => console.log("Clicked"),
  },
};

// Red button story
export const Red: Story = {
  args: {
    hoverBorder: "red",
    label: "Delete",
    onClick: () => console.log("Clicked"),
    bg: "red",
  },
};

// Green button story

export const Green: Story = {
  args: {
    hoverBorder: "green",
    label: "Save",
    onClick: () => console.log("Clicked"),
    bg: "green",
  },
};

// Blue button story

export const Blue: Story = {
  args: {
    hoverBorder: "blue",
    label: "Submit",
    onClick: () => console.log("Clicked"),
    bg: "blue",
  },
};
