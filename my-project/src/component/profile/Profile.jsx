import React, { useState } from 'react';
import fighter from '../../assets/P1100245.jpg';
import team from '../../assets/team.jpg';
import vtol from '../../assets/P1100244.jpg';
import Navbar from '../homepage/Navbar';
import Footer from '../homepage/Footer';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Define separate image arrays and captions for each section
const teamImages = [fighter, team, vtol];
const teamCaptions = [
    "Meet our beloved members! Each team member brings a unique blend of passion, expertise, and creativity, striving to redefine the boundaries of aerial vehicle engineering. From participating in cutting-edge competitions to engaging in transformative projects, Vishwakarma represents the pinnacle of commitment and excellence in aviation technology. Dive into the profiles of these trailblazers who are not just designing machines, but are crafting the future of flight.",
    "Our core team, always united and motivated to achieve great heights. Each individual plays a crucial role, contributing unique skills and perspectives to our collective success. We believe in the power of collaboration and the strength of diversity.",
    "Innovative minds at work, pushing the limits of drone technology. Our team is constantly exploring new frontiers, developing state-of-the-art solutions that set new standards in the industry. We are dedicated to excellence and driven by a shared vision of the future."
];

const programmingImages = [vtol, team, fighter];
const programmingCaptions = [
    "Programming team working on the latest AI algorithms to optimize drone performance. Our programmers are adept at integrating complex systems, ensuring seamless operation and advanced functionalities in our drones.",
    "Collaborative efforts of the programming team ensuring smooth operations. With a focus on innovation, our programmers develop cutting-edge software that enhances the capabilities of our drones, making them smarter and more efficient.",
    "Innovative coding solutions to enhance our drone capabilities. The programming team is the backbone of our technological advancements, creating robust and reliable software that powers our aerial systems. Their expertise in AI and machine learning is second to none."
];

const electricalImages = [team, vtol, fighter];
const electricalCaptions = [
    "Electrical team ensuring the drone's systems are perfectly wired and functional. Precision and reliability are the hallmarks of our electrical engineers, who design and implement the critical electrical components that drive our drones.",
    "Precision and safety in every circuit designed by our electrical experts. Our team is dedicated to creating safe and efficient electrical systems that ensure optimal performance and longevity of our drones.",
    "Cutting-edge electrical engineering driving our drone technology. From power management to sensor integration, our electrical team excels in crafting innovative solutions that enhance the functionality and safety of our drones."
];

const mechanicalImages = [fighter, vtol, team];
const mechanicalCaptions = [
    "Mechanical team designing and testing robust drone structures. Our mechanical engineers are masters of aerodynamics and structural integrity, ensuring that every drone we build is durable, efficient, and high-performing.",
    "Engineering excellence in every mechanical component. The mechanical team meticulously designs each part of our drones, focusing on durability, efficiency, and performance to meet the rigorous demands of modern aviation technology.",
    "Our mechanical team at work, turning concepts into reality. With a keen eye for detail and a commitment to innovation, our engineers transform visionary ideas into tangible, functional drones that lead the industry."
];

const managerialImages = [vtol, fighter, team];
const managerialCaptions = [
    "Managerial team overseeing projects and ensuring smooth execution. Our managers are the orchestrators of success, coordinating efforts across all departments to ensure timely and efficient project completion.",
    "Strategic planning and effective management driving our success. The managerial team plays a pivotal role in shaping our strategies, managing resources, and ensuring that every project aligns with our goals and values.",
    "Our managerial experts coordinating efforts and resources efficiently. With a focus on leadership and collaboration, our managers facilitate seamless operations, fostering an environment where innovation thrives and excellence is achieved."
];

const ImageSlider = () => {
    // Create a state for each section's current image index
    const [teamIndex, setTeamIndex] = useState(0);
    const [programmingIndex, setProgrammingIndex] = useState(0);
    const [electricalIndex, setElectricalIndex] = useState(0);
    const [mechanicalIndex, setMechanicalIndex] = useState(0);
    const [managerialIndex, setManagerialIndex] = useState(0);

    // Define the handlers for each section
    const goToPrevious = (index, setIndex, images) => {
        const isFirstImage = index === 0;
        const newIndex = isFirstImage ? images.length - 1 : index - 1;
        setIndex(newIndex);
    };

    const goToNext = (index, setIndex, images) => {
        const isLastImage = index === images.length - 1;
        const newIndex = isLastImage ? 0 : index + 1;
        setIndex(newIndex);
    };

    return (
        <div className="flex flex-col min-h-screen w-screen">
            <Navbar />
            <div className="flex-grow bg-gray-700 pb-5">
                {/* Our Team */}
                <Section
                    title="OUR TEAM"
                    images={teamImages}
                    captions={teamCaptions}
                    index={teamIndex}
                    goToPrevious={() => goToPrevious(teamIndex, setTeamIndex, teamImages)}
                    goToNext={() => goToNext(teamIndex, setTeamIndex, teamImages)}
                    reverse={false}
                />
                {/* Programming */}
                <Section
                    title="PROGRAMMING"
                    images={programmingImages}
                    captions={programmingCaptions}
                    index={programmingIndex}
                    goToPrevious={() => goToPrevious(programmingIndex, setProgrammingIndex, programmingImages)}
                    goToNext={() => goToNext(programmingIndex, setProgrammingIndex, programmingImages)}
                    reverse={true}
                />
                {/* Electrical */}
                <Section
                    title="ELECTRICAL"
                    images={electricalImages}
                    captions={electricalCaptions}
                    index={electricalIndex}
                    goToPrevious={() => goToPrevious(electricalIndex, setElectricalIndex, electricalImages)}
                    goToNext={() => goToNext(electricalIndex, setElectricalIndex, electricalImages)}
                    reverse={false}
                />
                {/* Mechanical */}
                <Section
                    title="MECHANICAL"
                    images={mechanicalImages}
                    captions={mechanicalCaptions}
                    index={mechanicalIndex}
                    goToPrevious={() => goToPrevious(mechanicalIndex, setMechanicalIndex, mechanicalImages)}
                    goToNext={() => goToNext(mechanicalIndex, setMechanicalIndex, mechanicalImages)}
                    reverse={true}
                />
                {/* Managerial */}
                <Section
                    title="MANAGERIAL"
                    images={managerialImages}
                    captions={managerialCaptions}
                    index={managerialIndex}
                    goToPrevious={() => goToPrevious(managerialIndex, setManagerialIndex, managerialImages)}
                    goToNext={() => goToNext(managerialIndex, setManagerialIndex, managerialImages)}
                    reverse={false}
                />
            </div>
            <Footer />
        </div>
    );
};

const Section = ({ title, images, captions, index, goToPrevious, goToNext, reverse }) => (
    <div className={`flex flex-col justify-center items-center bg-gradient-to-r from-yellow-600 to-yellow-300 w-full my-4 rounded-full mx-auto`} style={{ maxWidth: '95%' }}>
        <h1 className='md:text-[40px] text-[34px] font-bold text-center md:text-left'>{title}</h1>

        <div className={`flex ${reverse ? 'md:flex-row-reverse flex-col' : 'md:flex-row flex-col'} w-full items-center`}>
            <div className="flex justify-center items-center w-full md:w-1/2 p-4">
                <button onClick={goToPrevious} className="md:p-4 py-2 px-2 bg-gray-800 text-white hover:bg-yellow-600 rounded-full text-center">
                    <FaArrowLeft />
                </button>
                <img src={images[index]} alt="Gallery" className="md:w-[400px] w-[200px] mx-4 rounded-xl transition-transform duration-300 ease-in-out hover:scale-110" />
                <button onClick={goToNext} className="md:p-4 py-2 px-2 bg-gray-800 text-white hover:bg-yellow-600 rounded-full text-center">
                    <FaArrowRight />
                </button>
            </div>
            <div className="flex-1 px-[20px]">
                <p className='text-center font-poppins md:text-[20px] text-[16px] rounded-xl p-4 bg-opacity-80'>
                    {captions[index]}
                </p>
            </div>
        </div>
    </div>
);

export default ImageSlider;













