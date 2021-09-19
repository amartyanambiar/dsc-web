import React from "react";

const Placeholder = ({ text = "Under Construction!" }) => {
  return (
    <div className="w-full pt-10 flex justify-center items-center ">
      <div>
        <div className=" w-4/5 mx-auto">
          <img src="/building.png" />
        </div>
        <p className="text-center pt-5">{text}</p>
      </div>
    </div>
  );
};

export default Placeholder;
