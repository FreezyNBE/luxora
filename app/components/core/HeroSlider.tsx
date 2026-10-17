"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Direction = "next" | "prev";

type HeroSliderTypes = {
    images?: string[];
};

const imgs = [
    "/img/hero3.png",
    "/img/hero.png",
    "/img/hero2.png",
    "/img/img2.jpg",
    "/img/img3.jpg",
    "/img/img4.jpg",
    "/img/img5.jpg",
];

export default function HeroSlider({ images = imgs }: HeroSliderTypes) {
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

    useEffect(() => {
        if (isAnimating) return;

        const timeout = setTimeout(() => {
            next();
        }, 10000);

        return () => clearTimeout(timeout);
    }, [currentIndex, isAnimating]);

    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* Image container */}
            <div className="relative w-full h-full">
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
                    <img
                        src={images[currentIndex]}
                        alt={`Image ${currentIndex + 1}`}
                        className="w-full h-full aspect-video object-cover"
                    />
                </div>

                {/* Incoming / New Image */}
                {incomingIndex !== null && (
                    <div
                        onAnimationEnd={handleAnimationEnd}
                        className={direction === "next" ? "image-slide-in-right" : "image-slide-in-left"}
                    >
                        <img
                            src={images[incomingIndex]}
                            alt={`Image ${incomingIndex + 1}`}
                            className="w-full h-full aspect-video object-cover"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
