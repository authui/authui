import * as React from 'react';
import styled from 'styled-components/native';
import tailwind from 'tailwind-rn';
import { Text, View, Button, TouchableHighlight } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { UserIcon, PasswordIcon } from './LoginBoxUtils';
import { H3 } from 'es5-html-elements'

import { request } from 'graphql-request'
import { decode } from 'jsonwebtoken'

const API_BASE = 'https://authui-api.herokuapp.com/'

const Container = styled.View`
  padding: 10px;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: inherit;
  }
`;
const Title = styled(H3)`
  font-size: 22px;
  margin-bottom: 10px;
`;
const TouchableText = (props: any) => (
  <TouchableHighlight {...props}>
    <Text style={{ color: 'darkblue' }}>{props.children}</Text>
  </TouchableHighlight>
);
const FormBox = styled.View`
  padding: 10px;
`;
const TextField = styled.TextInput`
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 6px;
  padding-left: 35px;
  margin: 10px 0;
`;
const UserIconBox = styled.View`
  position: absolute;
  left: 15px;
  top: 26px;
`;
const PasswordIconBox = styled.View`
  position: absolute;
  left: 15px;
  top: 76px;
`;
enum ModeType {
  SignUp = 'Sign Up',
  Login = 'Login'
}
enum IdFieldType {
  Username = 'Username',
  Email = 'Email'
}
const idField = IdFieldType.Email;

export default () => {
  const [errorText, setErrorText] = React.useState('');
  const [mode, setMode] = React.useState(ModeType.SignUp);
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = async (formData: any) => {
    const { userId, password } = formData
    console.log('formData', formData);

    if (mode === ModeType.Login) {
      const query = `mutation {
        login(email: "${userId}", password: "${password}") {
          token
        }
      }`
      try {
        const { login } = await request(API_BASE, query)
        setErrorText('');
        const obj: any = decode(login.token)
        if (obj && obj.userId) {
          alert(`Log in successfully! UserId: ${obj.userId}`)
        }
      } catch (e) {
        const err = `${e}`.indexOf('Invalid') >= 0 ? `Invalid ${idField} or Password.` : 'Unknown error.'
        setErrorText(`Failed to login. ${err}`)
      }
    } else if (mode === ModeType.SignUp) {
      const query = `mutation {
        signup(accountId: "MyProduct", name: "Full Name", email: "${userId}", password: "${password}") {
          token
        }
      }`
      try {
        const { signup } = await request(API_BASE, query)
        setErrorText('');
        const obj: any = decode(signup.token)
        if (obj && obj.userId) {
          alert(`Thank you for registering! UserId: ${obj.userId}`)
        }
      } catch (e) {
        const err = `${e}`.indexOf('Unique constraint failed') >= 0 ? 'User already existed.' : 'Unknown error.'
        setErrorText(`Failed to sign up. ` + err)
      }
    }
  }

  let errorMsg = '';
  if (errors.userId || errors.password) {
    errorMsg = `${idField} and Password are required.`
  }
  return (
    <Container>
      <Title style={tailwind('')}>{mode}</Title>
      {mode === ModeType.SignUp ? (
        <Text>
          Already a user?{' '}
          <TouchableText onPress={() => setMode(ModeType.Login)}>
            Login
          </TouchableText>
        </Text>
      ) : (
        <Text>
          New user?{' '}
          <TouchableText onPress={() => setMode(ModeType.SignUp)}>
            Sign Up
          </TouchableText>
        </Text>
      )}
      <FormBox>
        <UserIconBox>
          <UserIcon />
        </UserIconBox>
        <Controller
          as={(props: any) => <TextField placeholder={idField} testID="userId" {...props} />}
          control={control}
          name="userId"
          onChange={args => args[0].nativeEvent.text}
          rules={{ required: true }}
          defaultValue=""
        />

        <PasswordIconBox>
          <PasswordIcon />
        </PasswordIconBox>
        <Controller
          as={(props: any) => (
            <TextField
              placeholder="Password"
              secureTextEntry={true}
              testID="password"
              {...props}
            />
          )}
          control={control}
          name="password"
          onChange={args => args[0].nativeEvent.text}
          rules={{ required: true }}
          defaultValue=""
        />
        <View style={tailwind('flex flex-row items-center justify-between')}>
          <View style={tailwind('bg-teal-200')}>
            <Button
              testID="submitBtn"
              title={mode === ModeType.SignUp ? 'Sign Up' : 'Log In'}
              onPress={handleSubmit(onSubmit)}
            />
          </View>
          {/* {mode === ModeType.Login && (
            <TouchableText onPress={() => {}}>
              Forgot Password?
            </TouchableText>
          )} */}
        </View>
      </FormBox>

      {errorText || errorMsg ? (
        <Text style={tailwind('text-red-600')}>{errorText || errorMsg}</Text>
      ) : (
        <Text>&nbsp;</Text>
      )}
    </Container>
  );
};
