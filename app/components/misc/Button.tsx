interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export function Button({ children, className = "", ...props }: ButtonType) {
    return (
        <button
            className={`w-fit min-w:32 h-10 px-8 py-2 bg-gold rounded-sm hover:bg-gold-dark text-white transition duration-100 ease-in cursor-pointer ${className.length ? className : ""} truncate`}
            {...props}
        >
            {children}
        </button>
    );
}

export function ButtonOutline({ children, className = "", ...props }: ButtonType) {
    return (
        <button
            className={`w-fit min-w:32 h-10 px-8 py-2 border border-border-light rounded-sm hover:bg-bg-light text-muted hover:text-ink font-semibold transition duration-100 ease-in cursor-pointer ${className.length ? className : ""} truncate`}
            {...props}
        >
            {children}
        </button>
    );
}

export function ButtonAction({ children, className = "", ...props }: ButtonType) {
    return (
        <button
            className={`w-50 h-12 px-4 py-1 bg-black rounded-lg hover:bg-black/80 transition duration-100 ease-in cursor-pointer ${
                className.length ? className : ""
            } truncate`}
            {...props}
        >
            {children}
        </button>
    );
}

export function CircleButton({ children, className = "", ...props }: ButtonType) {
    return (
        <button
            className={`w-32 h-10 bg-gold rounded-full hover:bg-gold-dark text-white transition duration-100 ease-in cursor-pointer ${className.length ? className : ""} truncate`}
            {...props}
        >
            {children}
        </button>
    );
}
