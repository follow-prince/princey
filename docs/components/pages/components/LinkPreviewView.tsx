"use client";
import { LinkPreview } from "../ui/link-preview";

export function LinkPreviewDemo() {
  return (
    <div className="flex flex-col items-center justify-center px-4 ">
      <p className="mx-auto mb-10 text-sm text-neutral-500 dark:text-neutral-400 md:text-2xl">
        <LinkPreview url="https://tailwindcss.com" className="font-bold">
          Tailwind CSS
        </LinkPreview>
        {", "}
        <LinkPreview url="https://nextjs.org" className="font-bold">
          Next.js
        </LinkPreview>
        {", "}
        <LinkPreview url="https://ui.shadcn.com" className="font-bold">
          Shadcn UI
        </LinkPreview>
        {", "}
        <LinkPreview url="https://www.radix-ui.com" className="font-bold">
          Radix-UI
        </LinkPreview>
        {", "}
        and{" "}
        <LinkPreview url="https://www.framer.com/motion" className="font-bold">
          Framer Motion
        </LinkPreview>{" "}
        are excellent tools for building modern websites. Created by the
        <LinkPreview
          url="https://princey.tech"
          className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500"
        >
          {" "}
          Princey UI
        </LinkPreview>
        {", "}
        our collection features amazing Tailwind and Framer Motion components.
      </p>
    </div>
  );
}
