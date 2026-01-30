import axios from "axios";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  try {
    const { data } = await axios.get(
      "https://ispits.sante.gov.ma/pages/DetailActualites_tous.aspx?IDActu=00",
      { headers: { "User-Agent": "Mozilla/5.0" } }
    );

    const $ = cheerio.load(data);
    const title = $("h1").first().text().trim() || "No title found";
    const content = $("#ctl00_PlaceHolderMain").text().trim() || "No content found";

    res.status(200).json({ success: true, title, content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
}
