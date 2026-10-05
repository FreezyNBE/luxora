"use client";

import { Eye, EyeOff, LockKeyhole, Mail, MapPinned, ShieldCheck, User } from "lucide-react";
import Link from "next/link";
import { ButtonAction } from "../misc/Button";
import { useState } from "react";
import { MAX_NAME_LENGTH, MIN_NAME_LENGTH } from "@/utils/_new_account_fields";
import { actionSignUpEmail } from "@/app/action/auth.action";
import { useRouter } from "next/navigation";
import ErrorSignUp from "./ErrorSignUp";
import { countryList } from "@/utils/list_countries";
import { getIndexByCountry } from "@/utils/_functions";

export default function RegisterComponent() {
    const router = useRouter();
    const [name, setName] = useState<string>("");
    const [emailAddress, setEmailAddress] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isPasswordVisibile, setPasswordVisibile] = useState(false);
    const [isConfirmPasswordVisibile, setConfirmPasswordVisibile] = useState(false);
    const [confirmedPassword, setConfirmedPassword] = useState<string>("");
    const [country, setCountry] = useState<string>(countryList[getIndexByCountry()]);
    const [gender, setGender] = useState<number>(0);
    const [agreeTerms, setAgreeTerms] = useState<boolean>(false);
    const [errors, setErrors] = useState<string[]>([]);

    const handleSignUpEmail = async (formData: FormData) => {
        const result = await actionSignUpEmail(formData);

        if (result.error) {
            if (Array.isArray(result.error)) {
                setErrors(result.error);
            } else {
                setErrors([result.error]);
            }

            return;
        }

        router.push(`/login?code=${result.successCode}`);
    };

    const passwordVisibility = () => {
        if (isPasswordVisibile) {
            setPasswordVisibile(false);
        } else {
            setPasswordVisibile(true);
        }
    };

    const confirmedPasswordVisibility = () => {
        if (isConfirmPasswordVisibile) {
            setConfirmPasswordVisibile(false);
        } else {
            setConfirmPasswordVisibile(true);
        }
    };

    return (
        <div className="relative w-full bg-cream overflow-hidden">
            <div className="w-full flex items-center justify-center py-5 px-2">
                {/* Container */}
                <div className="w-full max-w-md bg-cream py-7 px-5 rounded-xs border border-border-light shadow-lg">
                    <form action={handleSignUpEmail} className="space-y-5">
                        {/* Heading */}
                        <div className="w-full flex flex-col items-center justify-center gap-y-2 text-center">
                            <h1 className="text-3xl font-semibold">Create Your Account</h1>
                            <span className="w-full max-w-72 text-muted text-sm">
                                Join Luxora Hotel and unlock exclusive benefits and offers.
                            </span>
                        </div>

                        {/* Errors */}
                        {errors?.length ? ErrorSignUp(errors) : null}

                        {/* Fields */}
                        <div className="space-y-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-semibold">
                                    Full Name
                                </label>
                                <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                                    <User size={"1.35rem"} className="text-gray-800/70" />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                        placeholder="Enter your full name"
                                        autoComplete="true"
                                        value={name}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                                        min={MIN_NAME_LENGTH}
                                        max={MAX_NAME_LENGTH}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-semibold">
                                    Email Address
                                </label>
                                <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                                    <Mail size={"1.35rem"} className="text-gray-800/70" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                        placeholder="Enter your email"
                                        autoComplete="true"
                                        value={emailAddress}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                            setEmailAddress(event.target.value)
                                        }
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="password" className="text-sm font-semibold">
                                    Password
                                </label>
                                <div>
                                    <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                                        <LockKeyhole size={"1.35rem"} className="text-gray-800/70" />
                                        <input
                                            hidden
                                            type="password"
                                            id="password"
                                            name="password"
                                            className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                setPassword(event.target.value)
                                            }
                                            required
                                        />
                                        {isPasswordVisibile ? (
                                            <input
                                                type="text"
                                                id="pvisibile"
                                                name="pvisibile"
                                                className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                                placeholder="Enter your password"
                                                value={password}
                                                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                    setPassword(event.target.value)
                                                }
                                                required
                                            />
                                        ) : (
                                            <input
                                                type="password"
                                                id="phidden"
                                                name="phidden"
                                                className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                                placeholder="Enter your password"
                                                value={password}
                                                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                    setPassword(event.target.value)
                                                }
                                                required
                                            />
                                        )}
                                        {isPasswordVisibile ? (
                                            <Eye
                                                size={"1.35rem"}
                                                className="cursor-pointer apply-password-visibile"
                                                onClick={passwordVisibility}
                                            />
                                        ) : (
                                            <EyeOff
                                                size={"1.35rem"}
                                                className="cursor-pointer apply-password-hidden"
                                                onClick={passwordVisibility}
                                            />
                                        )}
                                    </div>
                                    <span className="text-xs font-medium text-muted-light">Must be at least 8 characters</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="password" className="text-sm font-semibold">
                                    Confirm Password
                                </label>
                                <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                                    <LockKeyhole size={"1.35rem"} className="text-gray-800/70" />
                                    <input
                                        hidden
                                        type="password"
                                        id="confirm_password"
                                        name="confirm_password"
                                        className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                        placeholder="Confirm your password"
                                        value={confirmedPassword}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                            setConfirmedPassword(event.target.value)
                                        }
                                        required
                                    />
                                    {isConfirmPasswordVisibile ? (
                                        <input
                                            type="text"
                                            id="cpvisibile"
                                            name="cpvisibile"
                                            className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                            placeholder="Confirm your password"
                                            value={confirmedPassword}
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                setConfirmedPassword(event.target.value)
                                            }
                                            required
                                        />
                                    ) : (
                                        <input
                                            type="password"
                                            id="cphidden"
                                            name="cphidden"
                                            className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                            placeholder="Confirm your password"
                                            value={confirmedPassword}
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                setConfirmedPassword(event.target.value)
                                            }
                                            required
                                        />
                                    )}
                                    {isConfirmPasswordVisibile ? (
                                        <Eye
                                            size={"1.35rem"}
                                            className="cursor-pointer apply-password-visibile"
                                            onClick={confirmedPasswordVisibility}
                                        />
                                    ) : (
                                        <EyeOff
                                            size={"1.35rem"}
                                            className="cursor-pointer apply-password-hidden"
                                            onClick={confirmedPasswordVisibility}
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="gender" className="text-sm font-semibold">
                                    Gender
                                </label>
                                <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                                    <User size={"1.35rem"} className="text-gray-800/70" />
                                    <select
                                        id="gender"
                                        name="gender"
                                        autoComplete="gender"
                                        className="w-full text-muted"
                                        value={gender}
                                        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                                            setGender(Number(event.target.value));
                                        }}
                                    >
                                        <option value="0">Male</option>
                                        <option value="1">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="country" className="text-sm font-semibold">
                                    Country
                                </label>
                                <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                                    <MapPinned size={"1.35rem"} className="text-gray-800/70" />
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country"
                                        className="w-full text-muted"
                                        value={country}
                                        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                                            if (countryList.includes(event.target.value)) {
                                                setCountry(event.target.value);
                                            } else {
                                                setCountry(countryList[getIndexByCountry()]);
                                            }
                                        }}
                                    >
                                        {countryList.map((country, index) => (
                                            <option key={index} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Footer */}
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <div className="w-full mb-2 flex items-center justify-center">
                                    <input
                                        type="checkbox"
                                        name="agreements"
                                        id="agreements"
                                        className="accent-yellow-700/80"
                                        checked={agreeTerms}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                            setAgreeTerms(event.target.checked)
                                        }
                                    />
                                    <label htmlFor="agreements" className="select-none ms-2 text-sm font-medium text-heading">
                                        I agree to the{" "}
                                        <Link href="/" className="link-text-color">
                                            Terms &#038; Conditions
                                        </Link>{" "}
                                        and{" "}
                                        <Link href="/" className="link-text-color">
                                            Privacy Policy
                                        </Link>
                                        .
                                    </label>
                                </div>
                                <ButtonAction type="submit" className="w-full">
                                    Create Account
                                </ButtonAction>
                                <p className="text-sm text-ink font-medium text-center">
                                    Already have an account?{" "}
                                    <Link href="/login" className="link-text-color">
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                            <div>
                                <div className="relative inset-0 w-full h-px bg-bg-light rounded-full cursor-default" />
                            </div>
                            <div className="flex items-center justify-center gap-2 cursor-default">
                                <ShieldCheck className="text-green-700" />
                                <span className="block text-xs font-semibold text-green-700">
                                    Your data is safe and secure with us.
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
