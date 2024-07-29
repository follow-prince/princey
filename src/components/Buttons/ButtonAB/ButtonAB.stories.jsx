import React from "react";
import ButtonAB from "./ButtonAB"; // Adjust the import path as necessary
import { FaBeer, FaCoffee, FaApple, FaAndroid } from "react-icons/fa";

export default {
  title: "Button/ButtonAB",
  component: ButtonAB,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["primary", "secondary", "danger"],
      },
    },
    width: { control: "text" },
    height: { control: "text" },
    fontSize: { control: "text" },
    fontFamily: { control: "text" },
    fontWeight: { control: "text" },
    borderRadius: { control: "text" },
    color: { control: "color" },
    TextBefore: { control: "text" },
    BeforeIcon: {
      control: {
        type: "select",
        options: [null, <FaBeer />, <FaCoffee />, <FaApple />, <FaAndroid />],
      },
    },
    TextAfter: { control: "text" },
    AfterIcon: {
      control: {
        type: "select",
        options: [null, <FaBeer />, <FaCoffee />, <FaApple />, <FaAndroid />],
      },
    },
    style: { control: "object" },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <ButtonAB {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "primary",
  TextBefore: "Click Me",
  BeforeIcon: <FaBeer />,
  TextAfter: "Clicked",
  AfterIcon: <FaBeer />,
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  type: "secondary",
  TextBefore: "Hover Me",
  BeforeIcon: <FaCoffee />,
  TextAfter: "Hovered",
  AfterIcon: <FaCoffee />,
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  type: "danger",
  TextBefore: "Danger",
  BeforeIcon: <FaApple />,
  TextAfter: "Clicked",
  AfterIcon: <FaApple />,
};

export const CustomSizeButton = Template.bind({});
CustomSizeButton.args = {
  type: "primary",
  TextBefore: "Custom Size",
  BeforeIcon: <FaBeer />,
  TextAfter: "Clicked",
  AfterIcon: <FaBeer />,
  width: "200px",
  height: "40px",
};

export const FullyCustomizedButton = Template.bind({});
FullyCustomizedButton.args = {
  type: "primary",
  TextBefore: "Full Custom",
  BeforeIcon: <FaBeer />,
  TextAfter: "Clicked",
  AfterIcon: <FaBeer />,
  width: "200px",
  height: "40px",
  fontSize: "18px",
  fontFamily: "Arial, sans-serif",
  fontWeight: "bold",
  borderRadius: "8px",
  color: "#000",
  style: { backgroundColor: "#123456", border: "2px dashed #789abc" },
};
