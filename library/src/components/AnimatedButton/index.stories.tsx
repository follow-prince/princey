import { Meta, StoryObj } from "@storybook/react";
import { FaSquareGithub, FaSquareTwitter } from "react-icons/fa6";
import { AnimatedButton } from ".";

import { FaInstagramSquare } from "react-icons/fa";

// Define metadata for the component
const meta: Meta<typeof AnimatedButton> = {
  title: "Components/Buttons/AnimatedButton",
  component: AnimatedButton,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary", "Red"],
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
    icon: {
      control: {
        type: "object",
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    link: {
      control: {
        type: "text",
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
    color: "primary",
    label: "Your Name",
    icon: <FaSquareGithub />,
    link: "https://github.com",
  },
};

export const Instagram: Story = {
  args: {
    color: "Red",
    label: "Instagram",
    icon: <FaInstagramSquare />,
    link: "https://instagram.com",
  },
};

export const Twitter: Story = {
  args: {
    color: "secondary",
    label: "Twitter",
    icon: <FaSquareTwitter />,
    link: "https://twitter.com",
  },
};
