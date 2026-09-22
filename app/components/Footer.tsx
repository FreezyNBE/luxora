import { Gem, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

function Footer() {
    return (
        <footer className="w-full bg-brown-dark text-ligher overfow-hidden">
            <div className="grid grid-cols-1 min-[445px]:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-5 p-5">
                <div className="space-y-5">
                    <h1 className="flex items-center gap-1 text-xl font-bold cursor-default text-white">
                        <Gem size={"1.1rem"} className="text-gold-light" />
                        <span>Luxora</span>
                    </h1>
                    <p className="max-md:max-w-38 max-w-60 text-sm text-ligher">
                        Experience luxury and comfort like never before. We look forward to welcoming you.
                    </p>
                </div>
                <div className="space-y-5">
                    <h1 className="text-white cursor-default uppercase tracking-wider">Quick Links</h1>
                    <div className="inline-block space-y-2 text-sm">
                        <Link href={"/"} className="block min-border hover:text-gold-light">
                            Home
                        </Link>
                        <Link href={"/"} className="block min-border hover:text-gold-light">
                            Rooms
                        </Link>
                        <Link href={"/"} className="block min-border hover:text-gold-light">
                            Facilities
                        </Link>
                        <Link href={"/"} className="block min-border hover:text-gold-light">
                            Offers
                        </Link>
                        <Link href={"/"} className="block min-border hover:text-gold-light">
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="space-y-5">
                    <h1 className="text-white cursor-default uppercase tracking-wider">Policies</h1>
                    <div className="inline-block space-y-2 text-sm">
                        <Link href={"/"} className="block min-border hover:text-gold-light">
                            Privacy Policy
                        </Link>
                        <Link href={"/"} className="block min-border hover:text-gold-light">
                            Terms &#038; Conditions
                        </Link>
                        <Link href={"/"} className="block min-border hover:text-gold-light">
                            Cancelation Policy
                        </Link>
                        <Link href={"/"} className="block min-border hover:text-gold-light">
                            Refund Policy
                        </Link>
                    </div>
                </div>
                <div className="space-y-5">
                    <h1 className="text-white cursor-default uppercase tracking-wider">Contact Us</h1>
                    <div className="inline-block space-y-2 text-sm">
                        <div className="space-x-2 max-w-52 cursor-pointer min-border hover:text-gold-light">
                            <MapPin size={"1.5rem"} className="inline-block align-middle" />
                            <span>123 Ocean Drive, Cityville, State 12345</span>
                        </div>
                        <div className="space-x-2 max-w-52 cursor-pointer min-border hover:text-gold-light">
                            <Phone size={"1.2rem"} className="inline-block align-middle" />
                            <span>+1 234 567 890</span>
                        </div>
                        <div className="space-x-2 max-w-52 cursor-pointer min-border hover:text-gold-light">
                            <Mail size={"1.2rem"} className="inline-block align-middle" />
                            <span>luxora@example.com</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-5">
                    <h1 className="text-white cursor-default uppercase tracking-wider">Newsletter</h1>
                    <span className="block w-full max-w-54 text-sm">
                        Subscribe to get special offers and travel inspiration.
                    </span>
                    <div className="flex items-center text-sm">
                        <div className="w-58 border border-r-0 border-border-dark p-2 rounded-lg rounded-r-none">
                            <input
                                type="text"
                                id="subscribe"
                                name="subscribe"
                                placeholder="Enter your email"
                                className="outline-none text-white placeholder:text-muted"
                            />
                        </div>
                        <label
                            htmlFor="subscribe"
                            className="uppercase py-2.25 px-4 bg-gold border-2 border-gold text-white tracking-wide font-medium text-xs rounded-lg rounded-l-none cursor-pointer hover:bg-blue-500 hover:border-blue-500 transition-all duration-75"
                        >
                            Subscribe
                        </label>
                    </div>
                </div>
            </div>
            <div className="text-center border-t border-t-gray-500/20 py-2">
                <div className="text-sm text-ligher">
                    &copy; {new Date().getFullYear()} - Luxora Hotel - <span className="text-gold">Project</span>.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
