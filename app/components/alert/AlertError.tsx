import { X } from "lucide-react";

export function AlertError({ message }: { message: string }) {
    return (
        <div className="w-full bg-rose-700 border border-rose-800 text-white rounded-sm p-2 text-sm">
            <div className="space-x-1">
                <X size={"1rem"} className="inline-block" />
                <span className="inline-block align-middle font-medium">{message}</span>
            </div>
        </div>
    );
}
