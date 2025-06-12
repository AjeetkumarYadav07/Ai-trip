import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { fetchUnsplashImage } from '../../config/UnplashApi';

const HotelCardItem = ({hotel , index}) => {
   
    const[imagUrl , setImageUrl] = useState(null);

    useEffect(() =>{
        
        const fetchImage = async()=>{
            const imgpath = hotel?.hotelname;
            if(!imgpath) return ;

            const img = await fetchUnsplashImage(imgpath);

            setImageUrl(img)
        };

        fetchImage();
    },[hotel?.hotelname]);

  return (
    <div>
          

         <Link  to={'https://www.google.com/maps/search/?api=1&query='+hotel?.hotelname +" ," + hotel?.hoteladdress } target="_blank" >
          <div key={index} className="hover:scale-105  transition-all  cursor-pointer ">
            <img src={  imagUrl || assets.placeholder} alt="img" className="rounded-lg w-[300px] h-[200px] object-cover " />
              
             <div className="my-2 flex flex-col ">
              <h2 className="font-medium"> {hotel?.hotelname} </h2>
              <h2 className="text-xs text-gray-500 "> 📍{hotel?.hoteladdress} </h2>
              <h2 className="text-sm"> 💸 {hotel?.price} </h2>
              <h2 className="text-sm"> ⭐ {hotel?.rating} </h2>
             </div> 

          </div>

           </Link>
    </div>
  )
}

export default HotelCardItem