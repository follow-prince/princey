import React from "react";
import DownloadButton from "./DownloadButton";

export default {
  title: "Button/DownloadButton",
  component: DownloadButton,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    borderColor: { control: "color" },
    downloadBackgroundColor: { control: "color" },
    downloadBorderColor: { control: "color" },
    fontSize: { control: "text" },
    fontWeight: { control: "text" },
    borderRadius: { control: "text" },
    padding: { control: "text" },
    minHeight: { control: "text" },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <DownloadButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Documents",
};

export const CustomStyled = Template.bind({});
CustomStyled.args = {
  label: "Download",
  backgroundColor: "#007bff",
  textColor: "#fff",
  borderColor: "#0056b3",
  downloadBackgroundColor: "#28a745",
  downloadBorderColor: "#1e7e34",
  fontSize: "16px",
  fontWeight: "700",
  borderRadius: "3px",
  padding: "10px",
  minHeight: "50px",
};
