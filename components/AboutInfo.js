import React from "react";
import { withRouter } from "next/router";

const AboutInfo = ({ router }) => {
  return (
    <div className="container m-auto"> 
       <div className="md:w-4/5 w-11/12  bg-gray-900 rounded-lg px-4 flex-wrap py-2 my-10 m-auto">
            <h1 className="text-5xl text-yellow-500 text-center">About Us</h1>
           <div className="lg:flex justify-between items-center ">
                
                <p className="text-xl   m-8 text-center">
                GDSC CMRIT is a university-based community group for students interested in Google developer technologies. GDSC can take many forms-from just a few people getting together to watch some videos, to large gatherings with demos, tech talks, hackathons and conferences. We work on various technical domains and try to make use of Google Technologies to empower the audience around us.. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their communities.
                </p>
                <img src="/about_us.jpg"  className="md:w-80 sm: mx-auto block"></img>
           </div>
          
        </div>     
        {/* About US done */}
        {/* Mission starts */}
        <div className="md:w-4/5 w-11/12  bg-gray-900 rounded-lg px-4  py-2  my-10 m-auto text-center">
            <h1 className="text-5xl text-yellow-500">Our Mission</h1>
            <div className="lg:flex justify-between items-start">
                <div className="md:w-96 md:1/2 lg:mr-2 my-5 m-auto  bg-purple-600 bg-opacity-25 rounded-lg">
                    <img className="w-52 h-40 mx-auto my-8" src="/mission_edu.png"></img>
                    <div className="bg-purple-600 bg-opacity-75  rounded-b-lg">
                        <h3 className="text-3xl py-3.5 text-green-600 text-black text-opacity-100 uppercase">Education</h3>
                        <p className="mx-5 pb-5">
                        GDSC CMRIT provides a platform for the growth and advancement of the student community in the field of technology by providing peer-to-peer learning environment by conducting , webinars and events , providing hands on experiences on topics like Web Development, Mobile App Development, Data Science, Blockchain,  Machine Learning, Contributing to Open Source and much more!</p>
                    </div>
                    
                </div>
                <div className="md:w-96 md:w-1/2 lg:mr-2 my-5 m-auto bg-purple-600 bg-opacity-25 rounded-lg">
                    <img className="w-52 h-40 mx-auto my-8" src="/mission_collab.png"></img>
                    <div className="bg-purple-600 bg-opacity-75 rounded-b-lg">
                        <h3 className="text-3xl py-3.5 text-green-600 text-black text-opacity-100 uppercase"> Collaboration</h3>
                        <p className="mx-5 pb-5 ">
                        We are not just a community but a mini India where people from diverse backgrounds and different majors come together to collaborate and co-create new innovative ideas that would help solve real world problems, build solutions for the local problems and beget a community that aspires for a positive and impactful change.</p>
                    </div>
                    

                </div>
                <div className="md:w-96 md:w-1/2 my-5 m-auto bg-purple-600 bg-opacity-25 rounded-lg">
                    <img className="w-52 h-40 mx-auto my-8" src="/mission_innovate.png"></img>
                    <div className="bg-purple-600 bg-opacity-75 rounded-b-lg">
                        <h3 className="text-3xl py-3.5 text-black text-opacity-100 uppercase"> Innovations</h3>
                        <p className=" mx-5 pb-5">
                        Through education and collaboration we want to provide students a platform where they can innovate and experiment along with us. Developing innovative products is what separates one from the crowd. Therefore, we want to lay the foundation necessary to bring our innovative visions to life through the power of technology.</p>
                    </div>
                    
                </div>
            </div>
        </div>
        {/* Mission ends */}
        {/* Aim and vision Starts */}
        <div className="md:w-4/5  w-11/12  md:flex items-start justify-between m-auto">
            <div className="md:w-2/5  my-4   mr-2 m-auto  py-2 px-5 bg-gray-900 text-center rounded-lg shadow-lg">
                <h1 className=" text-5xl text-yellow-500 ">Our Aim</h1>
                <div>
                    <img src="/aim.jpg"  className="md:w-80 h-80 py-3 m-auto"></img>
                    <p className="text-xl my-4 text-center">
                    We aim to provide students with the opportunity to: Grow their knowledge on developer technologies and more through peer to peer workshops and events, gain relevant industry experience by solving problems for local organizations with technology based solutions and showcase their prototypes and solutions to their local community and industry leaders.
                    </p>
                </div>
            
            </div> 
            <div className="md:w-2/5 my-4 m-auto py-3 px-5 bg-gray-900 text-center rounded-lg shadow-lg">
                <h1 className="text-5xl text-yellow-500">Our Vision</h1>
                <div className="">
                    <img src="/vision.jpg"  className="md:w-80 h-80  py-3 m-auto"></img>
                    <p className="text-xl my-4 text-center ">
                    The DSC program is focused with a vision to inculcate individual’s with skills and knowledge, who are intrigued about the possibilities that developer technologies can bring changes to this world. We strive for the betterment of society through technology.

                    </p>
                </div>
            </div>   
        </div>
    </div>
    
  );
};

export default withRouter(AboutInfo);
