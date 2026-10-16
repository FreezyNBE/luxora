export default function CollapseBox({ toggle, children }: { toggle: boolean; children: React.ReactNode }) {
    return (
        <div
            className={
                toggle
                    ? "grid grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out"
                    : "grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out"
            }
        >
            <div className="min-h-0 overflow-hidden">{children}</div>
        </div>
    );
}
