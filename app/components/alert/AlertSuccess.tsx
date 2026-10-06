import { Check, X } from "lucide-react";

type AlertProps = {
    closeBtn?: (() => void) | null;
    children: React.ReactNode;
};

export function AlertSuccess({ closeBtn = null, children }: AlertProps) {
    return (
        <div className="w-full bg-green-600 border border-green-800 text-white rounded-sm p-2 text-sm">
            <div className="w-full flex items-center gap-x-1">
                <Check size={"1rem"} />
                <span className="font-medium">{children}</span>
                {closeBtn && (
                    <button
                        onClick={closeBtn}
                        className="ms-auto me-1 p-1 rounded-sm cursor-pointer outline-none focus:bg-green-800 hover:bg-green-700 transition-all duration-100"
                    >
                        <X size={"1rem"} />
                    </button>
                )}
            </div>
        </div>
    );
}
