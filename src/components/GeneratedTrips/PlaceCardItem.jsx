import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { Button } from '../ui/button'
import { FaMapMarkedAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import { fetchUnsplashImage } from '../../config/UnplashApi';

const PlaceCardItem = ({place}) => {
    
  // const[imageUrl , setImageUrl] = useState(null);

  //    useEffect(() =>{
  //        const fetchImage = async() =>{
  //            const imagepath = place.placename ;

  //             if(!imagepath) return ;
  //            const img = await fetchUnsplashImage(imagepath);

  //            setImageUrl(img)

  //    };

  //    fetchImage();

  //    },[place.placename]);

  useEffect(() => {
  const fetchImage = async () => {
    const imagePath = place?.placename;

    if (!imagePath || imagePath.trim().length === 0) return;

    try {
      const res = await fetch(`/api/unsplash?query=${encodeURIComponent(imagePath)}`);
      const data = await res.json();
      setImageUrl(data.imageUrl || null);
    } catch (error) {
      console.error("❌ Error fetching image:", error);
      setImageUrl(null);
    }
  };

  fetchImage();
}, [place?.placename]);
  return (
    <div className='rounded-xl p-5 mt-5  border-3 border-amber-100 hover:scale-105 transition-all hover:shadow-md  '>
        
        
       
      
       <img   className='   rounded-xl w-[150px] h-[100px] object-cover  '
       src={  imageUrl ?imageUrl : assets.trip} alt="" />
   
       <div>
         <h2 className='font-bold text-lg' > {place?.placename} </h2>
          <p className='text-sm text-gray-400' > {place?.placedetails} </p>
          <p className='text-sm text-gray-400' > {place?.placedetails} </p>
          <h3 className='mt-2' > ⏲️ {place?.traveltime} </h3>
          <h3 className='mt-2' >  🎟️ {place?.ticketpricing} </h3>
          <h3 className='mt-4 font-semibold text-orange-400 ' > Best Views 📸: {place?.besttimetovisit} </h3>
            
          <Link  to={'https://www.google.com/maps/search/?api=1&query='+place?.placename  } target='_blank' > <Button className="mt-2 cursor-pointer "> <FaMapMarkedAlt /> Go to Map </Button> </Link>  
       </div>
         
    </div>
  )
}

export default PlaceCardItem