import { Meta, StoryObj } from "@storybook/react";
import { BsInstagram } from "react-icons/bs";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { TooltipButton } from ".";

// Define metadata for the component
const meta: Meta<typeof TooltipButton> = {
  title: "Components/Buttons/TooltipButton",
  component: TooltipButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    tooltipText: {
      control: {
        type: "text",
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    icon: {
      control: {
        type: "object",
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
    tooltipText: "Github",
    icon: <FiGithub />,
    size: "medium",
  },
};

export const Instagram: Story = {
  args: {
    tooltipText: "Instagram",
    icon: <BsInstagram />,
    size: "large",
  },
};

export const Twitter: Story = {
  args: {
    tooltipText: "Twitter",
    icon: <FiTwitter />,
    size: "small",
  },
};
