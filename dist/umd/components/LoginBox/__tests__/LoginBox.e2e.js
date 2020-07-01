"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["../../../utils/e2eUtil"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("../../../utils/e2eUtil"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.e2eUtil);
    global.undefined = mod.exports;
  }
})(void 0, function (_e2eUtil) {
  "use strict";

  describe('LoginBox', () => {
    let browser;
    beforeAll(async () => browser = await (0, _e2eUtil.setupBrowser)(__dirname));
    it('Validation', async () => {
      let thisTest,
          element,
          page = await (0, _e2eUtil.newPage)(browser);
      expect().getTestData(testData => thisTest = testData);
      await page.goto('http://127.0.0.1:8080/iframe.html?id=components-loginbox--mobile-width', {
        waitUntil: 'networkidle0'
      });
      await (await page.$x(`//div[@id='authui-footer']/div[1]/div[1]/div[1]`))[0].click();
      await (await page.$x(`//input[@id='userId']`))[0].click();
      await (await page.$x(`//input[@id='userId']`))[0].type(`a@a.com`);
      await (await page.$x(`//input[@id='password']`))[0].type(`a`);
      await (await page.$x(`//div[@id='authui-footer']/div[1]/div[1]/div[1]`))[0].click();
      await (await page.$x(`//div[@id='authui-container']/div[2]/div[1]/span[1]`))[0].click();
      await (await page.$x(`//div[@id='authui-form']/div[2]/div[1]`))[0].click();
      await (await page.$x(`//input[@id='userId']`))[0].click();
      await (await page.$x(`//input[@id='userId']`))[0].type(`demo1@gmail.com`);
      await (await page.$x(`//input[@id='password']`))[0].click();
      await (await page.$x(`//input[@id='password']`))[0].type(`demo111`);
      await (await page.$x(`//div[@id='authui-footer']/div[1]/div[1]/div[1]`))[0].click();
      await (0, _e2eUtil.takeScreenshot)(browser, page, `${thisTest.name}.png`);
    });
    afterAll(async () => {
      await browser.close();
    });
  });
});
//# sourceMappingURL=LoginBox.e2e.js.map