/// <reference types="react" />
import { JwtData } from './LoginBoxUtils';
interface Props {
    accountId: string;
    afterSubmit?: (jwtData: JwtData | null) => void;
}
declare function LoginBox(props: Props): JSX.Element;
export default LoginBox;
