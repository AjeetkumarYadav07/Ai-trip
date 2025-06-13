// // src/config/UnplashApi.js or api/unsplash.js
// import axios from "axios";

// const UNSPLASH_BASE_URL = "https://api.unsplash.com/search/photos";

// export const fetchUnsplashImage = async (query) => {
//   try {
//     const response = await axios.get(UNSPLASH_BASE_URL, {
//       params: {
//         query,
//         per_page: 1,
//       },
//       headers: {
//         Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
//       },
//     });

//     return response.data.results[0]?.urls?.regular || null;
//   } catch (error) {
//     console.error("❌ Error fetching image from Unsplash:", error.response?.data || error.message);
//     return null;
//   }
// };


// --- currenlty not using other modified verson is under Api folder