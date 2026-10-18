import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function BackButton({ url, text }: { url: string; text: string }) {
    return (
        <Link href={url} className="w-fit hh text-gray-500 flex items-center justify-start">
            <MoveLeft size={"1.25rem"} className="inline-block" />
            <span className="inline-block align-middle ms-2 text-xs font-medium">{text}</span>
        </Link>
    );
}
