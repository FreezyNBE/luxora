import { ButtonAction } from "@/app/components/misc/Button";
import { EyeOff, LockKeyhole, Mail, ShieldCheck, User } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <div className="relative w-full bg-cream py-10 overflow-hidden">
            <div className="w-full flex items-center justify-center py-5 px-2">
                {/* Container */}
                <div className="w-full max-w-md bg-cream py-10 px-5 md:px-10 rounded-xs border border-border-light">
                    {/* Heading */}
                    <div className="w-full flex flex-col items-center justify-center gap-y-2 text-center">
                        <h1 className="text-3xl font-semibold">Create Your Account</h1>
                        <span className="w-full max-w-72 text-muted text-sm">
                            Join Luxora Hotel and unlock exclusive benefits and offers.
                        </span>
                    </div>
                    {/* Fields */}
                    <div className="mt-10 space-y-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-semibold">
                                Full Name
                            </label>
                            <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border-2 border-border-light rounded-lg">
                                <User size={"1.35rem"} className="text-gray-800/70" />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                    placeholder="Enter your full name"
                                />
                            </div>
                        </div>
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
                            <div>
                                <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border-2 border-border-light rounded-lg">
                                    <LockKeyhole size={"1.35rem"} className="text-gray-800/70" />
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                        placeholder="Enter your password"
                                    />
                                    <EyeOff size={"1.35rem"} className="text-gray-800/70 cursor-pointer hover:text-gray-800" />
                                </div>
                                <span className="text-xs font-medium text-muted-light">Must be at least 8 characters</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="text-sm font-semibold">
                                Confirm Password
                            </label>
                            <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border-2 border-border-light rounded-lg">
                                <LockKeyhole size={"1.35rem"} className="text-gray-800/70" />
                                <input
                                    type="password"
                                    id="confirm_password"
                                    name="confirm_password"
                                    className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                    placeholder="Confirm your password"
                                />
                                <EyeOff size={"1.35rem"} className="text-gray-800/70 cursor-pointer hover:text-gray-800" />
                            </div>
                        </div>
                    </div>
                    {/* Footer */}
                    <div className="mt-8 space-y-5">
                        <div className="space-y-2">
                            <div className="pb-2">
                                <div className="w-full mb-2 flex">
                                    <input
                                        type="checkbox"
                                        name="all_room_types"
                                        id="all_room_types"
                                        className="accent-yellow-700/80"
                                    />
                                    <label
                                        htmlFor="all_room_types"
                                        className="select-none ms-2 text-xs font-medium text-heading"
                                    >
                                        I agree to the{" "}
                                        <Link href={"/"} className="link-text-color">
                                            Terms &#038; Conditions
                                        </Link>{" "}
                                        and{" "}
                                        <Link href={"/"} className="link-text-color">
                                            Privacy Policy
                                        </Link>
                                        .
                                    </label>
                                </div>
                            </div>
                            <ButtonAction className="w-full text-sm text-white font-semibold">Sign In</ButtonAction>
                            <p className="text-sm text-ink font-medium text-center">
                                Already have an account?{" "}
                                <Link href="/login" className="link-text-color">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                        <div>
                            <div className="relative inset-0 w-full h-0.5 bg-bg-light rounded-full cursor-default" />
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
