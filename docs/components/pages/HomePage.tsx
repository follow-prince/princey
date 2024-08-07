import { BookOpenCheck, GithubIcon } from "lucide-react";
import Link from "next/link";
import MailPage from "../themes/mail/page";
import { AnimatedTooltipPreview } from "./components/AnimatedTooltipPreview";
import { FlipWordsComponent } from "./components/FlipWords";
import { HeroParallaxDemo } from "./components/HeroParallax";
import { HeroScrollDemo } from "./components/HeroScrollView";
import { LinkPreviewDemo } from "./components/LinkPreviewView";
import { MacbookScrollView } from "./components/MacbookScrollView";
import { Button } from "./ui/buttonVariants";

const HomePage = () => {
  return (
    <>
      <div className="w-full mt-3 md:pt-10">
        <div className="z-10 flex flex-col justify-between w-full pb-5 md:flex-row md:px-52 md:p-10 md:pt-0">
          <div className="flex gap-5 md:flex-col">
            <div className="text-3xl font-bold text-transparent text-neutral-900 dark:text-neutral-100 md:text-6xl bg-clip-text bg-gradient-to-br from-rose-600 to-pink-500">
              Welcome to Princey UI
              <FlipWordsComponent />
            </div>
            <div className="flex flex-col gap-2 pr-2 md:flex-row">
              <Link href="/components">
                <Button className="type-button text-xl dark:bg-slate-800 active:scale-[0.95] ">
                  <BookOpenCheck className="w-6 mr-2 h-7" /> Components
                </Button>
              </Link>
              <Link href="https://github.com/follow-prince/princey">
                <Button className="type-button text-xl dark:bg-slate-800 active:scale-[0.95] ">
                  <GithubIcon className="w-6 mr-2 h-7" /> GitHub
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex">
            <AnimatedTooltipPreview />
          </div>
        </div>

        <LinkPreviewDemo />
      </div>
      <div className="flex-col justify-center hidden md:flex ">
        <div className="md:px-40">
          <MailPage />
        </div>
        <HeroScrollDemo />
        <HeroParallaxDemo />
        <MacbookScrollView />
      </div>
    </>
  );
};

export default HomePage;
