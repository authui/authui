import { setupBrowser, newPage, takeScreenshot } from '../../../utils/e2eUtil';

describe('LoginBox', () => {
  let browser;
  beforeAll(async () => (browser = await setupBrowser(__dirname)));

  it('Validation', async () => {
    let thisTest, element, page = await newPage(browser);
    expect().getTestData(testData => thisTest = testData);

    await page.goto(`http://127.0.0.1:8080/iframe.html?id=components-loginbox--mobile-width`, {
      waitUntil: 'networkidle0'
    });

    await (await page.$x(`//div[@id='authui-footer']/div/div/div`))[0].click();

    await (await page.$x(`//*[@id="userId"]`))[0].click();

    element = await page.$x(`//*[@id="userId"]`);
    await element[0].type(`a@a.a`);

    element = await page.$x(`//*[@id="password"]`);
    await element[0].type(`a`);

    await (await page.$x(`//div[@id='authui-footer']/div/div/div`))[0].click();

    await (await page.$x(`//div[@id='authui-container']/div[2]/div/span`))[0].click();

    await (await page.$x(`//div[@id='authui-form']/div[2]/div`))[0].click();

    await (await page.$x(`//*[@id="userId"]`))[0].click();

    element = await page.$x(`//*[@id="userId"]`);
    await element[0].type(`demo1@gmail.com`);

    element = await page.$x(`//*[@id="password"]`);
    await element[0].type(`demo111`);

    await (await page.$x(`//div[@id='authui-footer']/div/div/div`))[0].click();

    await takeScreenshot(browser, page, `${thisTest.name}.png`);
  });

  afterAll(async () => {
    await browser.close();
  });
});
