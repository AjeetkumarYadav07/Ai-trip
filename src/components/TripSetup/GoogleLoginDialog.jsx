// TripSetup/GoogleLoginDialog.jsx
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { assets } from "../../assets/assets";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";




const GoogleLoginDialog = ({ open, onClose  , generateTripRef }) => {



  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => getUserProfile(tokenResponse),
    onError: (error) => console.error("Login Failed:", error),
  });

  const getUserProfile = async (tokenInfo) => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo.access_token}`,
            Accept: 'application/json',
          },
        }
      );
      console.log("userInfo:", res.data);
      localStorage.setItem('userInfo' , JSON.stringify(res.data) );
          onClose();
      // call GenerateTrip function from ref
      if (generateTripRef?.current) {
  console.log("✅ Calling generateTripRef.current()");
  generateTripRef.current();
}
    } catch (err) {
      console.error("Error fetching user info:", err);
    }
  };
  


  return (
   <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-black text-white">
        <DialogHeader>
          <DialogTitle>
            <img className="w-9 mx-auto mb-3" src={assets.logo} alt="logo" />
            Are you absolity sure 
          </DialogTitle>
          <DialogDescription className="text-center">
            <p>Sign in to the App with Google authentication securely</p>
            <Button onClick={login}
             className="w-full mt-5 cursor-pointer flex items-center justify-center gap-2">
              <FcGoogle size={24} />
              Sign in With Google
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default GoogleLoginDialog;
