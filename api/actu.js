import * as cheerio from 'cheerio';

/**
 * Serverless function to fetch the news page and extract title, content, and images
 */
export default async function handler(req, res) {
  try {
    const url = "https://ispits.sante.gov.ma/pages/DetailActualites_tous.aspx?IDActu=00";

    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Accept": "text/html",
        "Accept-Language": "fr-FR,fr;q=0.9"
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        error: `Failed to fetch page. Status: ${response.status}`
      });
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // استخراج العنوان
    const title = $("h1").first().text().trim() || "No title found";

    // استخراج النص الرئيسي
    const content = $("#ctl00_PlaceHolderMain").text().trim() || "No content found";

    // استخراج الصور
    const images = [];
    $("img").each((_, img) => {
      const src = $(img).attr("src");
      if (src && src.includes("Actualites")) {
        images.push(src.startsWith("http") ? src : `https://ispits.sante.gov.ma${src}`);
      }
    });

    // إعادة JSON منظم
    res.status(200).json({
      success: true,
      title,
      content,
      images
    });

  } catch (error) {
    console.error("Error fetching actu:", error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
