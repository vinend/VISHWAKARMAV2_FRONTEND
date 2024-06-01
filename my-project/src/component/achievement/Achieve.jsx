import React, { Fragment } from 'react';
import eventsData from './eventComponents'; // Assuming this import brings the events data
import Navbar from '../homepage/Navbar';
import Footer from '../homepage/Footer';
import bgContactSmall from '../../assets/kebersamaanVTOL.jpg';

const Achieve = ({ events }) => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat filter grayscale bg-center"
        style={{
          backgroundImage: `url(${bgContactSmall})`,
          zIndex: -1,
        }}
      ></div>

      <Navbar />

      <div className="flex-grow flex flex-col gap-y-3 my-4 overflow-auto">
        <Circle /> {/* First circle appears here */}

        {events.map((event, key) => (
          <Fragment key={key}>
            <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
              {event.direction === 'left' ? (
                <EventCard {...event} />
              ) : (
                <div></div>
              )}

              <Pillar />

              {event.direction === 'right' ? (
                <EventCard {...event} />
              ) : (
                <div></div>
              )}
            </div>
            {key < events.length - 1 && <Circle />}
          </Fragment>
        ))}

        <Circle /> {/* Last circle appears here */}
      </div>

      <Footer />
    </div>
  );
};

const Circle = () => (
  <div className="rounded-full w-4 h-4 bg-yellow-500 mx-auto"></div>
);

const Pillar = () => (
  <div className="rounded-t-full rounded-b-full w-2 h-full bg-yellow-500 mx-auto"></div>
);

const EventCard = ({ heading, subheading, image }) => (
  <div className="flex flex-col bg-white gap-y-2 border shadow-md rounded-xl p-4">
    <img src={image} alt={heading} className="w-full h-32 object-cover rounded-md" /> {/* Display image */}
    <div className="text-grey-800 font-bold text-lg border-b">{heading}</div>
    <div className="text-sm text-gray-700">{subheading}</div>
  </div>
);

export default Achieve;
