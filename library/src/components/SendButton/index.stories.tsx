import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { SendButton } from ".";

// Define metadata for the component
const meta: Meta<typeof SendButton> = {
  title: "Components/Buttons/SendButton",
  component: SendButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    labelAfter: {
      control: {
        type: "text",
      },
    },
    primaryColor: {
      control: {
        type: "color",
      },
    },
    neutralColor: {
      control: {
        type: "color",
      },
    },
    height: {
      control: {
        type: "text",
      },
    },
    onClick: {
      action: "clicked",
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
    label: "Send",
    labelAfter: "Sent",
    primaryColor: "#FFD700",
    neutralColor: "#000000",
    height: "3.5em",
    onClick: fn(),
  },
};

// Button story with custom label
export const CustomLabel: Story = {
  args: {
    label: "Submit",
    labelAfter: "Submitted",
  },
};
export const CustomColors: Story = {
  args: {
    primaryColor: "#FF0000",
    neutralColor: "#00FF00",
  },
};
