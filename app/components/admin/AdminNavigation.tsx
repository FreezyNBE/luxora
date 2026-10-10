"use client";

import { useGlobal } from "@/app/context/GlobalContext";
import {
    Bed,
    CalendarDays,
    ChevronRight,
    Gem,
    Home,
    LayoutList,
    Menu,
    Settings,
    SquareArrowOutUpRight,
    Tags,
    Target,
    User,
    Users,
    X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCurrentSession } from "@/lib/auth-session";

export default function AdminNavigation() {
    const { disableBodyOverflow, enableBodyOverflow } = useGlobal();
    const [navMobileStatus, setNavMobileStatus] = useState<boolean>(false);
    const [navMobileVisible, setNavMobileVisible] = useState<boolean>(false);
    const pathname = usePathname();
    const session = useCurrentSession();

    if (!session?.user) return;

    const openMenu = () => {
        setNavMobileVisible(true);

        requestAnimationFrame(() => {
            setNavMobileStatus(true);
            disableBodyOverflow();
        });
    };

    const closeMenu = (showAnimation: boolean = true) => {
        setNavMobileStatus(false);

        setTimeout(
            () => {
                setNavMobileVisible(false);
                enableBodyOverflow();
            },
            showAnimation ? 300 : 10,
        );
    };

    return (
        <>
            <nav className="hidden lg:block fixed inset-0 w-full max-w-(--navbar-admin-width) space-y-5 bg-cream-dark border-r border-r-border-gray py-2 text-gray-500 overflow-auto">
                <div className="w-full text-center py-2">
                    <h1 className="flex items-center justify-center gap-1 text-2xl tracking-widest cursor-default">
                        <Gem size={"1.5rem"} className="text-gold" />
                        <span>Luxora</span>
                    </h1>
                </div>
                <div className="w-full px-5">
                    <ul className="w-full space-y-1.5 pt-5 border-t border-t-border-gray">
                        <li
                            className={
                                pathname === "/admin"
                                    ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                    : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                            }
                        >
                            <Link href="/admin" className="block w-full">
                                <Home size={"1.25rem"} className="inline-block text-gold-dark" />
                                <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                                    Dashboard
                                </span>
                            </Link>
                        </li>
                        <li
                            className={
                                pathname.match("/admin/rooms")
                                    ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                    : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                            }
                        >
                            <Link href="/admin/rooms" className="block w-full">
                                <Bed size={"1.25rem"} className="inline-block text-gold-dark" />
                                <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                                    Rooms
                                </span>
                            </Link>
                        </li>
                        <li
                            className={
                                pathname.match("/admin/bookings")
                                    ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                    : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                            }
                        >
                            <Link href="/admin/bookings" className="block w-full">
                                <CalendarDays size={"1.25rem"} className="inline-block text-gold-dark" />
                                <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                                    Bookings
                                </span>
                            </Link>
                        </li>
                        <li
                            className={
                                pathname.match("/admin/guests")
                                    ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                    : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                            }
                        >
                            <Link href="/admin/guests" className="block w-full">
                                <Users size={"1.25rem"} className="inline-block text-gold-dark" />
                                <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                                    Guests
                                </span>
                            </Link>
                        </li>
                        <li
                            className={
                                pathname.match("/admin/offers")
                                    ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                    : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                            }
                        >
                            <Link href="/admin/offers" className="block w-full">
                                <Tags size={"1.25rem"} className="inline-block text-gold-dark" />
                                <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                                    Offers
                                </span>
                            </Link>
                        </li>
                        <li
                            className={
                                pathname.match("/admin/facilities")
                                    ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                    : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                            }
                        >
                            <Link href="/admin/facilities" className="block w-full">
                                <LayoutList size={"1.25rem"} className="inline-block text-gold-dark" />
                                <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                                    Facilities
                                </span>
                            </Link>
                        </li>
                        <li
                            className={
                                pathname.match("/admin/settings")
                                    ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                    : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                            }
                        >
                            <Link href="/admin/settings" className="block w-full">
                                <Settings size={"1.25rem"} className="inline-block text-gold-dark" />
                                <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                                    Settings
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Admin TopHeader */}
            <div className="absolute top-0 left-0 lg:left-(--navbar-admin-width) w-full lg:w-[calc(100%-var(--navbar-admin-width))] h-(--admin-header-height) flex items-center justify-center min-[470px]:justify-between px-5 py-2 bg-cream border-b border-b-border-gray">
                <h1 className="text-gray-500 tracking-widest cursor-default after-effect hover:text-gold transition-all duration-100">
                    {/* <Gem size={"1.5rem"} className="text-gold" />
                    <span>Luxora</span> */}
                    <div className="hidden min-[470px]:flex items-center gap-2">{renderCurrentPathname(pathname)}</div>
                </h1>
                <div className="max-[470px]:w-full flex items-center max-[470px]:justify-between gap-4">
                    <div className="lg:hidden p-1 rounded-md border border-transparent text-gray-500 hover:text-gold hover:rotate-90 hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-300">
                        <Menu size={"1.25rem"} onClick={() => (navMobileStatus ? closeMenu() : openMenu())} />
                    </div>
                    {session.user && (
                        <div className="flex items-center text-gray-500 gap-4">
                            <div className="hidden min-[470px]:block p-1 rounded-md border border-transparent text-gray-500 hover:text-gold hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100">
                                <Link href="/" target="_blank" className="flex items-center gap-2">
                                    <Gem size={"1.25rem"} />
                                    <span className="text-xs font-medium">Go to website</span>
                                </Link>
                            </div>
                            <div className="px-2 py-1.5 rounded-md border border-transparent font-medium text-sm text-gray-500 hover:text-gold hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100">
                                <Link href="/user/profile" target="_blank" className="flex items-center gap-2">
                                    <User size={"1.25rem"} />
                                    <span>{session.user.name}</span>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Navigation */}
            {navMobileVisible && (
                <div
                    onClick={() => closeMenu()}
                    className="lg:hidden w-full h-full fixed inset-0 bg-black/50 z-20 text-gray-500"
                >
                    <div
                        onClick={(event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation()}
                        className={`flex flex-col w-[calc(var(--navbar-admin-width)+2rem)] h-full bg-cream-dark border border-r-border-gray ${navMobileStatus ? "overflow-auto translate-x-0" : "overflow-hidden -translate-x-full"} transform duration-300 ease-in`}
                    >
                        <div className="w-full flex items-center justify-between text-center py-2 px-5">
                            <h1 className="flex items-center justify-center gap-1 text-2xl tracking-widest cursor-default">
                                <Gem size={"1.5rem"} className="text-gold" />
                                <span>Luxora</span>
                            </h1>
                            <div
                                onClick={() => closeMenu()}
                                className="p-1 rounded-md border border-transparent hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100"
                            >
                                <X size={"1.25rem"} className="text-gold-dark" />
                            </div>
                        </div>
                        <div className="w-full px-5">
                            <ul className="w-full space-y-1.5 pt-5 border-t border-t-border-gray">
                                <li
                                    className={
                                        pathname === "/admin"
                                            ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                            : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                                    }
                                >
                                    <Link href="/admin" className="block w-full">
                                        <Home size={"1.25rem"} className="inline-block text-gold-dark" />
                                        <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                                            Dashboard
                                        </span>
                                    </Link>
                                </li>
                                <li
                                    className={
                                        pathname.match("/admin/rooms/")
                                            ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                            : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                                    }
                                >
                                    <Link href="/admin/rooms" className="block w-full">
                                        <Bed size={"1.25rem"} className="inline-block text-gold-dark" />
                                        <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                                            Rooms
                                        </span>
                                    </Link>
                                </li>
                                <li
                                    className={
                                        pathname.match("/admin/bookings")
                                            ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                            : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                                    }
                                >
                                    <Link href="/admin/bookings" className="block w-full">
                                        <CalendarDays size={"1.25rem"} className="inline-block text-gold-dark" />
                                        <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                                            Bookings
                                        </span>
                                    </Link>
                                </li>
                                <li
                                    className={
                                        pathname.match("/admin/guests")
                                            ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                            : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                                    }
                                >
                                    <Link href="/admin/guests" className="block w-full">
                                        <Users size={"1.25rem"} className="inline-block text-gold-dark" />
                                        <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                                            Guests
                                        </span>
                                    </Link>
                                </li>
                                <li
                                    className={
                                        pathname.match("/admin/offers")
                                            ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                            : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                                    }
                                >
                                    <Link href="/admin/offers" className="block w-full">
                                        <Tags size={"1.25rem"} className="inline-block text-gold-dark" />
                                        <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                                            Offers
                                        </span>
                                    </Link>
                                </li>
                                <li
                                    className={
                                        pathname.match("/admin/facilities")
                                            ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                            : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                                    }
                                >
                                    <Link href="/admin/facilities" className="block w-full">
                                        <LayoutList size={"1.25rem"} className="inline-block text-gold-dark" />
                                        <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                                            Facilities
                                        </span>
                                    </Link>
                                </li>
                                <li
                                    className={
                                        pathname.match("/admin/settings")
                                            ? "p-2 bg-gray-400/10 border border-gray-400/20 rounded-md cursor-pointer transition-all duration-100 group"
                                            : "p-2 border border-transparent rounded-md hover:bg-gray-400/10 hover:border-gray-400/20 cursor-pointer transition-all duration-100 group"
                                    }
                                >
                                    <Link href="/admin/settings" className="block w-full">
                                        <Settings size={"1.25rem"} className="inline-block text-gold-dark" />
                                        <span className="inline-block align-middle ms-3 text-gray-500 text-sm group-hover:text-gold">
                                            Settings
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full h-full flex min-[470px]:hidden items-end">
                            <div className="text-sm flex flex-col items-center justify-center gap-2 bg-cream-soft border border-border-gray rounded-lg">
                                <div className="w-full h-30 rounded-md overflow-hidden">
                                    <img src="/img/hero.png" alt="Website Image" className="object-cover" />
                                </div>
                                <div className="w-full flex flex-col gap-3 p-1 pb-2">
                                    <span className="text-center">Manage your hotel easily and efficiently.</span>
                                    <Link
                                        href="/"
                                        target="_blank"
                                        className="w-full flex items-center justify-center gap-1 p-2 text-gray-500 bg-cream-soft border border-gray-500 hover:text-gold hover:bg-cream-dark hover:border-gold rounded-md"
                                    >
                                        <span>Go to Website</span>
                                        <ChevronRight size={"1.25rem"} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

function renderCurrentPathname(pathname: string) {
    if (pathname.match("/admin/rooms")) {
        return (
            <>
                <Bed size={"1.25rem"} />
                <span>Rooms</span>
            </>
        );
    }

    if (pathname.match("/admin/bookings")) {
        return (
            <>
                <CalendarDays size={"1.25rem"} />
                <span>Rooms</span>
            </>
        );
    }

    if (pathname.match("/admin/guests")) {
        return (
            <>
                <Users size={"1.25rem"} />
                <span>Guests</span>
            </>
        );
    }

    if (pathname.match("/admin/offers")) {
        return (
            <>
                <Tags size={"1.25rem"} />
                <span>Offers</span>
            </>
        );
    }

    if (pathname.match("/admin/facilities")) {
        return (
            <>
                <LayoutList size={"1.25rem"} />
                <span>Facilities</span>
            </>
        );
    }

    if (pathname.match("/admin/settings")) {
        return (
            <>
                <Settings size={"1.25rem"} />
                <span>Settings</span>
            </>
        );
    }

    return (
        <>
            <Home size={"1.25rem"} />
            <span>Dashboard</span>
        </>
    );
}
