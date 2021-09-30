import React from "react";
import Mission from "./Mission";
import VisionAim from "./VisionAim";
const AboutInfo = () => {
  return (
    <div className="container m-auto my-10"> 
       <div className="md:w-4/5 w-11/12  bg-gray-900 rounded-lg px-4 flex-wrap py-2 my-10 m-auto transition-transform transition duration-500 hover:bg-purple-600 hover:bg-opacity-75  transform hover:-translate-y-1 hover:scale-110">
            <h1 className="text-5xl text-primary text-center uppercase">About Us</h1>
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
            <h1 className="text-5xl text-primary uppercase">Our Mission</h1>
            <div className="lg:flex justify-between items-start items-stretch ">
                <Mission
                    missionImage = "/mission_edu.png"
                    missionTitle = "Education"
                    missionText = "GDSC CMRIT provides a platform for the growth and advancement of the student community in the field of technology by providing peer-to-peer learning environment by conducting webinars and events , providing hands on experiences on topics like Web Development, Mobile App Development, Machine Learning and much more!"
                />
                <Mission
                    missionImage = "/mission_collab.png"
                    missionTitle = "Collaboration"
                    missionText = "We are not just a community but a mini India where people from diverse backgrounds and different majors and knowledge come together to collaborate and co-create new innovative ideas that would help solve real world problems, build solutions for the local problems and beget a community that aspires for a positive and impactful change."
                />
                <Mission
                    missionImage ="/mission_innovate.png"
                    missionTitle = "Innovations"
                    missionText = "Through education and collaboration we want to provide students a platform where they can innovate and experiment along with us. Developing innovative products is what separates one from the crowd. Therefore, we want to lay the foundation necessary to bring our innovative visions and knowldge to life through the power of technology."
                />
            </div>
        </div>
        {/* Mission ends */}
        {/* Aim and vision Starts */}

        <div className="md:w-4/5  w-11/12  md:flex items-start m-auto items-stretch">
            <VisionAim
                title = "Our Aim"
                image = "/aim.jpg"
                text = "We aim to provide students with the opportunity to: Grow their knowledge on developer technologies and more through peer to peer workshops and events, gain relevant industry experience by solving problems for local organizations with technology based solutions and showcase their prototypes and solutions to their local community and industry leaders."
            />
            <VisionAim
                title="Our Vision"
                image = "/vision.jpg"
                text = "The DSC program is focused with a vision to inculcate individual’s with skills and knowledge, who are intrigued about the possibilities that developer technologies can bring changes to this world. We strive for the betterment of society through technology."
            /> 
        </div>
    </div>
    
  );
};

export default (AboutInfo);