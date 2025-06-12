import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { Button } from "../ui/button";
import { FaShareAlt } from "react-icons/fa";
import { fetchUnsplashImage } from "../../config/UnplashApi";

const InfoSection = ({ trip }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      const destination = trip?.userSelection?.destination;
      if (!destination) return;

      const img = await fetchUnsplashImage(destination);
      // console.log("Fetched Unsplash image:", img);
      setImageUrl(img);
    };

    fetchImage();
  }, [trip?.userSelection?.destination]);

  return (
    <>
      <div>
        <div className="flex flex-col items-center">
          <img
            className=" w-[600px] h-[450px]     object-cover rounded-xl "
            src={imageUrl ? imageUrl : assets.placeholder}
            alt=""
          />
        </div>

        <div className="flex  justify-between items-center  ">
          <div className="my-5 flex flex-col gap-2">
            <h2 className="font-bold text-2xl">
              {" "}
              {trip?.userSelection?.destination}{" "}
            </h2>

            <div className="flex gap-5">
              <h2 className="p-1 px-3 bg-gray-200 rounded-full">
                {" "}
                📆 {trip.userSelection?.noOfdays} Day{" "}
              </h2>
              <h2 className="p-1 px-3 bg-gray-200 rounded-full ">
                {" "}
                💰 {trip.userSelection?.budget} Trip{" "}
              </h2>
              <h2 className="p-1 px-3 bg-gray-200 rounded-full ">
                {" "}
                ⛵ {trip.userSelection?.traveller} Person{" "}
              </h2>
            </div>
          </div>

          <Button>
            {" "}
            <FaShareAlt />{" "}
          </Button>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
