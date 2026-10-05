import { LoaderCircle } from "lucide-react";

export function AlertLoading({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full bg-cream-dark border border-border-dark/10 text-heading rounded-sm p-2">
            <div className="flex items-center gap-2">
                <LoaderCircle className="animate-spin" />
                <div className="text-xs font-semibold">{children}</div>
            </div>
        </div>
    );
}
