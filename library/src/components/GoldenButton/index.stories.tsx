import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { GoldenButton } from ".";

// Define metadata for the component
const meta: Meta<typeof GoldenButton> = {
  title: "Components/Buttons/GoldenButton",
  component: GoldenButton,
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
    height: {
      control: { type: "text" },
      description: "Height of the button",
    },
    backgroundColor: {
      control: { type: "color" },
      description: "Background color of the button",
    },
    borderColor: {
      control: { type: "color" },
      description: "Border color of the button",
    },
    textColor: {
      control: { type: "color" },
      description: "Text color of the button",
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
    activeBackgroundColor: {
      control: { type: "color" },
      description: "Background color of the button on active",
    },
    activeBorderColor: {
      control: { type: "color" },
      description: "Border color of the button on active",
    },
    activeTextColor: {
      control: { type: "color" },
      description: "Text color of the button on active",
    },
    fontSize: {
      control: { type: "text" },
      description: "Font size of the button",
    },
    padding: {
      control: { type: "text" },
      description: "Padding of the button",
    },

    className: {
      control: { type: "text" },
      description: "Additional class names for the button",
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
    text: "The Golden Button",
    className: "",
    backgroundColor: "#a54e07",
    borderColor: "#a55d07",
    textColor: "rgb(120, 50, 5)",
    hoverBackgroundColor: "#b47e11",
    hoverBorderColor: "rgba(165, 93, 7, 0.6)",
    hoverTextColor: "rgba(120, 50, 5, 0.8)",
    activeBackgroundColor: "#a54e07",
    activeBorderColor: "#b17d10",
    activeTextColor: "rgba(120, 50, 5, 0.8)",
    fontSize: "1em",
    height: "2.75em",
    padding: "0 1em",
    onClick: fn(),
  },
};
