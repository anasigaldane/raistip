import cheerio from "cheerio";

export default async function handler(req, res) {
  try {
    const url =
      "https://ispits.sante.gov.ma/pages/DetailActualites_tous.aspx?IDActu=00";

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Accept": "text/html",
        "Accept-Language": "fr-FR,fr;q=0.9"
      }
    });

    if (!response.ok) {
      throw new Error("Failed to fetch page");
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    /* ===== TITLE ===== */
    const title =
      $("h1").first().text().trim() ||
      $("title").text().trim();

    /* ===== MAIN CONTENT ===== */
    const content = $("#ctl00_PlaceHolderMain")
      .text()
      .replace(/\s+/g, " ")
      .trim();

    /* ===== IMAGES ===== */
    const images = [];
    $("#ctl00_PlaceHolderMain img").each((_, img) => {
      let src = $(img).attr("src");
      if (src) {
        if (!src.startsWith("http")) {
          src = `https://ispits.sante.gov.ma${src}`;
        }
        images.push(src);
      }
    });

    res.status(200).json({
      success: true,
      title,
      content,
      images
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
