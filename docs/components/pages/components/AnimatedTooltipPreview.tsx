"use client";
import dharmaProfile from "../../../public/dharma.svg";
import Dora from "../../../public/dora.svg";
import PrinceProfile from "../../../public/prince.svg";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "ELAVARASAN",
    designation: "Lead Developer@Princey UI",
    image: PrinceProfile,
    linkedin: true,
    link: "https://linkedin.com/in/elavarasa003/",
  },
  {
    id: 2,
    name: "Dharma",
    designation: "Developer/Content Writer",
    image: dharmaProfile,
    linkedin: true,
    link: "https://www.linkedin.com/in/dharma-r/",
  },
  {
    id: 3,
    name: "Dora",
    designation: "R&D",
    image: Dora,
    linkedin: false,
    link: "",
  },
];

export function AnimatedTooltipPreview() {
  return <AnimatedTooltip items={people} />;
}
