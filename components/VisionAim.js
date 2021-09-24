import React from "react";
const VisionAim = ({title,image,text}) => {
    return (
        <div className="md:w-2/5 m-auto my-4  items-center  py-2 px-5 bg-gray-900 text-center rounded-lg shadow-lg transition-transform transition duration-500 hover:bg-yellow-400 transform hover:-translate-y-1 hover:scale-110 ">
            <h1 className=" text-5xl text-red-600 uppercase">{title}</h1>
            <div>
                <img src={image}  className="md:w-80 h-80 py-3 m-auto"></img>
                <p className="text-xl my-4 text-center">
                    {text}
                </p>
            </div>
            
        </div>

    );
};
export default VisionAim;