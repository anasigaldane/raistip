import { chromium } from "playwright";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  const url = "https://ispits.sante.gov.ma/pages/DetailActualites_tous.aspx?IDActu=00";

  try {
    // Launch browser
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    // Optional: set user-agent
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36"
    );

    // Navigate to page
    await page.goto(url, { waitUntil: "domcontentloaded" });

    // Get HTML content
    const html = await page.content();
    await browser.close();

    // Load HTML into Cheerio
    const $ = cheerio.load(html);

    // Extract title
    const title = $("h1").first().text().trim() || "No title found";

    // Extract main content
    const content = $("#ctl00_PlaceHolderMain").text().trim() || "No content found";

    // Extract images (Actualites)
    const images = [];
    $("img").each((_, img) => {
      const src = $(img).attr("src");
      if (src && src.includes("Actualites")) {
        images.push(src.startsWith("http") ? src : `https://ispits.sante.gov.ma${src}`);
      }
    });

    // Return JSON directly
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
