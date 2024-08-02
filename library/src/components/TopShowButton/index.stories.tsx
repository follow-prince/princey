import { Meta, StoryObj } from "@storybook/react";
import { TopShowButton } from ".";

// Define metadata for the component
const meta: Meta<typeof TopShowButton> = {
  title: "Components/Buttons/TopShowButton",
  component: TopShowButton,
  parameters: {
    layout: "centered", // Centers the component in the Storybook canvas
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
    borderColor: {
      control: { type: "color" },
      description: "Border color of the button",
    },
    hoverColor: {
      control: { type: "color" },
      description: "Hover color of the button",
    },
    hoverTextColor: {
      control: { type: "color" },
      description: "Text color when hovering the button",
    },
    beforeHoverText: {
      control: { type: "text" },
      description: "Text before hovering the button",
    },
    afterHoverText: {
      control: { type: "text" },
      description: "Text after hovering the button",
    },
    activeScale: {
      control: { type: "number" },
      description: "Scale of the button when active",
    },
    buttonWidth: {
      control: { type: "text" },
      description: "Width of the button",
    },
    buttonHeight: {
      control: { type: "text" },
      description: "Height of the button",
    },
    beforeTextColor: {
      control: { type: "color" },
      description: "Text color before hovering the button",
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
    backgroundColor: "#f5ae51",
    borderColor: "#f39923",
    hoverColor: "#f19c2b",
    hoverTextColor: "#ffffff",
    beforeHoverText: "Hover",
    afterHoverText: "Click",
    activeScale: 0.95,
    buttonWidth: "135px",
    buttonHeight: "47px",
    beforeTextColor: "#ffffff",
  },
};
