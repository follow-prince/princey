import { AnimatedButton, BlinkButton } from "princey";
import { FaInstagramSquare } from "react-icons/fa";

const AnimatedButtonView = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-1">
        <AnimatedButton
          color="primary"
          icon={<FaInstagramSquare />}
          label="Your Name"
          link="https://github.com"
        />

        <BlinkButton color="green" label="Your Name" />
      </div>
    </div>
  );
};

export default AnimatedButtonView;
