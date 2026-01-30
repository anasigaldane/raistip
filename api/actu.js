import { chromium } from "playwright";

export default async function handler(req, res) {
  try {
    const url = "https://ispits.sante.gov.ma/pages/DetailActualites_tous.aspx?IDActu=00";

    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "domcontentloaded" });

    const html = await page.content();

    await browser.close();

    res.status(200).json({ success: true, html });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
