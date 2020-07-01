import * as React from 'react';
import tailwind from 'tailwind-rn';
import { Text, View, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import {
  UserIcon,
  PasswordIcon,
  ModeType,
  Container,
  TouchableText,
  LightTextLink,
  UserIconBox,
  PasswordIconBox,
  TextField,
  onSubmit,
  idField,
  FormData,
  JwtData
} from './LoginBoxUtils';
// import { H3 } from 'es5-html-elements';

interface Props {
  accountId: string
  afterSubmit?: (jwtData: JwtData | null) => void
}
function LoginBox(props: Props) {
  const [errorText, setErrorText] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [mode, setMode] = React.useState(ModeType.SignUp);
  const { control, setValue, handleSubmit, errors } = useForm();

  return (
    <Container nativeID="authui-container">
      <Text style={tailwind('text-2xl mb-3')}>{mode}</Text>
      {mode === ModeType.SignUp ? (
        <Text>
          Already a user? <TouchableText onPress={() => setMode(ModeType.Login)}>Log In</TouchableText>
        </Text>
      ) : (
        <Text>
          New user? <TouchableText onPress={() => setMode(ModeType.SignUp)}>Sign Up</TouchableText>
        </Text>
      )}
      <View style={tailwind('mt-2 mb-2')} nativeID="authui-form">
        <UserIconBox>
          <UserIcon />
        </UserIconBox>
        <Controller
          as={(props: any) => <TextField placeholder={idField} nativeID="userId" {...props} />}
          control={control}
          name="userId"
          onChange={args => args[0].nativeEvent.text}
          defaultValue=""
        />
        <LightTextLink accessible={false} testID="clear-user-id" style={{ position: 'absolute', top: 16, right: 10 }} onPress={() => setValue([{ userId: '' }])}>⨉</LightTextLink>

        <PasswordIconBox>
          <PasswordIcon />
        </PasswordIconBox>
        <Controller
          as={(props: any) => <TextField placeholder="Password" secureTextEntry={true} nativeID="password" {...props} />}
          control={control}
          name="password"
          onChange={args => args[0].nativeEvent.text}
          defaultValue=""
        />
        <LightTextLink accessible={false} testID="clear-password" style={{ position: 'absolute', top: 66, right: 10 }} onPress={() => setValue([{ password: '' }])}>⨉</LightTextLink>

        <View style={tailwind('flex flex-row items-center justify-between mt-2')} nativeID="authui-footer">
          <View style={{ width: '40%' }}>
            <Button
              testID="authui-submit"
              title={isSubmitting ? 'Submitting...' : mode === ModeType.SignUp ? 'Sign Up' : 'Log In'}
              onPress={handleSubmit(async (formData: any) => {
                const jwtData: JwtData | null = await onSubmit(
                  props.accountId,
                  formData as FormData,
                  mode,
                  setIsSubmitting,
                  setErrorText
                );
                if (props.afterSubmit) {
                  props.afterSubmit(jwtData);
                }
              })}
            />
          </View>
          {/* {mode === ModeType.Login && (
            <TouchableText onPress={() => {}}>
              Forgot Password?
            </TouchableText>
          )} */}
        </View>
      </View>

      <Text testID="authui-error" style={tailwind('text-red-600 mt-2')}>{errorText || ' '}</Text>
    </Container>
  );
};

export default LoginBox;