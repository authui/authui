import * as React from 'react';
import tailwind from 'tailwind-rn';
import { Text, View, Button } from 'react-native-web';
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
  JwtData,
  onSubmitInterface
} from './LoginBoxUtils';
// import { H3 } from 'es5-html-elements';

export interface afterSubmitInterface {
  error?: string
  success?: string
}
interface Props {
  accountId: string
  afterSubmit?: (jwtData: JwtData | null) => afterSubmitInterface
  style?: object
  defaultMode?: 'Log In' | 'Sign Up' | 'Reset Password'
}
function LoginBox(props: Props) {
  const [errorText, setErrorText] = React.useState('');
  const [successText, setSuccessText] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [mode, setMode] = React.useState(props.defaultMode ?? ModeType.Login);
  const { control, setValue, handleSubmit, errors } = useForm();

  return (
    <Container testID="authui-container" style={props.style}>
      <Text style={tailwind('text-2xl mb-3')}>{mode}</Text>
      {mode === ModeType.SignUp ? (
        <Text>
          Already a user? <TouchableText testID="authui-login-link" onPress={() => setMode(ModeType.Login)}>Log In</TouchableText>
        </Text>
      ) : (
        <Text>
          New user? <TouchableText testID="authui-signup-link" onPress={() => setMode(ModeType.SignUp)}>Sign Up</TouchableText>
        </Text>
      )}
      <View style={tailwind('mt-2 mb-2')} testID="authui-form">
        <UserIconBox>
          <UserIcon />
        </UserIconBox>
        <Controller
          as={(props: any) => <TextField placeholder={idField} testID="userId" {...props} />}
          control={control}
          name="userId"
          onChange={args => args[0].nativeEvent.text}
          defaultValue=""
        />
        <LightTextLink accessible={false} testID="clear-user-id" style={{ position: 'absolute', top: 16, right: 10 }} onPress={() => setValue([{ userId: '' }])}>⨉</LightTextLink>

        {mode !== ModeType.Forgot && (
          <>
            <PasswordIconBox>
              <PasswordIcon />
            </PasswordIconBox>
            <Controller
              as={(props: any) => <TextField placeholder="Password" secureTextEntry={true} testID="password" {...props} />}
              control={control}
              name="password"
              onChange={args => args[0].nativeEvent.text}
              defaultValue=""
            />
            <LightTextLink accessible={false} testID="clear-password" style={{ position: 'absolute', top: 66, right: 10 }} onPress={() => setValue([{ password: '' }])}>⨉</LightTextLink>
          </>
        )}

        <View style={tailwind('flex flex-row items-center justify-between mt-2')} testID="authui-footer">
          <View style={{ width: '60%' }} testID="authui-footer-buttons">
            <Button
              testID="authui-submit"
              title={isSubmitting ? 'Submitting...' : mode}
              onPress={handleSubmit(async (formData: any) => {
                const submitRet: onSubmitInterface | null = await onSubmit(
                  props.accountId,
                  formData as FormData,
                  mode,
                  setIsSubmitting
                );
                if (submitRet) {
                  if (submitRet.error) {
                    setErrorText(submitRet.error)
                  } else if (submitRet.jwtData && props.afterSubmit) {
                    const retObj: afterSubmitInterface = await props.afterSubmit(submitRet.jwtData);
                    if (retObj) {
                      setErrorText(retObj.error || '')
                      setSuccessText(retObj.success || '')
                    }
                  }
                }
              })}
            />
          </View>
          <View testID="authui-forgot">
            {mode === ModeType.Login && (
              <TouchableText onPress={() => setMode(ModeType.Forgot)}>
                Forgot Password?
              </TouchableText>
            )}
          </View>
        </View>
      </View>

      {errorText ? (
        <Text testID="authui-error" style={tailwind('text-red-600 mt-2')}>{errorText}</Text>
      ) : (
        successText ? (
          <Text testID="authui-success" style={tailwind('text-green-600 mt-2')}>{successText}</Text>
        ) : (
          <Text>{' '}</Text>
        )
      )}
    </Container>
  );
};

export default LoginBox;