import { Meta, StoryObj } from "@storybook/react";
import { GetTouchButton } from ".";

// Define metadata for the component
const meta: Meta<typeof GetTouchButton> = {
  title: "Components/Buttons/GetTouchButton",
  component: GetTouchButton,
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
    borderColor: {
      control: { type: "color" },
      description: "Border color of the button",
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
    text: "Get in touch",
    backgroundColor: "#FFD700",
    borderColor: "#FFD700",
  },
};

export const Secondary: Story = {
  args: {
    className: "",
    text: "Get in touch",
    backgroundColor: "#FFD700",
    borderColor: "#FFD700",
  },
};

export const Red: Story = {
  args: {
    className: "",
    text: "Get in touch",
    backgroundColor: "#FF0000",
    borderColor: "#FF0000",
  },
};
export const Blue: Story = {
  args: {
    className: "",
    text: "Get in touch",
    backgroundColor: "#0000FF",
    borderColor: "#0000FF",
  },
};
export const Green: Story = {
  args: {
    className: "",
    text: "Get in touch",
    backgroundColor: "#00FF00",
    borderColor: "#00FF00",
  },
};
export const Purple: Story = {
  args: {
    className: "",
    text: "Get in touch",
    backgroundColor: "#800080",
    borderColor: "#800080",
  },
};
export const Yellow: Story = {
  args: {
    className: "",
    text: "Get in touch",
    backgroundColor: "#FFFF00",
    borderColor: "#FFFF00",
  },
};
