"use client";
import Link from "next/link";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export function HoverBorderGradientDemo() {
  return (
    <Link href="/components">
      <HoverBorderGradient
        containerClassName="rounded-md"
        as="button"
        className="flex items-center font-black text-black bg-white dark:bg-black dark:text-white"
      >
        <span>Get Started</span>
      </HoverBorderGradient>
    </Link>
  );
}
