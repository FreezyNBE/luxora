import { X } from "lucide-react";

export function AlertError({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full bg-rose-700 border border-rose-800 text-white rounded-sm p-2 text-sm">
            <div className="space-x-1">
                <X size={"1rem"} className="inline-block" />
                <span className="inline-block align-middle font-medium">{children}</span>
            </div>
        </div>
    );
}
