import React, { useState } from 'react';
import fighter from '../../assets/fighter.jpg'; 
import team from '../../assets/team.jpg'; 
import vtol from '../../assets/vtol.png'; 

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
        <div className="flex flex-col justify-center items-center">
            <h1 className='text-[50px] font-bold'>OUR TEAM</h1>
            <div className="flex justify-center items-center">
                <button onClick={goToPrevious} className="p-4 bg-gray-800 text-white hover:bg-yellow-600">Previous</button>
                <img src={images[currentIndex]} alt="Gallery" className="w-full max-w-lg mx-4"/>
                <button onClick={goToNext} className="p-4 bg-gray-800 text-white hover:bg-yellow-600">Next</button>
            </div>
        </div>
    );
};

export default ImageSlider;


