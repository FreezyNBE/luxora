export enum SignUpCode {
    RegistrationComplete = "registration_complete",
}

export const signUpMap: Record<SignUpCode, string> = {
    [SignUpCode.RegistrationComplete]: "Registration process completed. You can now sign in with your email and password.",
};
