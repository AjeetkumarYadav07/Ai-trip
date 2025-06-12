import logo from './logo.webp'
import placeholder from './placeholder.webp'
import trip from './trip.jpg'
import hero_img1 from './hero_img1.png' 
import hero_img2 from './hero_img2.png' 
import hero_img3 from './hero_img3.png' 

export const assets ={
    logo,
    placeholder,
    trip ,
    hero_img1,
    hero_img2 ,
    hero_img3,
}



 {/* <! ==== Budget Planning === !> */}
 export const select_budget_Option = [
    {
        id:1,
        title:'Cheap',
        desc: 'Stay conscious of costs' ,
        icon: '💵',
    },
    {
        id:2,
        title:'Moaderate',
        desc: 'Keep cost on the average side' ,
        icon: '💰',
    },
    {
        id:2,
        title:'Luxury',
        desc: 'Don,t worry about cost' ,
        icon: '💸',
    },

 ] 


  {/* <! ==== Trvelling with === !> */}

  export const select_travel_option = [
    {
     id:1 ,
     title: 'Just Me',
     desc: 'A solo travels in exploration',
     icon: '🚣' ,
     people: "1",
    },
    {
     id:2,
     title: 'A Couple',
     desc: 'Two travels in tandem',
     icon: '🥂' ,
     people: "2",
    },
    {
     id:3 ,
     title: 'Family',
     desc: 'A group of fun loving adv',
     icon: '🏠' ,
     people: "5",
    },
    {
     id:4 ,
     title: 'Friends',
     desc: 'A bunch of thrill-seekes',
     icon: '🛬' ,
     people: "7",
    },

  ]


  export const AI_PROMT = "Generate Travel Plan for Location : {location}, for  {totalDays} Days for {traveler} with a {budget} budget , give me Hotels option List with HotelName , Hotel address , Price , hotel image url , geo coordinates , rating , descriptions and suggest itineray with placeName , place Details , Place Image Url ,  Geo Coordinates , ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format. "