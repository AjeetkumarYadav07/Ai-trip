import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";


import HotelCardItem from "./HotelCardItem";


const Hotels = ({ trip }) => {
    

  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel recomonations </h2>

      <div className=" gap-7 grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {trip?.tripData?.[0]?.travelPlan?.hotels?.map((hotel, index) => (

          // Link it for use the Google maps navigate 

           <HotelCardItem hotel={hotel} index={index} />
        ))}
       
       
      </div>

    </div>
  );
};

export default Hotels;
