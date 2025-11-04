import axios from "axios";

export const getNews = async (req, res) => {
  try {
    const query = req.query.q || "medical healthcare";
    const url = `https://gnews.io/api/v4/top-headlines?category=health&lang=en&country=in&max=50&apikey=${process.env.GNEWS_API_KEY}`;



    const response = await axios.get(url);

    if (!response.data.articles) {
      return res.status(404).json({ message: "No news found." });
    }

    res.status(200).json({
      success: true,
      total: response.data.totalArticles,
      articles: response.data.articles,
    });
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch news data.",
    });
  }
};