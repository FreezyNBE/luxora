import { Gem, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

function Footer() {
    return (
        <div className="flex flex-wrap lg:flex-nowrap items-start justify-around max-md:gap-y-8 bg-brown-dark text-muted-light p-5">
            <div className="max-md:flex-1/2 space-y-5">
                <h1 className="flex items-center gap-1 text-xl font-bold cursor-default text-white">
                    <Gem size={"1.1rem"} className="text-gold-light" />
                    <span>Luxora</span>
                </h1>
                <p className="max-md:max-w-38 max-w-60 text-sm text-muted-light">
                    Experience luxury and comfort like never before. We look forward to welcoming you.
                </p>
            </div>
            <div className="max-md:flex-1/2 space-y-5">
                <h1 className="text-white cursor-default uppercase">Quick Links</h1>
                <div className="inline-block space-y-4 text-sm">
                    <Link href={"/"} className="block hover:text-gold-light">
                        Home
                    </Link>
                    <Link href={"/"} className="block hover:text-gold-light">
                        Rooms
                    </Link>
                    <Link href={"/"} className="block hover:text-gold-light">
                        Facilities
                    </Link>
                    <Link href={"/"} className="block hover:text-gold-light">
                        Offers
                    </Link>
                    <Link href={"/"} className="block hover:text-gold-light">
                        Contact
                    </Link>
                </div>
            </div>
            <div className="max-md:flex-1/2 space-y-5">
                <h1 className="text-white cursor-default uppercase">Policies</h1>
                <div className="inline-block space-y-4 text-sm">
                    <Link href={"/"} className="block hover:text-gold-light">
                        Privacy Policy
                    </Link>
                    <Link href={"/"} className="block hover:text-gold-light">
                        Terms &#038; Conditions
                    </Link>
                    <Link href={"/"} className="block hover:text-gold-light">
                        Cancelation Policy
                    </Link>
                    <Link href={"/"} className="block hover:text-gold-light">
                        Refund Policy
                    </Link>
                </div>
            </div>
            <div className="max-md:flex-1/2 space-y-5">
                <h1 className="text-white cursor-default uppercase">Contact Us</h1>
                <div className="inline-block space-y-4 text-sm">
                    <div className="flex items-center gap-2 max-w-52 cursor-pointer hover:text-gold-light">
                        <MapPin size={"1.5rem"} />
                        <span>123 Ocean Drive, Cityville, State 12345</span>
                    </div>
                    <div className="flex items-center gap-2 max-w-52 cursor-pointer hover:text-gold-light">
                        <Phone size={"1.2rem"} />
                        <span>+1 234 567 890</span>
                    </div>
                    <div className="flex items-center gap-2 max-w-52 cursor-pointer hover:text-gold-light">
                        <Mail size={"1.2rem"} />
                        <span>info@luxorahotel.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
