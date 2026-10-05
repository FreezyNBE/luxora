import { Info } from "lucide-react";

export function AlertInfo({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full bg-gold/30 border border-gold-dark/30 text-ink rounded-sm p-2 text-sm">
            <div className="space-x-1">
                <Info size={"1rem"} className="inline-block" />
                <span className="inline-block align-middle font-medium">{children}</span>
            </div>
        </div>
    );
}
