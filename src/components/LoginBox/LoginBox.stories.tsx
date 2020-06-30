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
  <div>
    <p>Fullscreen:</p>
    <div style={{ width: '100vw' }}>
      <LoginBox accountId="MyProductName" afterSubmit={afterSubmit} />
    </div>
  </div>
);

export const mobileWidth = () => (
  <div>
    <p>Mobile 500px:</p>
    <div style={{ width: '500px' }}>
      <LoginBox accountId="MyProductName" afterSubmit={afterSubmit} />
    </div>
  </div>
);
