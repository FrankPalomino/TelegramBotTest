const puppeteer = require("puppeteer");
const { TELEGRAM_TOKEN, PW, USER } = require("./constants");

let getHabitatgeMessege = async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const URL =
      "https://seuelectronica.ajuntament.barcelona.cat/APPS/ofhreghabitatge/solicitudes/Main.do";

    await page.goto(URL, { waitUntil: "networkidle2" });

    await page.type("#codigo", USER);
    await page.type("#clave", PW);

    await Promise.all([
      page.click("#aceptar"),
      page.waitForNavigation({ waitUntil: "networkidle0" }),
    ]);

    const result = await page.evaluate(() => {
      return document
        .querySelectorAll(".flotarderecha")[0]
        .childNodes[1].firstChild?.textContent.toString();
    });

    await browser.close();

    return result;
  } catch (e) {
    console.log(e);
  }
};

const algo = async ()=>{
    const res = await getHabitatgeMessege();
    console.log(res);
    
}


