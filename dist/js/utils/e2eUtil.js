"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupBrowser = setupBrowser;
exports.newPage = newPage;
exports.takeScreenshot = takeScreenshot;

var _puppeteer = _interopRequireDefault(require("puppeteer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const path = require('path'); // eslint is looking for `puppeteer` at root level package.json
// eslint-disable-next-line import/no-unresolved
// const puppeteer = require('puppeteer');


async function setupBrowser(dirpath) {
  jest.setTimeout(30000);
  const args = ['--no-sandbox', '--disable-setuid-sandbox', '--start-maximized', '--lang=he-IL', '--font-render-hinting=medium'];
  const browser = await _puppeteer.default.launch({
    headless: true,
    args
  });
  browser.screenshotsPath = path.resolve(dirpath, './__e2e_snapshots__');
  return browser; // console.log('--- browser', browser);
}

async function newPage(browser, opt = {
  width: 1024,
  height: 800
}) {
  const page = await browser.newPage();
  await page.setViewport(opt);
  return page;
}

async function takeScreenshot(browser, page, filename) {
  const {
    screenshotsPath
  } = browser;
  return await page.screenshot({
    path: `${screenshotsPath}/${filename}`
  });
}
//# sourceMappingURL=e2eUtil.js.map