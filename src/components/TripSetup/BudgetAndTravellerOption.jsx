// TripSetup/BudgetAndTravellerOption.jsx
import React from "react";
import { select_budget_Option, select_travel_option } from "../../assets/assets";

const BudgetAndTravellerOption = ({ formData, setFormData }) => {
  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {/* Budget Section */}
      <div className="mt-10">
        <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {select_budget_Option.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("budget", item.title)}
              className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${
                formData.budget === item.title ? "shadow-lg border-black" : ""
              }`}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h3 className="text-sm">{item.desc}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Traveller Section */}
      <div className="mt-10">
        <h2 className="text-xl my-3 font-medium">How many Travellers?</h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {select_travel_option.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("traveller", item.people)}
              className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${
                formData.traveller === item.people ? "shadow-lg border-black" : ""
              }`}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h3 className="text-sm">{item.desc}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BudgetAndTravellerOption;
