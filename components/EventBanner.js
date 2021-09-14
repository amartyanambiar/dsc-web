import React from "react";
import Countdown from "./Countdown";

const EventBanner = ({ name, date }) => {
  return (
    <div className="w-4/5 m-auto bg-gray-900 rounded-lg px-4 py-2 flex justify-between items-center">
      <div>
        <h3 className="text-3xl">Catch us at our next event :</h3>
        <div className="w-20 h-2 bg-primary my-4"></div>
        <p className="text-xl my-4">
          {name} on {date}
        </p>
        <Countdown className="text-2xl" countDownTime={date} />
      </div>
      <img src="/event.png" className="w-60" />
    </div>
  );
};

export default EventBanner;
