type CardNoticeProps = {
    title: string;
    description: string;
    children: React.ReactNode;
};

export function CardNotice({ title, description, children }: CardNoticeProps) {
    return (
        <div className="w-full bg-cream border border-border-gray border-l-5 border-l-gold-dark rounded-xl hover:bg-white hover:-translate-y-1 transform-all duration-200 ease-in-out">
            <div className="flex items-start gap-2 p-3">
                <div className="p-2 flex items-center justify-center text-gold-dark bg-white border border-gold-dark/30 shadow-md rounded-full">
                    {children}
                </div>
                <div className="flex flex-col gap-y-1">
                    <h1 className="text-neutral-900 text-lg font-medium ">{title}</h1>
                    <span className="block max-w-82 text-xs text-neutral-700">{description}</span>
                </div>
            </div>
        </div>
    );
}
