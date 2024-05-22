import React, { useState } from 'react';
import fighter from '../../assets/P1100245.jpg'; 
import team from '../../assets/team.jpg'; 
import vtol from '../../assets/P1100244.jpg'; 
import Navbar from '../homepage/Navbar';
import Footer from '../homepage/Footer';

// Define separate image arrays for each section
const teamImages = [fighter, team, vtol];
const programmingImages = [vtol, team, fighter];
const electricalImages = [team, vtol, fighter];
const mechanicalImages = [fighter, vtol, team];
const managerialImages = [vtol, fighter, team];

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
            <Navbar/>
            <div className="flex-grow bg-gray-700" style={{ paddingBottom: '5px' }}>
                {/* Our Team */}
                <Section 
                    title="OUR TEAM" 
                    images={teamImages} 
                    index={teamIndex} 
                    goToPrevious={() => goToPrevious(teamIndex, setTeamIndex, teamImages)} 
                    goToNext={() => goToNext(teamIndex, setTeamIndex, teamImages)} 
                    reverse={false} 
                />
                {/* Programming */}
                <Section 
                    title="PROGRAMMING" 
                    images={programmingImages} 
                    index={programmingIndex} 
                    goToPrevious={() => goToPrevious(programmingIndex, setProgrammingIndex, programmingImages)} 
                    goToNext={() => goToNext(programmingIndex, setProgrammingIndex, programmingImages)} 
                    reverse={true} 
                />
                {/* Electrical */}
                <Section 
                    title="ELECTRICAL" 
                    images={electricalImages} 
                    index={electricalIndex} 
                    goToPrevious={() => goToPrevious(electricalIndex, setElectricalIndex, electricalImages)} 
                    goToNext={() => goToNext(electricalIndex, setElectricalIndex, electricalImages)} 
                    reverse={false} 
                />
                {/* Mechanical */}
                <Section 
                    title="MECHANICAL" 
                    images={mechanicalImages} 
                    index={mechanicalIndex} 
                    goToPrevious={() => goToPrevious(mechanicalIndex, setMechanicalIndex, mechanicalImages)} 
                    goToNext={() => goToNext(mechanicalIndex, setMechanicalIndex, mechanicalImages)} 
                    reverse={true} 
                />
                {/* Managerial */}
                <Section 
                    title="MANAGERIAL" 
                    images={managerialImages} 
                    index={managerialIndex} 
                    goToPrevious={() => goToPrevious(managerialIndex, setManagerialIndex, managerialImages)} 
                    goToNext={() => goToNext(managerialIndex, setManagerialIndex, managerialImages)} 
                    reverse={false} 
                />
            </div>
            <Footer/>
        </div>
    );
};

const Section = ({ title, images, index, goToPrevious, goToNext, reverse }) => (
    <div className={`flex flex-col justify-center items-center bg-gradient-to-b from-yellow-500 to-yellow-600 w-full my-4 border-t-8 border-b-8 border-yellow-500`}>
        <h1 className='md:text-[50px] text-[30px] font-bold'>{title}</h1>

        <div className={`flex ${reverse ? 'md:flex-row-reverse flex-col' : 'md:flex-row flex-col'}`}>
            <div className="flex flex-1 justify-center items-center" style={{ paddingBottom: '20px' }}> 
                <button onClick={goToPrevious} className="md:p-4 py-4 px-2 bg-gray-800 text-white hover:bg-yellow-600 text-center">{"<"}</button>
                <img src={images[index]} alt="Gallery" className="md:w-[520px] w-[260px] mx-4" style={{ marginBottom: '20px' }}/> 
                <button onClick={goToNext} className="md:p-4 py-4 px-2 bg-gray-800 text-white hover:bg-yellow-600 text-center">{">"}</button>
            </div>
            <div className="flex-1 px-[20px]">
                <p className='text-justify font-poppins md:text-start text-[20px]'>
                Meet our beloved members! Each team member brings a unique blend of passion, expertise, and creativity, striving to redefine the boundaries of aerial vehicle engineering. From participating in cutting-edge competitions to engaging in transformative projects, Vishwakarma represents the pinnacle of commitment and excellence in aviation technology. Dive into the profiles of these trailblazers who are not just designing machines, but are crafting the future of flight.
                </p>
            </div>
        </div>
    </div>
);

export default ImageSlider;











