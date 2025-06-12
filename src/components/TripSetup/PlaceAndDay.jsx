// TripSetup/PlaceAndDay.jsx
import React from "react";

const PlaceAndDay = ({ formData, setFormData, query, setQuery, suggestions, setSuggestions }) => {
   
  // api palce map 
  // const apiKey = import.meta.env.VITE_MAP_PLACE_API_KEY;

  const handleInput = async (e) => {
  const value = e.target.value;
  setQuery(value);

  if (value.length > 2) {
    try {
      const res = await fetch(`/api/autocomplete?q=${encodeURIComponent(value)}`);
      const data = await res.json();
      setSuggestions(data);
    } catch (err) {
      console.error("Failed to fetch suggestions:", err);
      setSuggestions([]);
    }
  } else {
    setSuggestions([]);
  }
};


  const handleSelect = (place) => {
    setQuery(place.display_name);
    setFormData((prev) => ({
      ...prev,
      destination: place.display_name,
    }));
    setSuggestions([]);
  };

  const handleDayChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      noOfdays: e.target.value,
    }));
  };

   const dark = localStorage.getItem('theme') === 'dark' ; 

  return (
    <>
      <h2 className="text-xl my-3 font-medium">What is destination your choice</h2>
      <input
        type="text"
        placeholder="ex. Goa, Manali"
        className="border p-2 rounded w-full"
        value={query}
        onChange={handleInput}
        required={true}
      />

      {suggestions.length > 0 && (
        <ul    className={`${dark? 'bg-gray-800' : 'bg-white'} border rounded mt-1 shadow max-h-60 overflow-auto`}>
          {suggestions.map((place, index) => (
            <li
              key={index}
              className={`${dark? 'hover:bg-gray-700' : ' hover:bg-gray-100 '}  p-2 cursor-pointer`}
              onClick={() => handleSelect(place)}
            >
              {place.display_name}
            </li>
          ))}
        </ul>
      )}

      <div>
        <h2 className="text-xl my-3 font-medium">How many days are you planning?</h2>
        <input
          placeholder="Ex. 3"
          type="number"
          className="border p-2 rounded w-full"
          value={formData.noOfdays}
          onChange={handleDayChange}
          min={1}
          max={5}
        />
      </div>
    </>
  );
};

export default PlaceAndDay;
