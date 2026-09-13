"use client";

import { ChevronLeft, ChevronRight, MoveLeft, X } from "lucide-react";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGlobal } from "./GlobalContext";

type GalleryContextTypes = {
    createGallery: (images: string[]) => void;
};

const GalleryContext = createContext<GalleryContextTypes>({
    createGallery: (images: string[]) => {},
});

export const useGallery = () => {
    return useContext(GalleryContext);
};

type Direction = "next" | "prev";

export default function GalleryContextProvider({ children }: { children: React.ReactNode }) {
    const { disableBodyOverflow, enableBodyOverflow } = useGlobal();

    const [galleryStatus, setGalleryStatus] = useState<boolean>(false);
    const [galleryImages, setGalleryImages] = useState<string[]>([]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [incomingIndex, setIncomingIndex] = useState<number | null>(null);

    const [direction, setDirection] = useState<Direction>("next");

    const isAnimating = incomingIndex !== null;

    const containerRef = useRef<HTMLDivElement | null>(null);
    const elementRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const elements = elementRefs.current[currentIndex];

        if (!elements) return;

        elements.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    }, [currentIndex]);

    const next = () => {
        if (isAnimating) return;

        const nextIndex = (currentIndex + 1) % galleryImages.length;

        setDirection("next");
        setIncomingIndex(nextIndex);
    };

    const previous = () => {
        if (isAnimating) return;

        const previousIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;

        setDirection("prev");
        setIncomingIndex(previousIndex);
    };

    const set = (setIndex: number) => {
        if (isAnimating) return;

        setCurrentIndex(setIndex % galleryImages.length);
    };

    const handleAnimationEnd = () => {
        if (incomingIndex === null) return;

        setCurrentIndex(incomingIndex);
        setIncomingIndex(null);
    };

    const createGallery = (images: string[]) => {
        disableBodyOverflow();

        setCurrentIndex(0);

        setGalleryImages(images);
        setGalleryStatus(true);
    };

    const removeGallery = () => {
        setGalleryStatus(false);
        setGalleryImages([]);

        enableBodyOverflow();
    };

    return (
        <GalleryContext.Provider value={{ createGallery }}>
            {galleryStatus && galleryImages.length && (
                <div className="w-full fixed inset-0 bg-black/80 z-50 py-5 px-2 lg:px-8 flex items-center justify-center overflow-auto">
                    {/* Gallery Container */}
                    <div className="w-full bg-cream rounded-lg">
                        {/* Heading */}
                        <div className="flex items-center justify-between bg-cream-soft border-b border-b-border-light rounded-lg py-2 px-5">
                            <h1 className="text-xl text-ink cursor-default">
                                Gallery - {currentIndex + 1} of {galleryImages.length}
                            </h1>
                            <div
                                className="text-sm text-muted bg-transparent p-2 rounded-full cursor-pointer hover:text-muted-light hover:bg-bg-dark/30 transition-all duration-100 ease-in"
                                onClick={removeGallery}
                            >
                                <X />
                            </div>
                        </div>

                        {/* Image */}
                        <div className="w-full flex items-center justify-center p-2">
                            <div className="w-full max-w-5xl">
                                {/* Main Container Slider */}
                                <div className="relative w-full h-full rounded-lg overflow-hidden">
                                    {/* Image container */}
                                    <div className="relative aspect-video">
                                        {/* Current / Old Image */}
                                        <div
                                            className={
                                                isAnimating
                                                    ? direction === "next"
                                                        ? "image-slide-out-left"
                                                        : "image-slide-out-right"
                                                    : "absolute inset-0"
                                            }
                                        >
                                            <Image
                                                src={galleryImages[currentIndex]}
                                                alt={`Image ${currentIndex + 1}`}
                                                fill
                                                sizes="(min-width: 1024px) 1024px, calc(100vw - 32px)"
                                                className="object-cover"
                                                priority
                                            />
                                        </div>

                                        {/* Incoming / New Image */}
                                        {incomingIndex !== null && (
                                            <div
                                                onAnimationEnd={handleAnimationEnd}
                                                className={
                                                    direction === "next" ? "image-slide-in-right" : "image-slide-in-left"
                                                }
                                            >
                                                <Image
                                                    src={galleryImages[incomingIndex]}
                                                    alt={`Image ${incomingIndex + 1}`}
                                                    fill
                                                    sizes="(min-width: 1024px) 1024px, calc(100vw - 32px)"
                                                    className="object-cover"
                                                />
                                            </div>
                                        )}

                                        <div className="w-full absolute top-1/2 -translate-y-1/2 flex items-center justify-between">
                                            {/* Prev */}
                                            <button
                                                className="flex items-center justify-center ms-5 bg-bg-light/80 p-3 rounded-full text-muted cursor-pointer hover:bg-white hover:text-ink transition-all duration-75 ease-in"
                                                onClick={previous}
                                                disabled={isAnimating}
                                            >
                                                <ChevronLeft />
                                            </button>

                                            {/* Next */}
                                            <button
                                                className="flex items-center justify-center me-5 bg-bg-light/80 p-3 rounded-full text-muted cursor-pointer hover:bg-white hover:text-ink transition-all duration-75 ease-in"
                                                onClick={next}
                                                disabled={isAnimating}
                                            >
                                                <ChevronRight />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* List images */}
                        <div
                            ref={containerRef}
                            className="w-full bg-cream-soft py-5 px-2 border-t border-t-border-light overflow-x-auto"
                        >
                            <div className="w-max min-w-full flex items-center justify-center gap-x-2">
                                {galleryImages.map((img, index) => (
                                    <div
                                        ref={(el) => {
                                            elementRefs.current[index] = el;
                                        }}
                                        className={`relative shrink-0 w-20 h-12 lg:w-35 lg:h-18 2xl:w-50 2xl:h-32 border-2 ${currentIndex === index ? "border-green-600 opacity-90" : "border-transparent opacity-50"} rounded-lg overflow-hidden hover:opacity-90 hover:border-blue-600 cursor-pointer`}
                                        key={index}
                                        onClick={() => set(index)}
                                    >
                                        <Image
                                            src={img}
                                            alt={`Gallery image ${index + 1}`}
                                            className="object-cover"
                                            fill
                                            sizes="(min-width: 1536px) 200px, (min-width: 1024px) 140px, 80px"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {children}
        </GalleryContext.Provider>
    );
}
