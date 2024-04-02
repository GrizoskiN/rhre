// pages/api/realEstateData.js
export default async function handler(req, res) {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const targetUrl =
        "https://expert.propertyfinder.ae/feed/rise-high-real-estate-l-l-c/genericportal/7f3c22fab8da721cd1dad02157156c63";
      const response = await fetch(proxyUrl + targetUrl);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching real estate data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  