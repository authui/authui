
import { setupBrowser, newPage, takeScreenshot, expectText } from '../../../utils/e2eUtil';

describe('AuthUI-Login-Component', () => {
  let browser;
  beforeAll(async () => (browser = await setupBrowser(__dirname)));

  it('Validation', async () => {
    let thisTest, element, text, page = await newPage(browser);
    expect().getTestData(testData => thisTest = testData);

    await page.goto('http://localhost:8080/iframe.html?id=components-loginbox--full-width', {
      waitUntil: 'networkidle0'
    });

    await (await page.$x(`//div[@id='authui-footer']/div[1]/div[1]/div[1]`))[0].click();

    await expectText(page, `//div[@id='authui-container']/div[4]`, `Email and Password are required.`);

    await (await page.$x(`//input[@id='userId']`))[0].click();

    await (await page.$x(`//input[@id='userId']`))[0].type(`a@a.a`);

    await (await page.$x(`//input[@id='password']`))[0].type(`a`);

    await (await page.$x(`//div[@id='authui-footer']/div[1]/div[1]/div[1]`))[0].click();

    await expectText(page, `//div[@id='authui-container']/div[4]`, `Invalid email address.`);

    await (await page.$x(`//div[@id='authui-container']/div[2]/div[1]/span[1]`))[0].click();

    await (await page.$x(`//div[@id='authui-form']/div[2]/div[1]`))[0].click();

    await (await page.$x(`//input[@id='userId']`))[0].click();

    await (await page.$x(`//input[@id='userId']`))[0].type(`demo1@gmail.com`);

    await (await page.$x(`//input[@id='password']`))[0].click();

    await (await page.$x(`//input[@id='password']`))[0].type(`demo111`);

    await (await page.$x(`//div[@id='authui-footer']/div[1]/div[1]/div[1]`))[0].click();


    await takeScreenshot(browser, page, `${thisTest.name}.png`);
  });

  it('Forgot Password', async () => {
    let thisTest, element, text, page = await newPage(browser);
    expect().getTestData(testData => thisTest = testData);

    await page.goto('http://localhost:8080/iframe.html?id=components-loginbox--full-width', {
      waitUntil: 'networkidle0'
    });

    await (await page.$x(`//div[@id='authui-container']/div[2]/div[1]/span[1]`))[0].click();

    await (await page.$x(`//div[@id='authui-forgot']/div[1]/div[1]`))[0].click();

    await (await page.$x(`//div[@id='authui-footer-buttons']/div[1]/div[1]`))[0].click();

    await expectText(page, `//div[@id='authui-container']/div[4]`, `Email is required.`);

    await (await page.$x(`//input[@id='userId']`))[0].click();

    await (await page.$x(`//input[@id='userId']`))[0].type(`a@a.a`);

    await (await page.$x(`//div[@id='authui-footer-buttons']/div[1]/div[1]`))[0].click();

    await expectText(page, `//div[@id='authui-container']/div[4]`, `Invalid email address.`);


    await takeScreenshot(browser, page, `${thisTest.name}.png`);
  });

  //__TEST_CONTENT__

  afterAll(async () => {
    await browser.close();
  });
});
