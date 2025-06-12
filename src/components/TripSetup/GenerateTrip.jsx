// TripSetup/GenerateTrip.jsx
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";

import { AI_PROMT } from "../../assets/assets";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import chatSession from "../../config/gemini";
import normalizeKeysDeep from "./normalizeKeysDeep";

const GenerateTrip = ({ formData, setLoginForm, generateTripRef }) => {

    //Mainting Loading state for Gnerate Bbutton
   const[loading , setLoading] = useState(false);

   // Navigating the route on ViewTrip based on ID

   const navigate = useNavigate() ;


  const onGenerateTrip = async () => {
    const user = localStorage.getItem("userInfo"); // ✅ Fixed key
    if (!user) {
      console.log("❌ User not logged in");
      setLoginForm(true);
      return;
    }

    console.log("👤 User found:", JSON.parse(user));

    const { destination, noOfdays, budget, traveller } = formData;
    const days = Number(noOfdays);

    if (
      !destination ||
      !noOfdays ||
      !budget ||
      !traveller ||
      isNaN(days) ||
      days <= 0 ||
      days > 5
    ) {
      toast("Please fill all information OR Days must be between 1 and 5.");
      return;
    }

    const FINAL_PROMPT = AI_PROMT.replace("{location}", formData?.destination)
      .replace("{totalDays}",formData?.noOfdays)
      .replace("{traveler}", formData?.traveller)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.noOfdays);

    console.log("📤 Prompt sent to AI:", FINAL_PROMPT);
   
    setLoading(true);
    
    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      console.log("✅ AI response:", result?.response?.text()); // This should now show

    await  SaveAiTrip(result?.response?.text());
    
      setLoading(false);


    } catch (error) {
      console.log("❌ Error to Generate Trip", error);
    }
  };

  // const SaveAiTrip = async (TripData) => {

  //   setLoading(true);
  //   // Add a new document in collection "cities"
  //    const userInfo =JSON.parse(localStorage.getItem("userInfo"));
  //   const docId= Date.now().toString()
  //   await setDoc(doc(db, "AITrips", docId), {
  //     userSelection:formData,
  //     tripData:TripData,
  //     userEmail:userInfo?.email,
  //     id:docId

  //   });

  //   setLoading(false)
  // };



  const SaveAiTrip = async (TripData) => {
  if (!TripData) {
    console.error("❌ TripData is undefined, not saving to Firestore.");
    return;
  }

  setLoading(true);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const docId = Date.now().toString();


   // Normalize everything dynamically
  const parsedTripData = JSON.parse(TripData);
  const normalizedTripData = normalizeKeysDeep(parsedTripData);

  await setDoc(doc(db, "AiTrips", docId), {
    userSelection: formData,
    tripData: normalizedTripData,
    userEmail: userInfo?.email,
    id: docId,
  });

  setLoading(false);
  navigate('/view-trip/'+docId)
};


    //Assign function to ref
  useEffect(() => {
    if (generateTripRef) {
      generateTripRef.current = onGenerateTrip;
      console.log("🔁 generateTripRef assigned");
    }
  }, [formData]);

  return (
    <div className="mt-10 text-center">
      <Button className="cursor-pointer" onClick={onGenerateTrip}  disabled={loading} >
       {loading? "Please wait Generating..." : "Generate Trip"  }
        
        </Button>
    </div>
  );
};

export default GenerateTrip;
