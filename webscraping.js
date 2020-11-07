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

  const exercises = await page.$$('.ExResult-row');
  const exerciseList = [];
  for (let exercise of exercises) {
    const name = await exercise
      .$eval('.ExHeading a', (el) => el.textContent.replace(/\s+/g, ' ').trim())
      .catch((err) => console.error('no name'));

    const targetMuscle = await exercise
      .$eval('.ExResult-muscleTargeted a', (el) =>
        el.textContent.replace(/\s+/g, ' ').trim()
      )
      .catch((err) => console.error('no target muscle'));

    const equipment = await exercise
      .$eval('.ExResult-equipmentType a', (el) =>
        el.textContent.replace(/\s+/g, ' ').trim()
      )
      .catch((err) => console.error('no equipment'));

    const average = await exercise
      .$eval('.ExRating-badge', (el) =>
        el.textContent.replace(/\s+/g, ' ').trim()
      )
      .catch((err) => console.error('no average'));

    const imageURL = await exercise
      .$eval('.ExResult-img', (el) => el.getAttribute('src'))
      .catch((err) => console.error('no imageURL'));

  }

  await browser.close();
  return dataObj;
};

module.exports = webscraping;
