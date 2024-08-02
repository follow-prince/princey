import { Meta, StoryObj } from "@storybook/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconButton } from ".";

// Define metadata for the component
const meta: Meta<typeof IconButton> = {
  title: "Components/Buttons/IconButton",
  component: IconButton,
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
    icon: {
      control: { type: "text" },
      description: "Icon content for the button",
    },
    buttonWidth: {
      control: { type: "text" },
      description: "Width of the button",
    },
    buttonHeight: {
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
    iconBackgroundColor: {
      control: { type: "color" },
      description: "Background color of the icon",
    },
    hoverBackgroundColor: {
      control: { type: "color" },
      description: "Background color of the button on hover",
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
    text: "Add",
    icon: <AiOutlineShoppingCart />,
    backgroundColor: "#FFD700",
    borderColor: "#FFD700",
    iconBackgroundColor: "#FFD700",
    hoverBackgroundColor: "#FFD700",
    activeBackgroundColor: "#FFD700",
  },
};
export const Secondary: Story = {
  args: {
    className: "",
    text: "Add",
    icon: <AiOutlineShoppingCart />,
    backgroundColor: "#FFD700",
    borderColor: "#FFD700",
    iconBackgroundColor: "#FFD700",
    hoverBackgroundColor: "#FFD700",
    activeBackgroundColor: "#FFD700",
  },
};
export const Red: Story = {
  args: {
    className: "",
    text: "Add",
    icon: <AiOutlineShoppingCart />,
    backgroundColor: "#FF0000",
    borderColor: "#FF0000",
    iconBackgroundColor: "#FF0000",
    hoverBackgroundColor: "#FF0000",
    activeBackgroundColor: "#FF0000",
  },
};
