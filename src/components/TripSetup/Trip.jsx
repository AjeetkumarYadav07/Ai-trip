// import React, { useEffect, useState } from "react";
// import {
//   AI_PROMT,
//   assets,
//   select_budget_Option,
//   select_travel_option,
// } from "../../assets/assets";
// import { Button } from "../ui/button";
// import { toast } from "sonner";

// import runChat from "../../config/gemini";

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
  
// } from "@/components/ui/dialog";
// import { FcGoogle } from "react-icons/fc";

// const TripSetup = () => {
//   const [query, setQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);

//   const [Login, setLogin] = useState(false);
//   // Handling the UserInput Values
//   const [formData, setFormData] = useState([
//     {
//       destination: "",
//       noOfdays: "",
//       budget: "",
//       traveller: "",
//     },
//   ]);

//   const handleInputChange = (name, value) => {
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   useEffect(() => {
//     console.log(formData);
//   }, [formData]);

//   const apiKey = import.meta.env.VITE_MAP_PLACE_API_KEY; // replace with your key

//   const handleInput = async (e) => {
//     const value = e.target.value;
//     setQuery(value);

//     if (value.length > 2) {
//       const res = await fetch(
//         `https://us1.locationiq.com/v1/autocomplete.php?key=${apiKey}&q=${value}&format=json`
//       );
//       const data = await res.json();
//       setSuggestions(data);
//     } else {
//       setSuggestions([]);
//     }
//   };

//   const handleSelect = (place) => {
//     setQuery(place.display_name);

//     setFormData((prev) => ({
//       ...prev,
//       destination: place.display_name,
//     }));
//     setSuggestions([]);
//   };

//   // Handling the No of days trip
//   const onGenerateTrip = async () => {
//     // check user is login or not
//     const user = localStorage.getItem("user");

//     if (!user) {
//       setLogin(true);
//       return;
//     }

//     const { destination, noOfdays, budget, traveller } = formData;
//     const days = Number(noOfdays);

//     // Validate inputs
//     if (
//       !destination ||
//       !noOfdays ||
//       !budget ||
//       !traveller ||
//       isNaN(days) ||
//       days <= 0 ||
//       days > 5
//     ) {
//       console.log(
//         "Please enter all information correctly. Days must be between 1 and 5."
//       );
//       toast("Please fill all information  OR  Days must be between 1 and 5.");
//       return;
//     }

//     // Prepare prompt
//     const FINAL_PROMPT = AI_PROMT.replace("{location}", destination)
//       .replace("{totalDays}", noOfdays)
//       .replace("{traveler}", traveller)
//       .replace("{budget}", budget);

//     // Call AI
//     try {
//       const result = await runChat(FINAL_PROMPT);

//       // ✅ Log the AI result
//       console.log("AI Response:", result);
//     } catch (error) {
//       console.error("Error generating trip:", error);
//     }
//   };

//   return (
//     <div className="mt-20 flex flex-col gap-2">
//       <h2 className="text-xl my-3 font-medium">
//         What is destination your choice
//       </h2>

//       <input
//         type="text"
//         placeholder="ex. Goa, Manali"
//         className="border p-2 rounded w-full"
//         value={query}
//         onChange={handleInput}
//       />

//       {suggestions.length > 0 && (
//         <ul className="bg-white border rounded mt-1 shadow max-h-60 overflow-auto">
//           {suggestions.map((place, index) => (
//             <li
//               key={index}
//               className="p-2 hover:bg-gray-100 cursor-pointer"
//               onClick={() => handleSelect(place)}
//             >
//               {place.display_name}
//             </li>
//           ))}
//         </ul>
//       )}

//       <div>
//         <h2 className="text-xl my-3 font-medium">How may days are </h2>
//         <input
//           placeholder={"Ex.3"}
//           type="number"
//           className="border p-2 rounded w-full"
//           onChange={(e) => handleInputChange("noOfdays", e.target.value)}
//         />
//       </div>

//       {/* <! ==== Budget Planning === !> */}
//       <div className="mt-10">
//         <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>

//         <div className="grid grid-cols-3 gap-5 mt-5">
//           {select_budget_Option.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => handleInputChange("budget", item.title)}
//               className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer 
               
//               ${formData?.budget == item.title && "shadow-lg border-black"}
             
//             `}
//             >
//               <h2 className="text-4xl">{item.icon}</h2>
//               <h2 className="font-bold text-lg"> {item.title} </h2>
//               <h3 className="text-sm">{item.desc}</h3>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* <! ==== Select Travel with Option === !> */}
//       <div className="mt-10">
//         <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>

//         <div className="grid grid-cols-3 gap-5 mt-5">
//           {select_travel_option.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => handleInputChange("traveller", item.people)}
//               className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer
//                 ${
//                   formData?.traveller == item.people && "shadow-lg border-black"
//                 }
//             `}
//             >
//               <h2 className="text-4xl">{item.icon}</h2>
//               <h2 className="font-bold text-lg"> {item.title} </h2>
//               <h3 className="text-sm">{item.desc}</h3>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mt-10 text-center ">
//         <Button onClick={onGenerateTrip}>Generate Trip</Button>
//       </div>

//       <Dialog open={Login} >
       
//         <DialogContent  className="bg-black text-white " >
//           <DialogHeader>
           
//             <DialogDescription >
//                <img className="w-9" src={assets.logo} alt="logo" />
//                <h2 className="font-bold text-lg nt-7">Sing in With Google</h2>
//                <p>Sing in to the App with Google authentication securely </p>
//                <Button className="w-full mt-5 cursor-pointer " > <FcGoogle /> Sing in With Google </Button>
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default TripSetup;
