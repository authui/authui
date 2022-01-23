"use strict";

var _e2eUtil = require("../../../utils/e2eUtil");

describe('AuthUI-Login-Component', () => {
  let browser;
  beforeAll(async () => browser = await (0, _e2eUtil.setupBrowser)(__dirname));
  it('Validation', async () => {
    let thisTest,
        element,
        text,
        page = await (0, _e2eUtil.newPage)(browser);
    expect().getTestData(testData => thisTest = testData);
    await page.goto('http://localhost:8080/iframe.html?id=components-loginbox--full-width', {
      waitUntil: 'networkidle0'
    });
    await (await page.$x(`//div[@data-testid="authui-submit"]`))[0].click();
    await (0, _e2eUtil.expectText)(page, `//div[@data-testid='authui-error']`, `Email and Password are required.`);
    await (await page.$x(`//input[@data-testid='userId']`))[0].click();
    await (await page.$x(`//input[@data-testid='userId']`))[0].type(`a@a.a`);
    await (await page.$x(`//input[@data-testid='password']`))[0].type(`a`);
    await (await page.$x(`//div[@data-testid='authui-submit']`))[0].click();
    await (0, _e2eUtil.expectText)(page, `//div[@data-testid='authui-error']`, `Invalid email address.`);
    await (await page.$x(`//div[@data-testid='authui-login-link']`))[0].click();
    await (await page.$x(`//div[@data-testid='clear-user-id']`))[0].click();
    await (await page.$x(`//input[@data-testid='userId']`))[0].click();
    await (await page.$x(`//input[@data-testid='userId']`))[0].type(`demo1@gmail.com`);
    await (await page.$x(`//input[@data-testid='password']`))[0].click();
    await (await page.$x(`//input[@data-testid='password']`))[0].type(`demo111`);
    await (await page.$x(`//div[@data-testid='authui-submit']`))[0].click();
    await (0, _e2eUtil.takeScreenshot)(browser, page, `${thisTest.name}.png`);
  });
  it('Forgot Password', async () => {
    let thisTest,
        element,
        text,
        page = await (0, _e2eUtil.newPage)(browser);
    expect().getTestData(testData => thisTest = testData);
    await page.goto('http://localhost:8080/iframe.html?id=components-loginbox--full-width', {
      waitUntil: 'networkidle0'
    });
    await (await page.$x(`//div[@data-testid='authui-login-link']`))[0].click();
    await (await page.$x(`//div[@data-testid='authui-forgot']/div[1]`))[0].click();
    await (await page.$x(`//div[@data-testid='authui-submit']`))[0].click();
    await (await page.$x(`//*[@data-testid="userId"]`))[0].click();
    await (await page.$x(`//*[@data-testid="userId"]`))[0].type(`a@a.a`);
    await (await page.$x(`//div[@data-testid='authui-submit']`))[0].click();
    await (0, _e2eUtil.takeScreenshot)(browser, page, `${thisTest.name}.png`);
  });
  afterAll(async () => {
    await browser.close();
  });
});
//# sourceMappingURL=LoginBox.e2e.js.map