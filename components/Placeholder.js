import React from "react";

const Placeholder = ({ text = "@TODO Page" }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {text}
    </div>
  );
};

export default Placeholder;
