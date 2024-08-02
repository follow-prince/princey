import {
  FeelbackPulse,
  FeelbackTaggedMessage,
  PRESET_FEEDBACK,
  PRESET_PULSE_STAR,
} from "@feelback/react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { LogoHeader } from "./components/utils/LogoHeader";
// include the default style
import "@feelback/react/styles/feelback.css";

const config: DocsThemeConfig = {
  feedback: {
    content: null,
    useLink: () => "https://elavarasan.me",
  },
  editLink: {
    text: null,
  },
  navbar: {
    extraContent: () => (
      <FeelbackPulse
        contentSetId="f0b1b39a-2243-4c37-bd3e-a46ae1dfe5a9"
        preset={PRESET_PULSE_STAR}
        showCount
      />
    ),
  },

  project: {
    link: "https://github.com/follow-prince/princey",
  },

  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: (
      <span style={{ textAlign: "center" }}>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://elavarasan.me" target="_blank">
          Developed by Prince
        </a>
      </span>
    ),
  },
  logo: <LogoHeader />,

  toc: {
    extraContent: () => (
      <FeelbackTaggedMessage
        contentSetId="73764dc5-2399-4d1c-94d5-bb716a6404d3"
        layout="button-dialog"
        preset={PRESET_FEEDBACK}
      />
    ),
  },
  primaryHue: {
    dark: 140,
    light: 300,
  },
  gitTimestamp: ({ timestamp }) => {
    return <div>{timestamp.toString()}</div>;
  },
  banner: {
    key: "2.0-release",
    text: (
      <a href="https://princey.tech" target="_blank">
        🎉 Princey UI is released. Read more →
      </a>
    ),
  },
  sidebar: {
    toggleButton: true,
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Princey UI",
    };
  },
};

export default config;
