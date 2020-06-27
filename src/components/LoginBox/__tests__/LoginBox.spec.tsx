// import React from 'react';
import { render } from '@testing-library/react';
// import { generateImage } from 'jsdom-screenshot';

// import LoginBox from '../src/components/LoginBox/LoginBox';
import { fullWidth } from '../LoginBox.stories';

// This test reuses Component (with mocked data) in .stories.tsx file.
// May need to mock APIs here also.

describe('MyComp - jest test', () => {
  it('works', async () => {
    const { container } = render(fullWidth());
    expect(container.innerHTML).toMatch(/placeholder=\"Email\"/);
    // fireEvent.click(getByTestId('submitBtn'));

    expect(container).toMatchSnapshot();
    // expect(await generateImage()).toMatchImageSnapshot(); // TODO: find a way to inject CSS to puppeteer
  });
});
