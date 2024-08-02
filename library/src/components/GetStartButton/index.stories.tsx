import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { GetStartButton } from ".";

// Define metadata for the component
const meta: Meta<typeof GetStartButton> = {
  title: "Components/Buttons/GetStartButton",
  component: GetStartButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: { type: "text" },
      description: "Additional class names for the button",
    },
    text: {
      control: { type: "text" },
      description: "Text content for the button",
    },
    backgroundColor: {
      control: { type: "color" },
      description: "Background color of the button",
    },
    fontSize: {
      control: { type: "text" },
      description: "Font size of the button",
    },
    iconSize: {
      control: { type: "text" },
      description: "Icon size of the button",
    },
    iconColor: {
      control: { type: "color" },
      description: "Icon color of the button",
    },
    onClick: {
      action: "clicked",
      description: "Function to call when the button is clicked",
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
    className: "",
    text: "Get Started",
    backgroundColor: "#FFD700",
    fontSize: "19px",
    iconSize: "40px",
    iconColor: "#FFD700",
    onClick: fn(),
  },
};

export const Secondary: Story = {
  args: {
    className: "",
    text: "Get Started",
    backgroundColor: "#FFD700",
    fontSize: "19px",
    iconSize: "40px",
    iconColor: "#FFD700",
    onClick: fn(),
  },
};

export const Red: Story = {
  args: {
    className: "",
    text: "Get Started",
    backgroundColor: "#FF0000",
    fontSize: "19px",
    iconSize: "40px",
    iconColor: "#FF0000",
    onClick: fn(),
  },
};
export const Blue: Story = {
  args: {
    className: "",
    text: "Get Started",
    backgroundColor: "#0000FF",
    fontSize: "19px",
    iconSize: "40px",
    iconColor: "#0000FF",
    onClick: fn(),
  },
};

export const Green: Story = {
  args: {
    className: "",
    text: "Get Started",
    backgroundColor: "#00FF00",
    fontSize: "19px",
    iconSize: "40px",
    iconColor: "#00FF00",
    onClick: fn(),
  },
};
