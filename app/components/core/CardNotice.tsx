type CardNoticeProps = {
    title: string;
    description: string;
    children: React.ReactNode;
};

export function CardNotice({ title, description, children }: CardNoticeProps) {
    return (
        <div className="w-full h-full bg-cream border border-border-gray border-l-5 border-l-gold-dark rounded-xl hover:bg-white hover:-translate-y-1 transform-all duration-200 ease-in-out">
            <div className="flex items-start gap-2 p-3">
                <div className="p-2 flex items-center justify-center text-gold-dark bg-white border border-gold-dark/30 shadow-md rounded-full">
                    {children}
                </div>
                <div className="flex flex-col gap-y-1">
                    <h1 className="text-neutral-900 text-lg font-medium">{title}</h1>
                    <span className="block max-w-82 text-xs text-neutral-700">{description}</span>
                </div>
            </div>
        </div>
    );
}

export function CardMessage({ title, description, children }: CardNoticeProps) {
    return (
        <div className="w-full h-full bg-white border border-border-gray rounded-xl hover:bg-white hover:-translate-y-px hover:border-gold/50 hover:shadow-md hover:shadow-gold/30 transform-all duration-200 ease-in-out">
            <div className="flex items-center gap-4 py-3 px-6">
                <div className="p-3 flex items-center justify-center text-gold-dark bg-gold-light/10 border border-gold-light/30 rounded-xl">
                    {children}
                </div>
                <div className="flex flex-col gap-y-1">
                    <h1 className="text-neutral-800 text-lg font-semibold">{title}</h1>
                    <span className="block max-w-82 text-xs text-neutral-600">{description}</span>
                </div>
            </div>
        </div>
    );
}

export function CardInfo({ title, description, children }: CardNoticeProps) {
    return (
        <div className="relative w-full h-full bg-white border border-border-gray rounded-xl hover:bg-white hover:-translate-y-1 hover:border-gold/50 hover:shadow-md hover:shadow-gold/30 transform-all duration-200 ease-in-out group overflow-hidden">
            <div className="absolute top-0 bottom-0 w-0 group-hover:w-full h-1 flex">
                <div className="w-full ms-auto">
                    <div className="float-end w-0 group-hover:w-full h-1 bg-gold-dark rounded-s-full transition-all duration-500 ease-in-out" />
                </div>
                <div className="w-full me-auto">
                    <div className="w-0 group-hover:w-full h-1 bg-gold-dark rounded-e-full transition-all duration-500 ease-in-out" />
                </div>
            </div>

            <div className="flex items-start gap-4 py-3 px-6">
                <div className="p-3 flex items-center justify-center text-white bg-gold-dark border border-dark rounded-xl">
                    {children}
                </div>
                <div className="flex flex-col gap-y-1">
                    <h1 className="text-neutral-800 text-xl font-semibold">{title}</h1>
                    <span className="block max-w-82 text-sm text-neutral-600">{description}</span>
                </div>
            </div>
        </div>
    );
}
