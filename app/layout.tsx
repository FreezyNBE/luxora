import type { Metadata } from "next";
import { Roboto_Condensed, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import GlobalContextProvider from "./context/GlobalContext";
import Footer from "./components/Footer";

const roboto = Roboto_Condensed({
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
        <html lang="en" className={`${roboto.variable} ${inter.variable} h-full antialiased`}>
            <GlobalContextProvider>
                <Navigation />
                {children}
                <Footer />
            </GlobalContextProvider>
        </html>
    );
}
