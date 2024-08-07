import { AnimatedTooltipPreview } from "./components/AnimatedTooltipPreview";
import { FlipWordsComponent } from "./components/FlipWords";
import { HeroParallaxDemo } from "./components/HeroParallax";
import { HoverBorderGradientDemo } from "./components/HoverBorderGradientDemo";
import { TabsDemo } from "./components/Tabs";

const HomePage = () => {
  return (
    <>
      <div className="grid w-full grid-cols-none md:grid-cols-3 md:p-10">
        <div className="z-10 flex flex-col justify-center w-full px-5 pt-5 md:p-10 max-w-7xl md:pt-0">
          <div className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 md:text-6xl">
            Welcome to Princey UI
          </div>
          <FlipWordsComponent />
          <div className="flex items-center pt-3 ">
            <HoverBorderGradientDemo />
            <AnimatedTooltipPreview />
          </div>
        </div>
        <TabsDemo />
      </div>
      <HeroParallaxDemo />
    </>
  );
};

export default HomePage;
