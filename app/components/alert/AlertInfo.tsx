import { Info } from "lucide-react";

export function AlertSuccess({ message }: { message: string }) {
    return (
        <div className="w-full bg-blue-700 border border-blue-800 text-white rounded-sm p-2 text-sm">
            <div className="space-x-1">
                <Info size={"1rem"} className="inline-block" />
                <span className="inline-block align-middle font-medium">{message}</span>
            </div>
        </div>
    );
}
