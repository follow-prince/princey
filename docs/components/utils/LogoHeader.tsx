import Image from "next/image";
import Logo from "../../public/black-logo.svg";

export function LogoHeader() {
  return (
    <div className="flex gap-3 ">
      <Image src={Logo} alt="alt" className="max-w-10" />
      <div className="pt-2 text-lg font-extrabold md:pt-2 md:text-3xl ">
        Princey UI
      </div>
    </div>
  );
}
