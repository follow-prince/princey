import { Meta, StoryObj } from "@storybook/react";
import { IconButton } from ".";
// import save icon react
import { FaSave } from "react-icons/fa";

// Define metadata for the component
const meta: Meta<typeof IconButton> = {
  title: "Components/Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: { control: "text" },
    onClick: { action: "clicked" },
    label: { control: "text" },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
    color: {
      control: {
        type: "select",
        options: ["lime", "red", "blue"],
      },
    },
    icon: { control: "text" },
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
    color: "lime",
    icon: <FaSave />,
  },
};

export const Primary: Story = {
  args: {
    label: "Go Back",
    onClick: () => console.log("Clicked"),
    color: "red",
    icon: <FaSave />,
  },
};

export const Secondary: Story = {
  args: {
    label: "Go Back",
    onClick: () => console.log("Clicked"),
    color: "blue",
    icon: <FaSave />,
  },
};
