import { BookOpenCheck, GithubIcon } from "lucide-react";
import Link from "next/link";
import { FlipWordsComponent } from "./components/FlipWords";
import { HeroParallaxDemo } from "./components/HeroParallax";
import { LinkPreviewDemo } from "./components/LinkPreviewView";
import { MacbookScrollView } from "./components/MacbookScrollView";
import { Button } from "./ui/buttonVariants";
import { ContainerScroll } from "./ui/container-scroll-animation";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <div className="w-full ">
                <div className="z-10 flex flex-col w-full ">
                  <div className="flex flex-col text-center md:text-start ">
                    <div className="text-3xl font-bold text-center text-transparent text-neutral-900 md:text-5xl bg-clip-text bg-gradient-to-br from-rose-600 to-pink-500 dark:from-yellow-500 dark:to-yellow-600">
                      Welcome to Princey UI
                      <FlipWordsComponent />
                    </div>
                    <div className="flex justify-center gap-3 py-3 pr-2 text-center ">
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
                </div>

                <LinkPreviewDemo />
              </div>
            </>
          }
        >
          <div>df</div>
          {/* <Dashboard /> */}
        </ContainerScroll>
      </div>
      <div className="flex-col justify-center md:flex ">
        <HeroParallaxDemo />
        <MacbookScrollView />
      </div>
    </>
  );
};

export default HomePage;
