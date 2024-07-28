// src/Button.stories.js
import React from 'react';
import Button from './Button';
//👇 This default export determines where your story goes in the story list
export default {
  title: 'Button/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

// The args are passed to the Button component as props
export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  bgColor: 'blue',
  color: 'white',
};
// The args are passed to the Button component as props
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  bgColor: 'gray',
  color: 'white',
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  label: 'Custom Class Button',
  className: 'my-custom-class',
};

export const WithClickHandler = Template.bind({});
WithClickHandler.args = {
  label: 'Click Me',
  onClick: () => alert('Button clicked!'),
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  label: 'Custom Styled Button',
  style: { border: '2px solid red', padding: '15px 30px' },
};
