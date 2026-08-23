import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    variable: "--font-heading",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-body",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Luxora",
    description: "A hotel booking website with a modern and elegant design, built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={`${cormorant.variable} ${inter.variable} h-full antialiased`}>
            <body className="relative min-h-full">
                <Navigation />
                {children}
            </body>
        </html>
    );
}
