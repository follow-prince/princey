import { FlipWords } from "../ui/flip-words";

export function FlipWordsComponent() {
  const words = ["better", "cute", "fast", "easy"];

  return (
    <div className="mx-auto text-lg font-bold md:text-3xl text-neutral-600 dark:text-neutral-400">
      Make
      <FlipWords words={words} />
      websites <br />
      regardless of your design experience.
    </div>
  );
}
