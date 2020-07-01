"use strict";

var _react = require("@testing-library/react");

var _LoginBox = require("../LoginBox.stories");

var _testUtils = require("react-dom/test-utils");

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
//# sourceMappingURL=LoginBox.spec.js.map