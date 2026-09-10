import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react/jsx-runtime";

type BreadCrumbsLinks = {
    url: string;
    name: string;
};

export default function BreadCrumbs({ links, usePadding = false }: { links: BreadCrumbsLinks[]; usePadding?: boolean }) {
    if (usePadding) {
        return (
            <div className="px-10 py-5">
                <div className="w-full flex items-center gap-x-3 py-2 text-sm font-medium text-(--color-text-secondary)">
                    <Link href={"/"} className="link-border">
                        Home
                    </Link>
                    {links.length &&
                        links.map((link, index) => (
                            <Fragment key={index}>
                                <ChevronRight size={"1rem"} />
                                <Link href={link.url} className="link-border">
                                    {link.name}
                                </Link>
                            </Fragment>
                        ))}
                </div>
            </div>
        );
    }

    return (
        <div className="w-full flex items-center gap-x-3 py-2 text-sm font-medium text-(--color-text-secondary)">
            <Link href={"/"} className="link-border">
                Home
            </Link>
            {links.length &&
                links.map((link, index) => (
                    <Fragment key={index}>
                        <ChevronRight size={"1rem"} />
                        <Link href={link.url} className="link-border">
                            {link.name}
                        </Link>
                    </Fragment>
                ))}
        </div>
    );
}
