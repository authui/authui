import * as React from 'react';
import LoginBox from './LoginBox';
import { JwtData } from './LoginBoxUtils';

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

const afterSubmit = (jwtData: JwtData | null) => {
  if (jwtData && jwtData.email) {
    console.log("jwtData: " + JSON.stringify(jwtData));
  }
}

export const fullWidth = () => (
  <div style={{ backgroundColor: '#eee' }}>
    <p>Fullscreen:</p>
    <div style={{ width: '100vw' }}>
      <LoginBox accountId="MyProductName" afterSubmit={afterSubmit} />
    </div>
    <p>Fullscreen End</p>
  </div>
);

export const mobileWidth = () => (
  <div style={{ backgroundColor: '#eee' }}>
    <p>Mobile 375px:</p>
    <div style={{ width: '375px' }}>
      <LoginBox accountId="MyProductName" afterSubmit={afterSubmit} style={{ margin: 10 }} />
    </div>
    <p>Mobile End</p>
  </div>
);
