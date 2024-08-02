import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: ["solid", "outline", "ghost", "animationButton"],
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    colorscheme: {
      options: ["primary"],
      control: { type: "radio" },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    children: "Button",
    onClick: fn(),
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
    onClick: fn(),
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
    className: "",
    onClick: fn(),
  },
};
