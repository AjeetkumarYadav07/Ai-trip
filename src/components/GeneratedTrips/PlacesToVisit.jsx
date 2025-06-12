import React from 'react';
import PlaceCardItem from './PlaceCardItem';

const PlacesToVisit = ({ trip }) => {
  const itinerary = trip.tripData?.[0]?.travelPlan?.itinerary;

  const getPlacesArray = (dayData) => {
    // Try common keys first
    if (Array.isArray(dayData.places)) return dayData.places;
    if (Array.isArray(dayData.activities)) return dayData.activities;

    // Fallback: dynamically find first array value
    for (let key in dayData) {
      if (Array.isArray(dayData[key])) {
        return dayData[key];
      }
    }

    return []; // Default empty array
  };

  return (
    <div>
      <h2 className='font-bold text-lg mt-10'>Places to Visit</h2>

      <div>
        {itinerary &&
          Object.entries(itinerary)
            .sort((a, b) => {
              const dayA = parseInt(a[0].replace('day', ''));
              const dayB = parseInt(b[0].replace('day', ''));
              return dayA - dayB;
            })
            .map(([dayKey, dayData], index) => {
              const placesOrActivities = getPlacesArray(dayData);

              return (
                <div key={index} className='border p-3 rounded-xl mt-10'>
                  <h2 className='font-medium text-lg'>{dayKey}</h2>

                  {dayData.besttimetovisit && (
                    <span className='text-sm font-semibold text-orange-500 ml-2'>
                      Best Months for Explore : {dayData.besttimetovisit}
                    </span>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                    {placesOrActivities.map((place, idx) => (
                      <div key={idx}>
                        <PlaceCardItem place={place} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default PlacesToVisit;
