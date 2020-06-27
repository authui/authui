import * as React from 'react';
import { TouchableHighlightProps } from 'react-native';
export declare const API_BASE = "https://authui-api.herokuapp.com/";
export interface FormData {
    userId: string;
    password: string;
}
export interface JwtData {
    userId: string;
}
export declare enum ModeType {
    SignUp = "Sign Up",
    Login = "Login"
}
export declare enum IdFieldType {
    Username = "Username",
    Email = "Email"
}
export declare const idField = IdFieldType.Email;
export declare const Container: import("styled-components").StyledComponent<typeof import("react-native").View, import("styled-components").DefaultTheme, {}, never>;
export interface TouchableTextProps extends TouchableHighlightProps {
    children?: string | React.ReactElement;
}
export declare const TouchableText: (props: TouchableTextProps) => JSX.Element;
export declare const TextField: import("styled-components").StyledComponent<typeof import("react-native").TextInput, import("styled-components").DefaultTheme, {}, never>;
export declare const UserIconBox: import("styled-components").StyledComponent<typeof import("react-native").View, import("styled-components").DefaultTheme, {}, never>;
export declare const PasswordIconBox: import("styled-components").StyledComponent<typeof import("react-native").View, import("styled-components").DefaultTheme, {}, never>;
export declare const UserIcon: (props: any) => JSX.Element;
export declare const PasswordIcon: (props: any) => JSX.Element;
export declare const validateEmail: (email: string) => boolean;
export declare const onSubmit: (formData: FormData, mode: string, setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>, setErrorText: React.Dispatch<React.SetStateAction<string>>) => Promise<JwtData | null>;
