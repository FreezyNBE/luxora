import { Info, X } from "lucide-react";

type AlertProps = {
    closeBtn?: (() => void) | null;
    children: React.ReactNode;
};

export function AlertInfo({ closeBtn = null, children }: AlertProps) {
    return (
        <div className="w-full bg-gold/30 border border-gold-dark/30 text-ink rounded-sm p-2 text-sm">
            <div className="w-full flex items-center gap-x-1">
                <Info size={"1rem"} />
                <span className="font-medium">{children}</span>
                {closeBtn && (
                    <button
                        onClick={closeBtn}
                        className="ms-auto me-1 p-1 rounded-sm cursor-pointer outline-none focus:bg-gold/50 hover:bg-gold-dark/40 transition-all duration-100"
                    >
                        <X size={"1rem"} />
                    </button>
                )}
            </div>
        </div>
    );
}
