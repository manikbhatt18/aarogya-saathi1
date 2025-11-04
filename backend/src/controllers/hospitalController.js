import axios from "axios";

export const getNearbyHospitals = async (req, res) => {
  const { lat, lng } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({ message: "Latitude and longitude are required" });
  }

  try {
    const radius = 10000; // in meters
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=hospital&key=${process.env.GOOGLE_MAPS_API_KEY}`;

    const response = await axios.get(url);

    const hospitals = response.data.results.map((place) => ({
      name: place.name,
      address: place.vicinity,
      location: place.geometry.location,
      rating: place.rating,
    }));

    res.status(200).json({ success: true, hospitals });
  } catch (error) {
    console.error("Error fetching hospitals:", error.message);
    res.status(500).json({ message: "Failed to fetch nearby hospitals" });
  }
};
