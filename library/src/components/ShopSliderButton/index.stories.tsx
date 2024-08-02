import { Meta, StoryObj } from "@storybook/react";
import { ShopSliderButton } from ".";

// Define metadata for the component
const meta: Meta<typeof ShopSliderButton> = {
  title: "Components/Buttons/ShopSliderButton",
  component: ShopSliderButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: { type: "text" },
      description: "Additional class names for the button",
    },
    backgroundColor: {
      control: { type: "color" },
      description: "Background color of the button",
    },
    padding: {
      control: { type: "text" },
      description: "Padding of the button",
    },
    borderColor: {
      control: { type: "color" },
      description: "Border color of the button",
    },
    fontSize: {
      control: { type: "text" },
      description: "Font size of the button",
    },
    textColor: {
      control: { type: "color" },
      description: "Text color of the button",
    },
    hoverBackgroundColor: {
      control: { type: "color" },
      description: "Background color of the button on hover",
    },
    hoverTextColor: {
      control: { type: "color" },
      description: "Text color of the button on hover",
    },
    boxShadow: {
      control: { type: "text" },
      description: "Box shadow of the button",
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
    text: "Click me",
    backgroundColor: "#ecd448",
    padding: "1.1em 2em",
    borderColor: "#fff",
    fontSize: "15px",
    textColor: "#131313",
    hoverBackgroundColor: "#4cc9f0",
    hoverTextColor: "#fff",
    boxShadow: "0 2px 0 2px #000",
  },
};
