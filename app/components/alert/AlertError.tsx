import { TriangleAlert, X } from "lucide-react";

type AlertProps = {
    closeBtn?: (() => void) | null;
    children: React.ReactNode;
};

export function AlertError({ closeBtn = null, children }: AlertProps) {
    return (
        <div className="w-full bg-rose-700 border border-rose-800 text-white rounded-sm p-2 text-sm">
            <div className="w-full flex items-center gap-x-1">
                <TriangleAlert size={"1rem"} />
                <span className="font-medium">{children}</span>
                {closeBtn && (
                    <button
                        onClick={closeBtn}
                        className="ms-auto me-1 p-1 rounded-sm cursor-pointer outline-none focus:bg-red-900 hover:bg-red-800 transition-all duration-100"
                    >
                        <X size={"1rem"} />
                    </button>
                )}
            </div>
        </div>
    );
}
