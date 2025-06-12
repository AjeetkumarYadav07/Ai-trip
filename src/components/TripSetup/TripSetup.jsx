// TripSetup/TripSetup.jsx
import React, { useEffect, useRef, useState } from "react";
import PlaceAndDay from "./PlaceAndDay";
import BudgetAndTravellerOption from "./BudgetAndTravellerOption";
import GenerateTrip from "./GenerateTrip";
import GoogleLoginDialog from "./GoogleLoginDialog";

const TripSetup = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loginForm, setLoginForm] = useState(false);


   // 🔑 Create a ref to hold onGenerateTrip
      const genrateTripRef = useRef(null);

  const [formData, setFormData] = useState({
    destination: "",
    noOfdays: "",
    budget: "",
    traveller: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="mt-20 flex flex-col gap-2">
      {/* Destination and No. of Days */}
      <PlaceAndDay
        query={query}
        setQuery={setQuery}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
        formData={formData}
        setFormData={setFormData}
        handleInputChange={handleInputChange}
      />

      {/* Budget & Traveller */}
      <BudgetAndTravellerOption
        formData={formData}
        setFormData={setFormData}
        handleInputChange={handleInputChange}
      />

      {/* Generate Trip Button */}
      <GenerateTrip
        formData={formData}
        setLoginForm={setLoginForm}
        genrateTripRef={genrateTripRef}
      />

      {/* Google Login Dialog */}
      <GoogleLoginDialog open={loginForm} 
      onClose={() => setLoginForm(false)}
      genrateTripRef={genrateTripRef} />
    </div>
  );
};

export default TripSetup;
