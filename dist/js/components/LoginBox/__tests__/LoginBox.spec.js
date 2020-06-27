"use strict";

var _react = require("@testing-library/react");

var _LoginBox = require("../LoginBox.stories");

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
//# sourceMappingURL=LoginBox.spec.js.map