import Navigation from "../components/website/Navigation";
import Footer from "../components/website/Footer";

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navigation />
            {children}
            <Footer />
        </>
    );
}
