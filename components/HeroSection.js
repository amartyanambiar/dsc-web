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
            At GDSC CMRIT, we aim at building solutions & uplifting budding
            developers by providing peer-to-peer learning environment.
          </p>
          <div className="my-2 text-center md:text-left">
            <a
              href="https://chat.whatsapp.com/ISrEak57WKe8R6f5lZE4qe"
              className="bg-primary text-xl rounded-tl-full rounded-bl-full py-2 px-4 hover:bg-primaryDark mt-2"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://t.me/dsccmrit"
              className="bg-telegram text-xl py-2 px-4 hover:bg-telegramDark mt-2"
            >
              <i className="fab fa-telegram"></i>
            </a>
            <a
              href="https://discord.gg/2pCRQNNTq5"
              className="bg-discord text-xl py-2 px-4 hover:bg-discordDark"
            >
              <i className="fab fa-discord"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/google-developer-student-club-cmrit/"
              className="bg-linkedin text-xl rounded-tr-full rounded-br-full py-2 px-4 hover:bg-linkedinDark"
            >
              <i className="fab fa-linkedin"></i>
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
        date="28 September 2021"
      />
    </>
  );
};

export default HeroSection;
