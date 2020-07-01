"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@testing-library/react", "../LoginBox.stories", "react-dom/test-utils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@testing-library/react"), require("../LoginBox.stories"), require("react-dom/test-utils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.LoginBox, global.testUtils);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _LoginBox, _testUtils) {
  "use strict";

  // import React from 'react';
  // import { generateImage } from 'jsdom-screenshot';
  // import LoginBox from '../src/components/LoginBox/LoginBox';
  // This test reuses Component (with mocked data) in .stories.tsx file.
  // May need to mock APIs here also.
  describe('LoginBox', () => {
    it('render', async () => {
      const {
        container
      } = (0, _react.render)((0, _LoginBox.fullWidth)());
      expect(container.innerHTML).toMatch(/placeholder=\"Email\"/);
      expect(container).toMatchSnapshot(); // (expect(await generateImage()) as any).toMatchImageSnapshot(); // TODO: find a way to inject CSS to puppeteer
    });
    it('click Submit - validation should fail', async () => {
      const {
        container,
        getByTestId
      } = (0, _react.render)((0, _LoginBox.fullWidth)());
      expect(container.innerHTML).toMatch(/placeholder=\"Email\"/);
      (0, _testUtils.act)(() => {
        _react.fireEvent.click(getByTestId('authui-submit'));
      });
      await (0, _react.waitFor)(() => getByTestId('authui-error'));
      expect(container).toMatchSnapshot(); // (expect(await generateImage()) as any).toMatchImageSnapshot();
    });
  });
});
//# sourceMappingURL=LoginBox.spec.js.map