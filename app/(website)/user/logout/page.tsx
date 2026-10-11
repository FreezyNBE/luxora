"use client";

import BackButton from "@/app/components/min/BackButton";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LogoutPage() {
    const router = useRouter();

    const logoutUser = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("Logged out.");
                    router.push("/login");
                },
            },
        });
    };

    return (
        <div className="w-full space-y-2">
            <BackButton url="/" text="Back to Home" />

            <div>
                <h1 className="text-3xl tracking-wide">Logout</h1>
            </div>

            <div className="w-full space-y-2 p-4 bg-cream border border-border-gray rounded-md">
                <div className="text-heading text-sm">If you want to sign out from this device, click the button below.</div>

                <div
                    onClick={logoutUser}
                    className="w-fit px-5 py-2 bg-rose-800 text-white font-medium rounded-full cursor-pointer hover:bg-rose-900 transition-all duration-75"
                >
                    Sign out
                </div>
            </div>
        </div>
    );
}
