// import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
// import { generateImage } from 'jsdom-screenshot';

// import LoginBox from '../src/components/LoginBox/LoginBox';
import { fullWidth } from '../LoginBox.stories';
import { act } from 'react-dom/test-utils';

// This test reuses Component (with mocked data) in .stories.tsx file.
// May need to mock APIs here also.

describe('LoginBox', () => {
  it('render', async () => {
    const { container } = render(fullWidth());
    expect(container.innerHTML).toMatch(/placeholder=\"Email\"/);
    expect(container).toMatchSnapshot();
    // (expect(await generateImage()) as any).toMatchImageSnapshot(); // TODO: find a way to inject CSS to puppeteer
  });

  it('click Submit - validation should fail', async () => {
    const { container, getByTestId } = render(fullWidth());
    expect(container.innerHTML).toMatch(/placeholder=\"Email\"/);
    act(() => {
      fireEvent.click(getByTestId('authui-submit'));
    })
    await waitFor(() => getByTestId('authui-error'));

    expect(container).toMatchSnapshot();
    // (expect(await generateImage()) as any).toMatchImageSnapshot();
  });
});
