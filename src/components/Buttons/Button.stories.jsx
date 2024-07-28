// src/Button.stories.js

import React from "react";
import Button from "./Button";
import { FaBeer, FaCoffee, FaApple, FaAndroid } from "react-icons/fa";

export default {
  title: "Button/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    icon: {
      control: { type: "select", options: [null, <FaBeer />, <FaCoffee />, <FaApple />, <FaAndroid />] },
    },
    type: {
      control: {
        type: "select",
        options: ["primary", "secondary", "tertiary", "danger"],
      },
    },
    width: { control: "text" },
    height: { control: "text" },
    fontSize: { control: "text" },
    fontFamily: { control: "text" },
    letterSpacing: { control: "text" },
    textTransform: { control: "text" },
    fontWeight: { control: "text" },
    borderRadius: { control: "text" },
    color: { control: "color" },
    textShadow: { control: "text" },
    transition: { control: "text" },
    padding: { control: "text" },
    style: { control: "object" },
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Click Me",
  icon: <FaBeer />,
  type: "primary",
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  label: "Click Me",
  icon: null,
  type: "secondary",
};

export const WithDifferentIcon = Template.bind({});
WithDifferentIcon.args = {
  label: "Click Me",
  icon: <FaCoffee />,
  type: "tertiary",
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  label: "Delete",
  icon: <FaBeer />,
  type: "danger",
};

export const CustomIconApple = Template.bind({});
CustomIconApple.args = {
  label: "Apple",
  icon: <FaApple />,
  type: "primary",
};

export const CustomIconAndroid = Template.bind({});
CustomIconAndroid.args = {
  label: "Android",
  icon: <FaAndroid />,
  type: "primary",
};

export const CustomSizeButton = Template.bind({});
CustomSizeButton.args = {
  label: "Custom Size",
  icon: <FaBeer />,
  type: "primary",
  width: "150px",
  height: "50px",
  fontSize: "16px",
};

export const FullCustomButton = Template.bind({});
FullCustomButton.args = {
  label: "Full Custom",
  icon: <FaBeer />,
  type: "primary",
  width: "200px",
  height: "60px",
  fontSize: "18px",
  fontFamily: "Arial, sans-serif",
  letterSpacing: "2px",
  textTransform: "capitalize",
  fontWeight: "bold",
  borderRadius: "8px",
  color: "#000",
  textShadow: "1px 1px 2px rgba(255, 255, 255, 0.3)",
  transition: "200ms all ease-in-out",
  padding: "10px 20px",
  style: { backgroundColor: '#123456', border: '2px dashed #789abc' },
};
