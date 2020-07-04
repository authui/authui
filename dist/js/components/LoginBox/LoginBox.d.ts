/// <reference types="react" />
import { JwtData } from './LoginBoxUtils';
interface Props {
    accountId: string;
    afterSubmit?: (jwtData: JwtData | null) => void;
    style?: object;
}
declare function LoginBox(props: Props): JSX.Element;
export default LoginBox;
