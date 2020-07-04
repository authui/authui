import puppeteer from 'puppeteer';
const path = require('path');

// eslint is looking for `puppeteer` at root level package.json
// eslint-disable-next-line import/no-unresolved
// const puppeteer = require('puppeteer');

export async function setupBrowser(dirpath) {
  jest.setTimeout(30000);
  const args = [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--start-maximized',
    '--lang=he-IL',
    '--font-render-hinting=medium'
  ];
  const browser = await puppeteer.launch({ headless: true, args });
  browser.screenshotsPath = path.resolve(dirpath, './__e2e_snapshots__');
  return browser;
  // console.log('--- browser', browser);
}

export async function newPage(browser, opt = { width: 1024, height: 800 }) {
  const page = await browser.newPage();
  await page.setViewport(opt);
  return page;
}

export async function takeScreenshot(browser, page, filename) {
  const { screenshotsPath } = browser;
  return await page.screenshot({ path: `${screenshotsPath}/${filename}` });
}

export async function expectText(page, xpath, value) {
  const xpathEl = (await page.$x(xpath))[0];
  const txt = await page.evaluate(el => el.textContent, xpathEl);
  expect(txt).toEqual(value);
}