/// <reference types="react" />
import { JwtData } from './LoginBoxUtils';
interface Props {
    afterSubmit?: (jwtData: JwtData | null) => void;
}
declare function LoginBox(props: Props): JSX.Element;
export default LoginBox;
