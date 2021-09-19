import React from "react";
import AnimatedTyping from "./AnimatedTyping";
import EventBanner from "./EventBanner";

const HeroSection = () => {
  return (
    <>
      <div className="flex justify-between items-center pt-10 md:px-10 px-2 flex-wrap">
        <div className="md:w-1/2 w-full">
          <span className="text-white my-2 block mx-1">
          For the love of learning & developing!
          </span>
          <AnimatedTyping
            strings={[
              "Hello",
              "Namaste",
              "Vanakkam",
              "Adab",
              "Sat Sri Akaal",
              "Namaskar",
            ]}
            sameLineText="from"
            nextLineText="DSC CMRIT"
          />
          <p className="md:w-2/3 w-full block ml-1 my-10">
          At GDSC CMRIT, we aim at building solutions & uplifting budding developers by providing peer-to-peer learning environment.
          </p>
          <div className="mt-2">
            <a
              href="https://chat.whatsapp.com/ISrEak57WKe8R6f5lZE4qe"
              className="bg-primary rounded-full py-2 px-4 hover:bg-green-700 mt-2"
            >
              <i className="fab fa-whatsapp"></i> Join Us
            </a>
          </div>
        </div>
        <img
          src="/dsc_gif.gif"
          className="md:w-1/2 w-full block md:my-0 mx-auto my-4"
        />
      </div>
      <EventBanner
        name="30 days of Google Cloud Platform"
        date="21 September 2021"
      />
    </>
  );
};

export default HeroSection;
