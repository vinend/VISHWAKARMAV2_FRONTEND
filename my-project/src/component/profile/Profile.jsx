import React, { useState } from 'react';
import fighter from '../../assets/P1100245.jpg'; 
import team from '../../assets/team.jpg'; 
import vtol from '../../assets/P1100244.jpg'; 
import Navbar from '../homepage/Navbar';
import Footer from '../homepage/Footer';

const images = [fighter, team, vtol];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastImage = currentIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <div className="flex-grow bg-gray-700" style={{ paddingBottom: '5px' }}>
                {/* Our Team - remains standard for introduction */}
                <Section title="OUR TEAM" index={currentIndex} goToPrevious={goToPrevious} goToNext={goToNext} reverse={false} />
                {/* Programming */}
                <Section title="PROGRAMMING" index={currentIndex} goToPrevious={goToPrevious} goToNext={goToNext} reverse={true} />
                {/* Electrical */}
                <Section title="ELECTRICAL" index={currentIndex} goToPrevious={goToPrevious} goToNext={goToNext} reverse={false} />
                {/* Mechanical */}
                <Section title="MECHANICAL" index={currentIndex} goToPrevious={goToPrevious} goToNext={goToNext} reverse={true} />
                {/* Managerial */}
                <Section title="MANAGERIAL" index={currentIndex} goToPrevious={goToPrevious} goToNext={goToNext} reverse={false} />
            </div>
            <Footer/>
        </div>
    );
};

const Section = ({ title, index, goToPrevious, goToNext, reverse }) => (
    <div className={`flex flex-col justify-center items-center bg-gradient-to-b from-yellow-500 to-yellow-600 w-full my-4 border-t-8 border-b-8 border-yellow-500`}>
        <h1 className='text-[50px] font-bold'>{title}</h1>
        <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="flex flex-1 justify-center items-center" style={{ paddingBottom: '20px' }}> 
                <button onClick={goToPrevious} className="p-4 bg-gray-800 text-white hover:bg-yellow-600">Previous</button>
                <img src={images[index]} alt="Gallery" className="max-w-lg mx-4" style={{ marginBottom: '20px' }}/> 
                <button onClick={goToNext} className="p-4 bg-gray-800 text-white hover:bg-yellow-600">Next</button>
            </div>
            <div className="flex-1 p-4">
                <p className='text-center font-poppins md:text-start text-[20px]'>
                Meet our beloved members! Each team member brings a unique blend of passion, expertise, and creativity, striving to redefine the boundaries of aerial vehicle engineering. From participating in cutting-edge competitions to engaging in transformative projects, Vishwakarma represents the pinnacle of commitment and excellence in aviation technology. Dive into the profiles of these trailblazers who are not just designing machines, but are crafting the future of flight.
                </p>
            </div>
        </div>
    </div>
);


export default ImageSlider;











