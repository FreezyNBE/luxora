import { authErrors } from "@/utils/_auth_errors";
import { X } from "lucide-react";

export default function ErrorSignIn(error: string) {
    const messageError = (error && authErrors[error]) ?? "Something went wrong while signing you in.";

    return (
        <div className="w-full bg-rose-700 border border-rose-800 text-white rounded-sm p-2 text-sm">
            <div className="space-x-1 font-medium">
                <X size={"1.25rem"} className="inline-block" />
                <span className="inline-block align-middle">Sign in failed.</span>
            </div>
            <div className="mt-2 text-xs">{messageError}</div>
        </div>
    );
}
