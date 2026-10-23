"use server";

import { auth } from "@/lib/auth";
import { SignUpCode } from "@/utils/_auth_signup";
import { MAX_NAME_LENGTH, MAX_PASSWORD_LENGTH, MIN_NAME_LENGTH, MIN_PASSWORD_LENGTH } from "@/utils/_new_account_fields";
import { countryList } from "@/utils/list_countries";
import z from "zod";

type ResponseSignUpEmail = {
    success?: boolean;
    successCode?: SignUpCode;
    redirectUrl?: string;
    error?: string | string[];
};

const signUpSchema = z
    .object({
        name: z
            .string()
            .min(MIN_NAME_LENGTH, { error: `Name must be between ${MIN_NAME_LENGTH} - ${MAX_NAME_LENGTH} characters.` })
            .max(MAX_NAME_LENGTH, { error: `Name must be between ${MIN_NAME_LENGTH} - ${MAX_NAME_LENGTH} characters.` }),
        email: z.email({ error: "Email address is not valid." }),
        password: z
            .string()
            .min(MIN_PASSWORD_LENGTH, {
                error: `Password length must be between ${MIN_PASSWORD_LENGTH} - ${MAX_PASSWORD_LENGTH}.`,
            })
            .max(MAX_PASSWORD_LENGTH, {
                error: `Password length must be between ${MIN_PASSWORD_LENGTH} - ${MAX_PASSWORD_LENGTH}.`,
            }),
        confirmedPassword: z.string(),
        country: z.string().refine((country) => countryList.includes(country), { error: "Invalid country selected." }),
        gender: z.union([z.literal(0), z.literal(1)], { error: "Invalid gender selected." }),
        agreements: z.literal(true, { error: "You must agree with our Terms and Conditions." }),
    })
    .refine((data) => data.password === data.confirmedPassword, {
        path: ["confirmedPassword"],
        error: "The passwords do not match.",
    });

export async function actionSignUpEmail(formData: FormData): Promise<ResponseSignUpEmail> {
    const body = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirmedPassword: formData.get("confirm_password"),
        country: formData.get("country"),
        gender: formData.get("gender") === "0" ? 0 : 1,
        agreements: formData.get("agreements") === "on",
    };

    const result = signUpSchema.safeParse(body);

    if (!result.success) {
        const errors: string[] = result.error.issues.map((issue) => issue.message);
        return { error: errors };
    }

    const { name, email, password, country, gender } = result.data;

    try {
        await auth.api.signUpEmail({
            body: {
                name,
                email,
                password,
                countryName: country,
                gender,
            },
        });

        return { success: true, successCode: SignUpCode.RegistrationComplete };
    } catch (error) {
        return { error: "Something went wrong while creating your account. Please try again." };
    }
}
