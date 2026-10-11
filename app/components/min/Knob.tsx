interface KnobProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    status: boolean;
}

export default function Knob({ status = false, ...props }: KnobProps) {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={status}
            aria-label="Room Status"
            className={`w-14 h-6 rounded-full inline-flex p-0.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600/70 focus-visible:ring-offset-2 transition-colors duration-100 ${status ? "bg-green-600/70 hover:bg-green-600/90" : "bg-gray-600/30 hover:bg-gray-600/50"}`}
            {...props}
        >
            <span
                className={`w-5 h-5 bg-white ${status ? "translate-x-8" : "translate-x-0"} rounded-full transition-transform duration-200 ease-in-out`}
            />
        </button>
    );
}
