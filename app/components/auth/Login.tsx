"use client";

import { LoaderCircle, LockKeyhole, Mail, ShieldCheck } from "lucide-react";
import { ButtonAction, ButtonStream } from "../misc/Button";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import ErrorSignIn from "./ErrorSignIn";
import AlertSignIn from "./AlertSignIn";
import { SignUpCode } from "@/utils/_auth_signup";
import toast from "react-hot-toast";

export default function LoginComponent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [emailAddress, setEmailAddress] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const error = searchParams.get("error");
    const alertSignInCode = searchParams.get("code") as SignUpCode;
    const [loading, setLoading] = useState<boolean>(false);

    const startSignInOAuth = async (provider: "google" | "github") => {
        await authClient.signIn.social({
            provider,
            callbackURL: "/",
            errorCallbackURL: "/login",
        });
    };

    const handleSignInEmail = async (formData: FormData) => {
        if (loading) return;

        const fieldEmail = formData.get("email") as string;
        const fieldPassword = formData.get("password") as string;

        setLoading(true);

        await authClient.signIn.email(
            {
                email: fieldEmail,
                password: fieldPassword,
            },
            {
                onSuccess: (ctx) => {
                    setLoading(false);
                    toast.success("You are now signed in.");
                    router.push("/");
                },
                onError: (ctx) => {
                    setLoading(false);
                    router.push("/login?error=invalid_email_or_password");
                },
            },
        );
    };

    return (
        <div className="relative w-full bg-cream overflow-hidden">
            <div className="w-full flex items-center justify-center py-5 px-2">
                {/* Container */}
                <div className="w-full max-w-md space-y-5 bg-cream py-7 px-5 rounded-xs border border-border-light shadow-lg">
                    {/* Heading */}
                    <div className="w-full flex flex-col items-center justify-center gap-y-2 text-center">
                        <h1 className="text-3xl font-semibold">Sign in</h1>
                        <span className="w-full max-w-62 text-muted text-sm">
                            Enter your credentials below to sign in to Luxora Hotel.
                        </span>
                    </div>

                    {loading && (
                        <div className="w-full bg-cream-dark border border-border-dark/10 text-heading rounded-sm p-2">
                            <div className="flex items-center gap-2">
                                <LoaderCircle className="animate-spin" />
                                <div className="text-xs font-semibold">Signing you in...</div>
                            </div>
                        </div>
                    )}

                    {/* Errors */}
                    {error?.length ? ErrorSignIn(error) : null}
                    {alertSignInCode && AlertSignIn(alertSignInCode)}

                    {/* Fields */}
                    <form action={handleSignInEmail}>
                        <div className="space-y-5">
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
                                <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                                    <LockKeyhole size={"1.35rem"} className="text-gray-800/70" />
                                    <input
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
                                </div>
                            </div>
                            <ButtonAction type="submit">Sign In</ButtonAction>
                        </div>
                    </form>
                    <div className="space-y-2">
                        <p className="text-sm text-ink font-medium text-center">
                            Don&apos;t have an account?{" "}
                            <Link href="/register" className="link-text-color">
                                Register
                            </Link>
                        </p>
                    </div>
                    {/* Footer */}
                    <div>
                        <div className="relative inset-0 w-full h-px bg-bg-light rounded-full cursor-default">
                            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-cream px-3 text-xs font-medium">
                                or
                            </div>
                        </div>
                        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 mt-5">
                            <ButtonStream onClick={() => startSignInOAuth("google")} className="w-full">
                                <div className="flex items-center justify-center gap-x-2">
                                    <Image src="/svg/sm-google.svg" alt="Google" width={20} height={20} />
                                    <span>Google</span>
                                </div>
                            </ButtonStream>
                            <ButtonStream onClick={() => startSignInOAuth("github")} className="w-full">
                                <div className="flex items-center justify-center gap-x-2">
                                    <Image src="/svg/sm-github.svg" alt="Github" width={20} height={20} />
                                    <span>Github</span>
                                </div>
                            </ButtonStream>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 cursor-default">
                        <ShieldCheck className="text-green-700" />
                        <span className="block text-xs font-semibold text-green-700">
                            Your data is safe and secure with us.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
