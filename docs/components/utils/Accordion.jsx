import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="">
      <div className="flex justify-between w-full">
        <div className="relative w-full overflow-hidden">
          <span>{title}</span>
          <button
            onClick={() => setAccordionOpen(!accordionOpen)}
            className="absolute w-16 p-1 pl-3 text-xs text-white rounded-full -right-1 -top-1 bg-slate-600"
          >
            {accordionOpen ? "hide" : "show"}
          </button>
        </div>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out  text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
