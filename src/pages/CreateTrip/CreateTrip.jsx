import React from "react";
import TripSetup from "../../components/TripSetup/TripSetup";

const CreateTrip = () => {

   
  return (
    <>
      <div className="max-w-[80vw] sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-4 mt-10">
        <h2 className="font-bold text-3xl">Tell us your travel preferences  🏕️ 🌳 </h2>
        <p className="mt-3 text-gray-500 text-xl">
          Just provide some basic information , and our trip planner will
          genrate a customized itineray based on your perferences .
        </p>

        
        <TripSetup/>
        
   
      </div>


    </>
  );
};

export default CreateTrip;
