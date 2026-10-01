"use client";

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
        <div className="w-full space-y-5">
            <div className="w-fit relative block text-lg font-medium tracking-wide group cursor-pointer">
                <span>Logout</span>
                <div className="absolute bottom-0 w-0 group-hover:w-full h-0.5 bg-rose-800 transition-all duration-300 ease-in" />
            </div>

            <div className="text-heading text-sm">If you want to sign out from this device, click the button below.</div>

            <div
                onClick={logoutUser}
                className="w-fit px-5 py-2 bg-rose-800 text-white font-medium rounded-full cursor-pointer hover:bg-rose-900 transition-all duration-75"
            >
                Sign out
            </div>
        </div>
    );
}
