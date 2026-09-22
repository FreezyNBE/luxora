import { Button } from "@/app/components/misc/Button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    const validUntil = new Date();
    validUntil.setDate(validUntil.getDate() + 1);

    return (
        <div className="w-full space-y-10 bg-cream">
            {/* Top */}
            <div className="relative w-full h-50">
                <img src="/img/hero.png" alt="Contact Us" className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 w-full h-full text-white">
                    <div className="h-full flex flex-col items-center justify-center gap-y-3">
                        <h1 className="text-5xl tracking-wide font-semibold">Contact Us</h1>
                        <span className="text-sm">
                            We'd love to hear from you. Reach out for inquites, reservations or feedback.
                        </span>
                    </div>
                </div>
            </div>

            <div className="w-full pb-10 px-5 lg:px-20 flex flex-col items-center justify-center gap-5">
                <div className="w-full flex items-start justify-center gap-x-5">
                    <div className="w-md h-100 p-4 border rounded-sm border-border-dark/20 space-y-5">
                        <h1 className="text-xl font-medium">Get in Touch</h1>
                        <div className="flex flex-col gap-y-5">
                            <div className="flex items-start gap-1">
                                <MapPin size={"1.25rem"} className="text-gold" />
                                <div className="flex flex-col ms-1">
                                    <span className="text-sm font-semibold text-ink">Address</span>
                                    <span className="text-muted-light font-medium text-sm">
                                        123 Ocean Drive, Cityville, State 12345
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-start gap-1">
                                <Phone size={"1.25rem"} className="text-gold" />
                                <div className="flex flex-col ms-1">
                                    <span className="text-sm font-semibold text-ink">Phone</span>
                                    <span className="text-muted-light font-medium text-sm">+1 234 567 890</span>
                                    <span className="text-muted-light font-medium text-sm">Mon - Sun, 8:00 AM - 6:00 PM</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-1">
                                <Mail size={"1.25rem"} className="text-gold" />
                                <div className="flex flex-col ms-1">
                                    <span className="text-sm font-semibold text-ink">Email</span>
                                    <span className="text-muted-light font-medium text-sm">luxora@example.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-md h-100 p-4 border rounded-sm border-border-dark/20 space-y-5">
                        <h1 className="text-xl font-medium">Send us a message</h1>
                        <div className="flex flex-col gap-y-5">
                            <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                                <input
                                    type="text"
                                    id="phone_number"
                                    name="phone_number"
                                    className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <div className="w-full">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={3}
                                    className="w-full max-w-lg max-h-30 py-2 px-4 flex items-start gap-x-3 p-2 border border-border-light rounded-lg outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                    placeholder="Your Message"
                                />
                            </div>
                            <Button className="w-full uppercase bg-gold">
                                <span className="uppercase">Send Message</span>
                            </Button>
                        </div>
                    </div>
                </div>
                {/* Map */}
                <div style={{ width: "100%", height: "100%", maxHeight: "500px" }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91160.69871180676!2d25.938751066076037!3d44.437842321136024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucharest%2C%20Romania!5e0!3m2!1sen!2sbd!4v1695462069136!5m2!1sen!2sbd"
                        width="100%"
                        height="500"
                        style={{ border: "0px" }}
                        allowFullScreen={false}
                        aria-hidden="false"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
}
