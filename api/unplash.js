// /api/unsplash.js

import axios from "axios";

export default async function handler(req, res) {
  const { query } = req.query;

  if (!query || query.trim().length === 0) {
    return res.status(400).json({ error: "Missing search query" });
  }

  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query,
        per_page: 1,
      },
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
    });

    const imageUrl = response.data.results[0]?.urls?.regular || null;
    res.status(200).json({ imageUrl });
  } catch (error) {
    console.error("❌ Error fetching image from Unsplash:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch image from Unsplash" });
  }
}
