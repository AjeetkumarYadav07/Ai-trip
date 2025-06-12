export default async function handler(req, res) {
  const apiKey = process.env.LOCATIONIQ_API_KEY;
  const { q } = req.query;

  if (!q || q.length < 3) {
    return res.status(400).json({ error: "Query must be at least 3 characters" });
  }

  try {
    const response = await fetch(
      `https://us1.locationiq.com/v1/autocomplete.php?key=${apiKey}&q=${encodeURIComponent(q)}&format=json`
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Autocomplete API error:", error);
    res.status(500).json({ error: "Something went wrong fetching suggestions" });
  }
}
