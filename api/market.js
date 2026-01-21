 export default async function handler(req, res) {
  try {
    const server = req.query.server || "0";

    const apiUrl = `https://api.arz.market/api/getSelectedMarketplace/${server}`;

    const response = await fetch(apiUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json"
      }
    });

    const text = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json; charset=utf-8");

    res.status(200).send(text);
  } catch (e) {
    res.status(500).json({
      error: true,
      message: e.message
    });
  }
 }
