interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    width?: "btn-w-sm" | "btn-w-md" | "btn-w-lg" | "btn-w-full";
    rounded?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "full";
    className?: string;
}

export function Button({ children, rounded = "lg", className = "", ...props }: ButtonType) {
    return (
        <button
            className={`px-8 py-3 bg-gold border border-transparent rounded-${rounded} hover:bg-gold-dark text-white text-sm font-medium transition duration-100 ease-in cursor-pointer ${
                className.length ? className : ""
            } truncate`}
            {...props}
        >
            {children}
        </button>
    );
}

export function ButtonAction({ children, className = "", ...props }: ButtonType) {
    return (
        <button
            className={`w-full px-4 py-3.5 bg-black rounded-lg hover:bg-black/80 text-white text-sm font-semibold transition duration-100 ease-in cursor-pointer ${
                className.length ? className : ""
            } truncate`}
            {...props}
        >
            {children}
        </button>
    );
}

export function ButtonStream({ children, className = "", ...props }: ButtonType) {
    return (
        <button
            className={`px-8 py-3 bg-cream-soft border border-border-light rounded-lg text-ink text-sm font-semibold hover:bg-cream-dark hover:border-transparent  transition duration-100 ease-in cursor-pointer ${
                className.length ? className : ""
            } truncate`}
            {...props}
        >
            {children}
        </button>
    );
}

export function ButtonSave({ children, width = "btn-w-sm", className = "", ...props }: ButtonType) {
    return (
        <button
            className={`${width} p-2 rounded-full cursor-pointer transition-all duration-75 ${
                className.length ? className : ""
            } truncate`}
            {...props}
        >
            {children}
        </button>
    );
}
