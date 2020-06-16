import * as React from 'react';
import LoginBox from './LoginBox';

export default {
  title: 'Components|LoginBox',
  component: LoginBox
};

export const doc = () => (
  <div>
    <p>Docs:</p>
    <p>- Link to Designs, Wiki, Playground, etc.</p>
  </div>
);

export const fullWidth = () => (
  <div>
    <p>Fullscreen:</p>
    <div style={{ border: '1px solid #eee', width: '100vw' }}>
      <LoginBox />
    </div>
  </div>
);

export const mobileWidth = () => (
  <div>
    <p>Mobile 500px:</p>
    <div style={{ border: '1px solid #eee', width: '500px' }}>
      <LoginBox />
    </div>
  </div>
);
