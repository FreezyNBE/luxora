import { ButtonAction } from "@/app/components/misc/Button";
import { MapPinned, Phone, SquarePen, User } from "lucide-react";

export default function ProfilePage() {
    return (
        <div className="w-full space-y-5">
            <div className="w-fit">
                <div className="relative block text-lg font-medium tracking-wide group cursor-pointer">
                    <span>My Profile</span>
                    <div className="absolute bottom-0 w-0 group-hover:w-full h-0.5 bg-gold transition-all duration-300 ease-in" />
                </div>
            </div>
            {/* Fields */}
            <div>
                <div className="grid grid-cols-1 gap-x-2 gap-y-5 pb-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-semibold">
                            Full name
                        </label>
                        <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                            <User size={"1.35rem"} className="text-gray-800/70" />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                placeholder="Your Full Name"
                                autoComplete="true"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-semibold">
                            Email address
                        </label>
                        <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                            <User size={"1.35rem"} className="text-gray-800/70" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                placeholder="Your Email address"
                                autoComplete="true"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone_number" className="text-sm font-semibold">
                            Phone number
                        </label>
                        <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                            <Phone size={"1.35rem"} className="text-gray-800/70" />
                            <input
                                type="text"
                                id="phone_number"
                                name="phone_number"
                                className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                placeholder="+0 000 000 000"
                                autoComplete="true"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="gender" className="text-sm font-semibold">
                            Gender
                        </label>
                        <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                            <User size={"1.35rem"} className="text-gray-800/70" />
                            <select className="w-full text-muted">
                                <option value="Masculine">Men</option>
                                <option value="Feminine">Women</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="country" className="text-sm font-semibold">
                            Country
                        </label>
                        <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                            <MapPinned size={"1.35rem"} className="text-gray-800/70" />
                            <input
                                type="text"
                                id="country"
                                name="country"
                                className="w-full max-w-72 outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                placeholder="Your country"
                                autoComplete="true"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-32 flex items-center justify-center gap-2 bg-gold-light/30 p-2 rounded-full cursor-pointer hover:bg-gold-dark/30 transition-all duration-75">
                    <SquarePen size={"1.2rem"} className="text-gold" />
                    <span className="text-gold font-medium text-xs">Save</span>
                </div>
            </div>
        </div>
    );
}
