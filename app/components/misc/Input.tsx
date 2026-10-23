import { Info } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode;
    type?: string;
    id: string;
    name: string;
    className?: string;
    error?: string | null;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children?: React.ReactNode;
    id: string;
    name: string;
    className?: string;
    options: string[];
    label?: boolean;
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    children?: React.ReactNode;
    id: string;
    name: string;
    className?: string;
    label?: boolean;
    error?: string | null;
}

export function Input({ type, id, name, className, error = null, children, ...props }: InputProps) {
    return (
        <>
            <label htmlFor={id} className="text-xs text-heading font-medium">
                {children}
            </label>
            <div
                className={`w-full py-2 px-4 flex items-center gap-x-3 p-2 border border-border-gray rounded-md focus-within:ring-[1.5px] focus-within:ring-gold-light transition-all duration-100${error ? " input-warning" : ""}`}
            >
                <input
                    type={type}
                    id={id}
                    name={name}
                    className={`w-full text-gray-500 text-sm placeholder:text-gray-500/65 placeholder:text-xs placeholder:font-medium${className ? " " + className : ""}`}
                    {...props}
                />
            </div>
            {error && (
                <div className="flex items-center gap-1 text-xs text-rose-700 font-medium">
                    <Info size={"1rem"} />
                    <span>{error}</span>
                </div>
            )}
        </>
    );
}

export function InputSearch({ type, id, name, className, children, ...props }: InputProps) {
    return (
        <>
            <div className="w-full py-2 px-4 flex items-center gap-x-3 p-2 border border-border-gray rounded-md focus-within:ring-[1.5px] focus-within:ring-gold-light transition-all duration-100">
                <div className="text-gray-500">{children}</div>
                <input
                    type={type}
                    id={id}
                    name={name}
                    className={`w-full text-gray-500 text-sm placeholder:text-gray-500/65 placeholder:text-xs placeholder:font-medium${className ? " " + className : ""}`}
                    {...props}
                />
            </div>
        </>
    );
}

export function InputDate({ id, name, className, error = null, children, ...props }: InputProps) {
    return (
        <>
            <label htmlFor={id} className="text-xs text-heading font-medium">
                {children}
            </label>
            <div
                className={`w-full py-2 px-4 flex items-center gap-x-3 p-2 border border-border-gray rounded-md focus-within:ring-[1.5px] focus-within:ring-gold-light transition-all duration-100${error ? " input-warning" : ""}`}
            >
                <input
                    type="date"
                    id={id}
                    name={name}
                    className={`w-full text-gray-500 text-sm placeholder:text-gray-500/65 placeholder:text-xs placeholder:font-medium${className ? " " + className : ""}`}
                    {...props}
                />
            </div>
            {error && (
                <div className="flex items-center gap-1 text-xs text-rose-700 font-medium">
                    <Info size={"1rem"} />
                    <span>{error}</span>
                </div>
            )}
        </>
    );
}

export function Select({ options, id, name, className, label = true, children, ...props }: SelectProps) {
    return (
        <>
            {label && (
                <label htmlFor={id} className="text-xs text-heading font-medium">
                    {children}
                </label>
            )}
            <div className="w-full py-2 px-4 flex items-center gap-x-3 p-2 border border-border-gray rounded-md focus-within:ring-[1.5px] focus-within:ring-gold-light transition-all duration-100">
                <select
                    id={id}
                    name={name}
                    className={`w-full text-gray-500 text-sm font-medium${className ? " " + className : ""}`}
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

export function Textarea({ id, name, className, label = false, error = null, children, ...props }: TextareaProps) {
    return (
        <>
            {label && (
                <label htmlFor={id} className="text-xs text-heading font-medium">
                    {children}
                </label>
            )}
            <div
                className={`w-full py-2 px-4 flex items-center gap-x-3 p-2 border border-border-gray rounded-md focus-within:ring-[1.5px] focus-within:ring-gold-light transition-all duration-100${error ? " input-warning" : ""}`}
            >
                <textarea
                    id={id}
                    name={name}
                    className={`w-full text-gray-500 text-sm placeholder:text-gray-500/65 placeholder:text-xs placeholder:font-medium${className ? " " + className : ""}`}
                    {...props}
                />
            </div>
            {error && (
                <div className="flex items-center gap-1 text-xs text-rose-700 font-medium">
                    <Info size={"1rem"} />
                    <span>{error}</span>
                </div>
            )}
        </>
    );
}
