import axios from "axios";
import { config } from "../config/appConfig.js";

export const fetchNewsArticles = async (query = "medical technology") => {
  const url = "https://newsapi.org/v2/everything";

  const params = {
    q: query,
    language: "en",
    sortBy: "publishedAt",
    apiKey: config.newsApiKey,
  };

  const response = await axios.get(url, { params });

  return response.data.articles.map((article) => ({
    title: article.title,
    description: article.description,
    url: article.url,
    image: article.urlToImage,
    publishedAt: article.publishedAt,
    source: article.source.name,
  }));
};
