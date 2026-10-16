export function CardContainer({ children }: { children: React.ReactNode }) {
    return <div className="w-full bg-white border border-border-gray shadow-xl rounded-xl overflow-hidden">{children}</div>;
}

export function CardHeader({ children }: { children: React.ReactNode }) {
    return <div className="w-full p-4 bg-gray-100 border-b border-b-border-gray">{children}</div>;
}
