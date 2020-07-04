# Authui-UI

Article: [How to add Authentication to your React app using AuthUI](https://dev.to/ngduc/how-to-add-authentication-to-your-react-app-3c9c)

Login Components

- Cross-platform: react-native, react-native-web, styled-components, tailwind-rn.
- Connect to [AuthUI APIs](https://github.com/authui/authui-server) for Sign up, Log in, Forgot password, etc.
- Live Example: [import & use Login Component](https://c94e3ef5-cd34-4fe1-8a23-2f490958c461.ws-us02.gitpod.io/#/workspace/gitpod-demo)
- Live Example: [use Login Component with source code](https://codesandbox.io/s/authui-example-8jswg?module=/src/LoginBox/LoginBox.tsx) (react-native-web)

<img src="https://raw.githack.com/authui/authui-server/master/tools/diagram.png" />

<img src="https://raw.githack.com/authui/authui/master/docs/login-1.png" height="200" />

### Motivations

When starting a new project, it takes some effort to implement Login / Sign-up screens. Often times we have to repeat the same implementation again and again.

    Authentication should be simple to remove frictions to build a MVP (Most Viable Product) or get users started.
    AuthUI takes care of user login & sign up logic.
    Save dev time to focus on main ideas.

### Features

- Sign up; Email user to verify email address.
- Login.
- Forgot Password: generate a new random password and email to user.

## Development

Storybook:
```
npm install
npm run storybook
```

Open http://localhost:9009

### Commands

```
npm start
npm run build

npm run build-storybook
npm run serve-storybook
npm test
```

### Login Component Templates

- [Login Component Templates - TailwindComponents](https://tailwindcomponents.com/search?query=login)
- [Login Component Templates - TailwindUI templates](https://tailwindcomponents.com/search?query=login)

<img src="https://raw.githack.com/authui/authui-server/master/tools/templates.png" height="300" />

### Storybook

<img src="https://raw.githack.com/authui/authui/master/docs/storybook-1.png" height="300" />

<img src="https://raw.githack.com/authui/authui/master/docs/authui-demo.gif" height="300" />

### Contributions

Please open a pull request. Any contribution is welcome!
