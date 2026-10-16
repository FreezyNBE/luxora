import { CardContainer, CardHeader } from "@/app/components/core/Card";
import { CardNotice } from "@/app/components/core/CardNotice";
import { ButtonMin } from "@/app/components/misc/Button";
import { Input, Textarea } from "@/app/components/misc/Input";
import TopLayout from "@/app/components/TopLayout";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <TopLayout
                imgUrl="/img/hero.png"
                title="Contact Us"
                description="We'd love to hear from you. Reach out for inquites, reservations or feedback."
            />
            <div className="w-full bg-cream">
                <div className="w-full flex flex-col lg:flex-row">
                    {/* Contact form */}
                    <div className="w-full flex items-start justify-center">
                        <div className="w-full lg:max-w-200 space-y-5 px-5 lg:pt-5 max-lg:pb-5">
                            <CardContainer>
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <h1 className="text-xl font-medium text-ink">Send a message</h1>
                                    </div>
                                </CardHeader>
                                <div className="p-4 space-y-4">
                                    <div className="w-full flex flex-col gap-2">
                                        <Input
                                            type="email"
                                            id="email"
                                            name="email"
                                            autoComplete="email"
                                            placeholder="eg: alex.johnson@example.com"
                                            required
                                        >
                                            Email Address <span className="text-rose-700">*</span>
                                        </Input>
                                    </div>
                                    <div className="w-full flex flex-col gap-2">
                                        <Textarea
                                            id="message"
                                            name="message"
                                            autoComplete="off"
                                            placeholder="Enter a message you want to send us..."
                                            className="min-h-20 max-h-30"
                                            label={true}
                                            required
                                        >
                                            Message <span className="text-rose-700">*</span>
                                        </Textarea>
                                    </div>

                                    <ButtonMin width="btn-w-full">
                                        <div className="flex items-center justify-center gap-2">
                                            <Send size="1.25rem" />
                                            <span>Send Message</span>
                                        </div>
                                    </ButtonMin>
                                </div>
                            </CardContainer>

                            <CardContainer>
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <h1 className="text-xl font-medium text-ink">Contact Us</h1>
                                    </div>
                                </CardHeader>
                                <div className="p-4 space-y-3">
                                    <CardNotice title="Address" description="123 Ocean Drive, Cityville, State 12345">
                                        <MapPin size={"1.5rem"} />
                                    </CardNotice>
                                    <CardNotice title="Phone" description="+1 234 567 890 (Mon - Sun, 8:00 AM - 6:00 PM)">
                                        <Phone size={"1.5rem"} />
                                    </CardNotice>
                                    <CardNotice title="Email" description="luxora@example.com">
                                        <Mail size={"1.5rem"} />
                                    </CardNotice>
                                </div>
                            </CardContainer>
                        </div>
                    </div>
                    {/* Map */}
                    <div className="w-full h-full flex">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91160.69871180676!2d25.938751066076037!3d44.437842321136024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucharest%2C%20Romania!5e0!3m2!1sen!2sbd!4v1695462069136!5m2!1sen!2sbd"
                            width="100%"
                            height="800"
                            style={{ border: "0px" }}
                            allowFullScreen={false}
                            aria-hidden="false"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
