import { X } from "lucide-react";

export default function ErrorSignUp(errors: string[]) {
    if (!errors.length) return;

    return (
        <div className="w-full bg-rose-700 border border-rose-800 text-white rounded-sm p-2 text-sm">
            <div className="space-x-1 font-medium">
                <X size={"1.25rem"} className="inline-block" />
                <span className="inline-block align-middle">Sign up failed.</span>
            </div>
            <div className="space-y-1 mt-2 text-xs">
                {errors.map((error, index) => (
                    <div key={index}>- {error}</div>
                ))}
            </div>
        </div>
    );
}
