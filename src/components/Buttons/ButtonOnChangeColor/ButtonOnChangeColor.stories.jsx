import React from "react";
import ButtonOnChangeColor from "./ButtonOnChangeColor";

export default {
  title: "Button/ButtonOnChangeColor",
  component: ButtonOnChangeColor,
  argTypes: {
    borderRadius: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    children: { control: "text" },
    onClick: { action: "clicked" },

  },
};

const Template = (args) => <ButtonOnChangeColor {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Click Me",
};

export const RoundedButton = Template.bind({});
RoundedButton.args = {
  borderRadius: "20px",
  children: "Rounded Button",
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  width: "200px",
  height: "60px",
  children: "Large Button",
};

export const CustomButton = Template.bind({});
CustomButton.args = {
  borderRadius: "50px",
  width: "250px",
  height: "70px",
  children: "Custom Button",
};
