import cheerio from "cheerio";

export default async function handler(req, res) {
  try {
    const url =
      "https://ispits.sante.gov.ma/pages/DetailActualites_tous.aspx?IDActu=00";

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "Accept": "text/html",
        "Accept-Language": "fr-FR,fr;q=0.9"
      }
    });

    if (!response.ok) {
      console.error("FETCH ERROR:", response.status);
      return res.status(500).json({ error: "Fetch failed" });
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const title = $("h1").first().text().trim();

    const content = $("#ctl00_PlaceHolderMain")
      .text()
      .replace(/\s+/g, " ")
      .trim();

    const images = [];
    $("#ctl00_PlaceHolderMain img").each((_, img) => {
      let src = $(img).attr("src");
      if (src) {
        if (!src.startsWith("http")) {
          src = "https://ispits.sante.gov.ma" + src;
        }
        images.push(src);
      }
    });

    return res.status(200).json({
      success: true,
      title,
      content,
      images
    });

  } catch (err) {
    console.error("SERVER ERROR:", err);
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
}
