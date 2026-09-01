"use client";

import { useState } from "react";

type SliderPriceTypes = {
    min?: number;
    max?: number;
    step?: number;
};

function SliderPriceRange({ min = 1, max = 100, step = 1 }: SliderPriceTypes) {
    const [minValue, setMinValue] = useState(min);
    const [maxValue, setMaxValue] = useState(max);

    const updateMinValue = (value: number) => {
        if (value >= maxValue) {
            setMinValue(maxValue - step);
        } else {
            setMinValue(value);
        }
    };

    const updateMaxValue = (value: number) => {
        if (value <= minValue) {
            setMaxValue(minValue + step);
        } else {
            setMaxValue(value);
        }
    };

    const range = max - min;

    const left = ((minValue - min) / range) * 100;
    const right = ((maxValue - min) / range) * 100;

    return (
        <div className="relative w-full max-w-md space-y-2">
            <div className="relative h-5">
                <div className="w-full absolute top-1/2 -translate-y-1/2 h-[0.5] rounded-full bg-black/10" />

                <div
                    className="absolute top-1/2 -translate-y-1/2 h-1 rounded-full bg-gold-light"
                    style={{
                        left: `${left}%`,
                        right: `${100 - right}%`,
                    }}
                />

                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={minValue}
                    onChange={(e) => updateMinValue(Number(e.target.value))}
                    className="pointer-events-none absolute inset-0 h-5 w-full appearance-none bg-transparent
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:h-4
            [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-gold-light
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-moz-range-thumb]:pointer-events-auto
            [&::-moz-range-thumb]:h-4
            [&::-moz-range-thumb]:w-4
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:border-2
            [&::-moz-range-thumb]:border-black
            [&::-moz-range-thumb]:bg-white
            [&::-moz-range-thumb]:cursor-pointer"
                />

                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={maxValue}
                    onChange={(e) => updateMaxValue(Number(e.target.value))}
                    className="pointer-events-none absolute inset-0 h-5 w-full appearance-none bg-transparent
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:h-4
            [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-gold-light
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-moz-range-thumb]:pointer-events-auto
            [&::-moz-range-thumb]:h-4
            [&::-moz-range-thumb]:w-4
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:border-2
            [&::-moz-range-thumb]:border-black
            [&::-moz-range-thumb]:bg-red-500
            [&::-moz-range-thumb]:cursor-pointer"
                />
            </div>

            <div className="flex items-center justify-between text-xs font-medium text-muted">
                <span>${minValue}</span>
                <span>${maxValue}</span>
            </div>
        </div>
    );
}

export default SliderPriceRange;
