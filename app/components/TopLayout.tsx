import { ShieldCheck } from "lucide-react";

type TopLayoutProps = {
    imgUrl: string;
    title: string;
    description: string;
    children?: React.ReactNode;
};

export default function TopLayout({ imgUrl, title, description, children }: TopLayoutProps) {
    return (
        <div className=" w-full flex flex-col max-md:mb-3 border-b border-b-border-light">
            <div className="relative w-full h-50 lg:h-65">
                <img src={imgUrl} alt="Contact Us" className="w-full h-full object-cover" />

                <div
                    className="absolute inset-0 backdrop-blur-[3px]"
                    style={{
                        maskImage: "linear-gradient(90deg, black 0%, black 28%, trasparent 72%)",
                        WebkitMaskImage: "linear-gradient(90deg, black 0%, black 28%, transparent 72%)",
                    }}
                />

                {/* <div className="absolute inset-0 bg-black/60" /> */}

                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(38, 23, 13, 0.88) 0%, rgba(38, 23, 13, 0.68) 10%, rgba(38, 23, 13, 0.22) 35%, transparent 82%)",
                    }}
                />

                <div className="absolute inset-0 w-full h-full text-gray-100 cursor-default">
                    <div className="h-full flex flex-col items-start justify-center gap-y-2 px-3 sm:ps-7.5 lg:ps-15 tracking-wide">
                        {children && children}
                        <span className="text-5xl font-medium text-gray-100">{title}</span>
                        <span className="max-w-120 text-sm">{description}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
