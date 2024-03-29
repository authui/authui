/// <reference types="react" />
import { JwtData } from './LoginBoxUtils';
export interface afterSubmitInterface {
    error?: string;
    success?: string;
}
interface Props {
    accountId: string;
    afterSubmit?: (jwtData: JwtData | null) => afterSubmitInterface;
    style?: object;
    defaultMode?: 'Log In' | 'Sign Up' | 'Reset Password';
}
declare function LoginBox(props: Props): JSX.Element;
export default LoginBox;
