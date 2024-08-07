import { MacbookScroll } from "../ui/macbook-scroll";

export function MacbookScrollView() {
  return (
    <div className="overflow-hidden dark:bg-[#ffffff00] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        }
        showGradient={false}
      />
    </div>
  );
}
