import Image from "next/image";
import React from "react";
import CheckBoxProfile from "../../../public/elements/hero-image/checkBox-Profile-card.svg";
import GraphImage from "../../../public/elements/hero-image/graphImage.svg";
import MessageCard from "../../../public/elements/hero-image/message-Card.svg";
import PenalImage from "../../../public/elements/hero-image/penal.svg";
import PeopleImage from "../../../public/elements/hero-image/people-image.svg";
import PhotoImage from "../../../public/elements/hero-image/photoImage.svg";
import ProfileCard from "../../../public/elements/hero-image/profile-card.svg";

const HeroImage = () => {
  return (
    <div className="container">
      <div className="flex gap-2 pb-5 row">
        <div className="bg-[#F43F5E] py-1 px-3 text-white rounded-lg font-extrabold text-xs  sm:text-lg">
          Princey
        </div>
        <div className="bg-[#F43F5E] text-white py-1 px-3 rounded-lg font-extrabold text-xs sm:text-lg">
          UI Component Library
        </div>
      </div>

      <div className="relative">
        {/* PenalImage as the background */}
        <Image className="w-full" src={PenalImage} alt="Penal Image" />

        {/* Overlaying images */}
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
          <Image
            className="absolute w-20 sm:-right-10 animate-bounce sm:-top-20 sm:w-60 -top-4 -right-5"
            src={MessageCard}
            alt="Message Card"
          />
          <Image
            className="absolute w-12 sm:w-28 sm:-right-10 animate-bounce -right-5"
            src={ProfileCard}
            alt="Profile Card"
          />
          <Image
            className="absolute w-10 sm:w-28 sm:-bottom-14 sm:left-44 animate-bounce -bottom-2 left-24"
            src={CheckBoxProfile}
            alt="Check Box Profile"
          />
          <Image
            className="absolute w-16 sm:w-40 sm:-right-10 sm:-bottom-10 -right-5 -bottom-2 "
            src={PeopleImage}
            alt="Check Box Profile"
          />
          <Image
            className="absolute w-24 sm:w-52 sm:-left-12 sm:-bottom-16 animate-bounce -left-7 -bottom-7"
            src={GraphImage}
            alt="Check Box Profile"
          />
          <Image
            className="absolute w-16 sm:w-52 sm:-left-24 sm:top-16 animate-bounce top-9 -left-8"
            src={PhotoImage}
            alt="Check Box Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
