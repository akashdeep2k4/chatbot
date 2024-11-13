import "dotenv/config";
import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent", {
      headers: { Authorization: `Bearer ${process.env.CHATBOT_API_KEY}` },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data from chatbot API" });
  }
}
