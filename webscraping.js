const puppeteer = require('puppeteer');

const webscraping = async (pageURL) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let dataObj = {};

  try {
  } catch (error) {}
  await page.goto(pageURL);

  const loadButton = '.ExLoadMore-btn';
  for (let i = 0; i < 30; i++) {
    await page.click(loadButton);
    await page.waitForTimeout(1500);
  }

  await browser.close();
};

module.exports = webscraping;
