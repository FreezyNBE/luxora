import type { Metadata } from "next";
import { Roboto_Condensed, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import GlobalContextProvider from "./context/GlobalContext";
import Footer from "./components/Footer";
import GalleryContextProvider from "./context/GalleryContext";
import AuthSessionProvider from "./context/AuthSessionProvider";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

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

export default async function RootLayout({ children }: LayoutProps<"/">) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    return (
        <html lang="en" className={`${roboto.variable} ${inter.variable} h-full antialiased`}>
            <AuthSessionProvider initialSession={session as any}>
                <GlobalContextProvider>
                    <GalleryContextProvider>
                        <Navigation />
                        {children}
                        <Footer />
                    </GalleryContextProvider>
                </GlobalContextProvider>
            </AuthSessionProvider>
        </html>
    );
}
