"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@testing-library/react", "../LoginBox.stories"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@testing-library/react"), require("../LoginBox.stories"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.LoginBox);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _LoginBox) {
  "use strict";

  // import React from 'react';
  // import { generateImage } from 'jsdom-screenshot';
  // import LoginBox from '../src/components/LoginBox/LoginBox';
  // This test reuses Component (with mocked data) in .stories.tsx file.
  // May need to mock APIs here also.
  describe('MyComp - jest test', () => {
    it('works', async () => {
      const {
        container
      } = (0, _react.render)((0, _LoginBox.fullWidth)());
      expect(container.innerHTML).toMatch(/placeholder=\"Email\"/); // fireEvent.click(getByTestId('submitBtn'));

      expect(container).toMatchSnapshot(); // expect(await generateImage()).toMatchImageSnapshot(); // TODO: find a way to inject CSS to puppeteer
    });
  });
});
//# sourceMappingURL=LoginBox.spec.js.map