// declare in package.json: "types": "main.d.ts"

declare module 'jsdom-screenshot' {
  function generateImage(): any;
  function toMatchImageSnapshot(): any;
}
