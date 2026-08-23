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
