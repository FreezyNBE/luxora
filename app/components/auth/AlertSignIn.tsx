import { signUpMap } from "@/utils/_auth_signup";
import { CheckCheck } from "lucide-react";

export default function AlertSignIn(code: keyof typeof signUpMap) {
    if (!signUpMap[code]?.length) return null;

    return (
        <div className="w-full bg-blue-600 border border-blue-700 text-white rounded-sm p-2">
            <div className="flex items-center gap-2">
                <CheckCheck />
                <div className="text-xs font-semibold">{signUpMap[code]}</div>
            </div>
        </div>
    );
}
