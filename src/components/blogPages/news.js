import axios from 'axios';

export default async function handler(req, res) {
  const API_KEY = process.env.NEWS_API_KEY; // Store your API key in an environment variable
  const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from News API' });
  }
}
