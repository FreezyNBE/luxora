import { ButtonAction } from "@/app/components/misc/Button";
import { LockKeyhole, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function LoginPage() {
    return (
        <div className="relative w-full bg-cream py-10 overflow-hidden">
            <div className="w-full flex items-center justify-center py-5 px-2">
                {/* Container */}
                <div className="w-full max-w-md bg-cream py-10 px-5 md:px-10 rounded-xs border border-border-light">
                    {/* Heading */}
                    <div className="w-full flex flex-col items-center justify-center gap-y-2 text-center">
                        <h1 className="text-3xl font-semibold">Sign in</h1>
                        <span className="w-full max-w-62 text-muted text-sm">
                            Enter your credentials below to sign in to Luxora Hotel.
                        </span>
                    </div>
                    {/* Fields */}
                    <div className="mt-10 space-y-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-semibold">
                                Email Address
                            </label>
                            <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border-2 border-border-light rounded-lg">
                                <Mail size={"1.35rem"} className="text-gray-800/70" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="text-sm font-semibold">
                                Password
                            </label>
                            <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border-2 border-border-light rounded-lg">
                                <LockKeyhole size={"1.35rem"} className="text-gray-800/70" />
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Footer */}
                    <div className="mt-8 space-y-10">
                        <div className="space-y-2">
                            <ButtonAction className="w-full text-sm text-white font-semibold">Sign In</ButtonAction>
                            <p className="text-sm text-ink font-medium text-center">
                                Don&apos;t have an account?{" "}
                                <Link href="/register" className="link-text-color">
                                    Register
                                </Link>
                            </p>
                        </div>
                        <div>
                            <div className="relative inset-0 w-full h-0.5 bg-bg-light rounded-full cursor-default">
                                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-cream px-3 text-xs font-medium">
                                    or
                                </div>
                            </div>
                            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 mt-5">
                                <ButtonAction className="w-full text-sm bg-cream-soft text-ink font-semibold border border-border-light hover:bg-black hover:text-white">
                                    <div className="flex items-center justify-center gap-x-2">
                                        <FaGoogle />
                                        <span>Google</span>
                                    </div>
                                </ButtonAction>
                                <ButtonAction className="w-full text-sm bg-cream-soft text-ink font-semibold border border-border-light hover:bg-black hover:text-white">
                                    <div className="flex items-center justify-center gap-x-2">
                                        <FaGithub />
                                        <span>Github</span>
                                    </div>
                                </ButtonAction>
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
        </div>
    );
}
