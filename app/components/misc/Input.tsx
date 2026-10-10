interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode;
    type?: string;
    id: string;
    name: string;
    className?: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children: React.ReactNode;
    id: string;
    name: string;
    className?: string;
    options: string[];
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    children: React.ReactNode;
    type: string;
    id: string;
    name: string;
    className?: string;
}

export function Input({ type, id, name, className, children, ...props }: InputProps) {
    return (
        <>
            <label htmlFor={id} className="text-xs text-heading font-medium">
                {children}
            </label>
            <div className="w-full py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg focus-within:ring-[1.5px] focus-within:ring-gold-light transition-all duration-100">
                <input
                    type={type}
                    id={id}
                    name={name}
                    className={`w-full text-gray-500 text-sm placeholder:text-xs placeholder:font-medium${className ? " " + className : ""}`}
                    {...props}
                />
            </div>
        </>
    );
}

export function InputSearch({ type, id, name, className, children, ...props }: InputProps) {
    return (
        <>
            <div className="w-full py-2 px-4 flex items-center gap-x-3 p-2 border border-border-gray rounded-lg focus-within:ring-[1.5px] focus-within:ring-gold-light transition-all duration-100">
                <div className="text-heading">{children}</div>
                <input
                    type={type}
                    id={id}
                    name={name}
                    className={`w-full text-gray-500 text-sm placeholder:text-xs placeholder:font-medium${className ? " " + className : ""}`}
                    {...props}
                />
            </div>
        </>
    );
}

export function InputDate({ id, name, className, children, ...props }: InputProps) {
    return (
        <>
            <label htmlFor={id} className="text-xs text-heading font-medium">
                {children}
            </label>
            <div className="w-full py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg focus-within:ring-[1.5px] focus-within:ring-gold-light transition-all duration-100">
                <input
                    type="date"
                    id={id}
                    name={name}
                    className={`w-full text-gray-500 text-sm placeholder:text-xs placeholder:font-medium${className ? " " + className : ""}`}
                    {...props}
                />
            </div>
        </>
    );
}

export function Select({ options, id, name, className, children, ...props }: SelectProps) {
    return (
        <>
            <label htmlFor={id} className="text-xs text-heading font-medium">
                {children}
            </label>
            <div className="w-full py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg focus-within:ring-[1.5px] focus-within:ring-gold-light transition-all duration-100">
                <select
                    id={id}
                    name={name}
                    autoComplete="room_type"
                    className="w-full text-gray-500 text-sm font-medium"
                    {...props}
                >
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}

export function Textarea({ type, id, name, className, children, ...props }: TextareaProps) {
    return (
        <>
            <label htmlFor={id} className="text-xs text-heading font-medium">
                {children}
            </label>
            <div className="w-full py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg focus-within:ring-[1.5px] focus-within:ring-gold-light transition-all duration-100">
                <textarea
                    id={id}
                    name={name}
                    className={`w-full text-gray-500 text-sm placeholder:text-xs placeholder:font-medium${className ? " " + className : ""}`}
                    {...props}
                />
            </div>
        </>
    );
}
