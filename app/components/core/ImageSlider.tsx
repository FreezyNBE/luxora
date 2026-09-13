"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Direction = "next" | "prev";

type ImageSliderTypes = {
    showCounting?: boolean;
};

export default function ImageSlider({ showCounting = true }: ImageSliderTypes) {
    const images = ["/img/hero.png", "/img/img1.jpg", "/img/img2.jpg", "/img/img3.jpg", "/img/img4.jpg", "/img/img5.jpg"];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [incomingIndex, setIncomingIndex] = useState<number | null>(null);

    const [direction, setDirection] = useState<Direction>("next");

    const isAnimating = incomingIndex !== null;

    const next = () => {
        if (isAnimating) return;

        const nextIndex = (currentIndex + 1) % images.length;

        setDirection("next");
        setIncomingIndex(nextIndex);
    };

    const previous = () => {
        if (isAnimating) return;

        const previousIndex = (currentIndex - 1 + images.length) % images.length;

        setDirection("prev");
        setIncomingIndex(previousIndex);
    };

    const handleAnimationEnd = () => {
        if (incomingIndex === null) return;

        setCurrentIndex(incomingIndex);
        setIncomingIndex(null);
    };

    return (
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
                        src={images[currentIndex]}
                        alt={`Image ${currentIndex + 1}`}
                        fill
                        sizes="(max-width: 1536px) 100vw, 100%"
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Incoming / New Image */}
                {incomingIndex !== null && (
                    <div
                        onAnimationEnd={handleAnimationEnd}
                        className={direction === "next" ? "image-slide-in-right" : "image-slide-in-left"}
                    >
                        <Image
                            src={images[incomingIndex]}
                            alt={`Image ${incomingIndex + 1}`}
                            fill
                            sizes="(max-width: 1536px) 100vw, 100%"
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

                {/* Counting */}
                {showCounting && (
                    <div className="absolute bottom-5 left-5">
                        <div className="bg-bg-dark/50 border border-border-light/50 rounded-lg px-6 py-2">
                            <span className="text-white tracking-widest">
                                {currentIndex + 1}/{images.length}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
