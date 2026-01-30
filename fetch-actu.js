import fs from "fs";
import axios from "axios";
import cheerio from "cheerio";

async function fetchActu() {
  try {
    const url = "https://ispits.sante.gov.ma/pages/DetailActualites_tous.aspx?IDActu=00";

    const response = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
      },
      timeout: 15000
    });

    const html = response.data;
    const $ = cheerio.load(html);

    // تعديل محدد حسب هيكل الصفحة
    const title = $("h1").first().text().trim() || "No title found";
    const content = $("#ctl00_PlaceHolderMain").text().trim() || "No content found";

    const images = [];
    $("img").each((_, img) => {
      const src = $(img).attr("src");
      if (src && src.includes("Actualites")) {
        images.push(src.startsWith("http") ? src : `https://ispits.sante.gov.ma${src}`);
      }
    });

    const data = { success: true, title, content, images };

    // حفظ البيانات في ملف JSON
    if (!fs.existsSync("data")) fs.mkdirSync("data");
    fs.writeFileSync("./data/actu.json", JSON.stringify(data, null, 2));
    console.log("✅ Data saved to data/actu.json");

  } catch (error) {
    console.error("❌ Error fetching actu:", error.message);
  }
}

fetchActu();
