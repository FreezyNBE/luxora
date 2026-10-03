"use server";

import { auth } from "@/lib/auth";
import { SignUpCode } from "@/utils/_auth_signup";
import { validateEmail } from "@/utils/_functions";
import { MAX_NAME_LENGTH, MAX_PASSWORD_LENGTH, MIN_NAME_LENGTH, MIN_PASSWORD_LENGTH } from "@/utils/_new_account_fields";

type ResponseSignUpEmail = {
    success?: boolean;
    successCode?: SignUpCode;
    redirectUrl?: string;
    error?: string | string[];
};

type ResponseSignInEmail = {
    success?: string;
    error?: string;
    redirectUrl: string;
};

export async function actionSignUpEmail(formData: FormData): Promise<ResponseSignUpEmail> {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmedPassword = formData.get("confirm_password") as string;
    const agreements = formData.get("agreements") === "on";
    const errors: string[] = [];

    if (name.length < MIN_NAME_LENGTH || name.length > MAX_NAME_LENGTH) {
        errors.push(`Name must be between ${MIN_NAME_LENGTH} - ${MAX_NAME_LENGTH} characters.`);
    }

    if (!validateEmail(email)) {
        errors.push("Email address is not valid.");
    }

    if (password.length < MIN_PASSWORD_LENGTH || password.length > MAX_PASSWORD_LENGTH) {
        errors.push(`Password length must be between ${MIN_PASSWORD_LENGTH} - ${MAX_PASSWORD_LENGTH}.`);
    }

    if (password !== confirmedPassword) {
        errors.push("The passwords do not match.");
    }

    if (!agreements) {
        errors.push("You must agree with our Terms and Conditions.");
    }

    if (errors.length) {
        return { error: errors };
    }

    try {
        await auth.api.signUpEmail({
            body: {
                name,
                email,
                password,
            },
        });

        return { success: true, successCode: SignUpCode.RegistrationComplete };
    } catch (error) {
        return { error: "Something went wrong while creating your account. Please try again." };
    }
}
