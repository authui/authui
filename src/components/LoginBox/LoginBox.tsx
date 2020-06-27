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
  afterSubmit?: (jwtData: JwtData | null) => void
}
function LoginBox(props: Props) {
  const [errorText, setErrorText] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [mode, setMode] = React.useState(ModeType.SignUp);
  const { control, handleSubmit, errors } = useForm();

  return (
    <Container>
      <Text style={tailwind('text-2xl mb-3')}>{mode}</Text>
      {mode === ModeType.SignUp ? (
        <Text>
          Already a user? <TouchableText onPress={() => setMode(ModeType.Login)}>Login</TouchableText>
        </Text>
      ) : (
        <Text>
          New user? <TouchableText onPress={() => setMode(ModeType.SignUp)}>Sign Up</TouchableText>
        </Text>
      )}
      <View style={tailwind('mt-2 mb-2')}>
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
        <View style={tailwind('flex flex-row items-center justify-between mt-2')}>
          <View style={{ width: '40%' }}>
            <Button
              testID="submitBtn"
              title={isSubmitting ? 'Submitting...' : mode === ModeType.SignUp ? 'Sign Up' : 'Log In'}
              onPress={handleSubmit(async (formData: any) => {
                const jwtData: JwtData | null = await onSubmit(
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

      <Text style={tailwind('text-red-600 mt-2')}>{errorText || ' '}</Text>
    </Container>
  );
};

export default LoginBox;