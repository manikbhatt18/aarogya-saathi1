import { fetchNewsArticles } from "../services/newsService.js";

export const getMedicalNews = async (req, res) => {
  try {
    const query = req.query.q || "medical technology OR healthcare innovation";
    const articles = await fetchNewsArticles(query);
    res.status(200).json({ status: "success", total: articles.length, articles });
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({ status: "error", message: "Failed to fetch news" });
  }
};
