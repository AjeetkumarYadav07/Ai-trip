import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../../config/firebaseConfig';
import { toast } from 'sonner';
import InfoSection from '../../GeneratedTrips/InfoSection';
import Hotels from '../../GeneratedTrips/Hotels';
import PlacesToVisit from '../../GeneratedTrips/PlacesToVisit';



const ViewTrip = () => {
  const { tripId } = useParams();
  
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    if (tripId) {
      getTripData();
    }
  }, [tripId]);



    const getTripData = async () =>{
      const docRef = doc(db , 'AiTrips' , tripId);
      const docSnap = await getDoc(docRef);

      if(docSnap.exists()){
         
         console.log("Trip data" , docSnap.data());
         setTrip(docSnap.data());
      }
      else{
         console.log("not such document");
         toast("NO trip found:")
      }
    
  };

  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
      {/* ViewTrip : {tripId} */}


      {/* Info Section */}
      <InfoSection  trip={trip} />


      {/* Hotels Options */}
       <Hotels trip={trip} />


      {/* Daily Plan  */}

         <PlacesToVisit trip={trip} />

      {/* You can add more components like itinerary, etc. */}
    </div>
  );
};

export default ViewTrip;
