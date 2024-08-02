import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ButtonWithLinks } from ".";

// Define metadata for the component
const meta: Meta<typeof ButtonWithLinks> = {
  title: "Components/Buttons/ButtonWithLinks",
  component: ButtonWithLinks,
  parameters: {
    layout: "centered", // Centers the component in the Storybook canvas
  },
  argTypes: {
    text: {
      control: { type: "text" },
      description: "Text content for the button",
    },
    links: {
      control: { type: "object" },
      description: "Array of objects containing href and icon",
    },
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
      description: "The color variant of the button",
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
    text: "Click me",
    variant: "primary",

    links: [
      { href: "https://example.com", icon: "🔗" },
      { href: "https://example.com", icon: "📄" },
      { href: "https://example.com", icon: "📄" },
      { href: "https://example.com", icon: "📄" },
    ],
    onClick: fn(),
  },
};
export const Secondary: Story = {
  args: {
    text: "Click me",
    variant: "secondary",
    links: [
      { href: "https://example.com", icon: "🔗" },
      { href: "https://example.com", icon: "📄" },
    ],
    onClick: fn(),
  },
};
