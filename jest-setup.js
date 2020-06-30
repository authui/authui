import 'babel-polyfill';

// eslint runs from root and only looks at root package.json
// eslint-disable-next-line import/no-unresolved
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

function getTestData(received, argument) {
  argument({ name: this.currentTestName });
  return { pass: true };
}
expect.extend({
  getTestData
});
