import { Check } from "lucide-react";

export function AlertSuccess({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full bg-green-600 border border-green-700 text-white rounded-sm p-2 text-sm">
            <div className="space-x-1">
                <Check size={"1rem"} className="inline-block" />
                <span className="inline-block align-middle font-medium">{children}</span>
            </div>
        </div>
    );
}
