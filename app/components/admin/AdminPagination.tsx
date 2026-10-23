"use client";
import { ROWS_PER_PAGE } from "@/utils/admin/_admin_variables";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function AdminPagination({
    itemName,
    page,
    itemsOnPage,
    totalItems,
    totalPages,
}: {
    itemName: string;
    page: number;
    itemsOnPage: number;
    totalItems: number;
    totalPages: number;
}) {
    return (
        <div className="flex items-start justify-between">
            <div className="text-gray-500 text-xs font-medium">
                {itemsOnPage > 0 ? (
                    <>
                        Showing {(page - 1) * ROWS_PER_PAGE + 1}-{(page - 1) * ROWS_PER_PAGE + itemsOnPage} of {totalItems}{" "}
                        {itemName}
                    </>
                ) : (
                    <>No {itemName}</>
                )}
            </div>
            {/* Pages */}
            {itemsOnPage > 0 && (
                <div className="flex items-center gap-1">
                    {/* Arrow Back */}
                    <Link
                        href={`?page=${page - 1 < 1 ? 1 : page - 1}`}
                        className="w-8 h-8 flex items-center justify-center text-gray-400 bg-gray-300/10 border border-gray-400/20 hover:text-gray-500 hover:bg-gold-light/20 hover:border-gold/50 rounded-md"
                    >
                        <ChevronLeft size={"1.25rem"} />
                    </Link>
                    <div className="flex items-center gap-1">
                        {page > 1 && (
                            <Link
                                href={`?page=${page - 1}`}
                                className="w-8 h-8 flex items-center justify-center text-gray-500 bg-gray-300/30 border border-gray-500/20 hover:bg-gold-light/20 hover:border-gold/50 rounded-md"
                            >
                                <span>{page - 1}</span>
                            </Link>
                        )}
                        <div className="w-8 h-8 flex items-center justify-center text-gray-500 bg-gold-light/20 border border-gold/50 rounded-md cursor-default">
                            <span>{page}</span>
                        </div>
                        {page < totalPages && (
                            <Link
                                href={`?page=${page + 1}`}
                                className="w-8 h-8 flex items-center justify-center text-gray-500 bg-gray-300/30 border border-gray-500/20 hover:bg-gold-light/20 hover:border-gold/50 rounded-md"
                            >
                                <span>{page + 1}</span>
                            </Link>
                        )}
                    </div>
                    <Link
                        href={`?page=${page + 1 > totalPages ? totalPages : page + 1}`}
                        className="w-8 h-8 flex items-center justify-center text-gray-400 bg-gray-300/10 border border-gray-400/20 hover:text-gray-500 hover:bg-gold-light/20 hover:border-gold/50 rounded-md"
                    >
                        <ChevronRight size={"1.25rem"} />
                    </Link>
                </div>
            )}
        </div>
    );
}
