import { Button, ButtonAction, ButtonOutline } from "@/app/components/misc/Button";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="w-full space-y-10 bg-cream">
            <div className="w-full flex flex-col xl:flex-row">
                {/* Contact form */}
                <div className="w-full flex flex-col">
                    <div className="relative w-full h-50">
                        <img src="/img/hero.png" alt="Contact Us" className="w-full h-full object-cover" />

                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute inset-0 w-full h-full text-white">
                            <div className="h-full flex flex-col items-center justify-center gap-y-3 text-center">
                                <h1 className="text-5xl tracking-wide font-semibold">Contact Us</h1>
                                <span className="text-sm">
                                    We'd love to hear from you. Reach out for inquites, reservations or feedback.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex items-start justify-center gap-2 md:gap-5 px-5">
                        <div className="w-1/2 h-full space-y-3 border-r border-r-border-light py-10">
                            <div className="flex flex-col gap-y-5">
                                <div className="flex items-start gap-1">
                                    <MapPin size={"1.25rem"} className="text-gold shrink-0" />
                                    <div className="flex flex-col ms-1">
                                        <span className="text-sm font-semibold text-ink">Address</span>
                                        <span className="text-muted-light font-medium text-sm">
                                            123 Ocean Drive, Cityville, State 12345
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-1">
                                    <Phone size={"1.25rem"} className="text-gold shrink-0" />
                                    <div className="flex flex-col ms-1">
                                        <span className="text-sm font-semibold text-ink">Phone</span>
                                        <span className="text-muted-light font-medium text-sm">+1 234 567 890</span>
                                        <span className="text-muted-light font-medium text-sm">
                                            Mon - Sun, 8:00 AM - 6:00 PM
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-1">
                                    <Mail size={"1.25rem"} className="text-gold shrink-0" />
                                    <div className="flex min-w-0 flex-col ms-1">
                                        <span className="text-sm font-semibold text-ink">Email</span>
                                        <span className="text-muted-light font-medium text-sm break-all">
                                            luxora@example.com
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col items-center justify-center gap-y-3 pt-5">
                            <h1 className="text-center font-medium">Send us a message</h1>
                            <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div className="w-full w-full max-w-lg ">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={3}
                                    className="w-full max-w-lg min-h-20 max-h-30 py-2 px-4 flex items-start gap-x-3 p-2 border border-border-light rounded-lg outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                    placeholder="Your Message"
                                />
                            </div>
                            <ButtonAction className="w-full max-w-lg text-sm bg-cream-soft text-ink font-semibold border border-border-light hover:bg-cream-dark hover:border-transparent">
                                Send message
                            </ButtonAction>
                        </div>
                    </div>
                </div>
                {/* Map */}
                <div className="w-full flex">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91160.69871180676!2d25.938751066076037!3d44.437842321136024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucharest%2C%20Romania!5e0!3m2!1sen!2sbd!4v1695462069136!5m2!1sen!2sbd"
                        width="100%"
                        height="650"
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
