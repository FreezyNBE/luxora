"use client";
import { UserSettingsUpdateRes } from "@/app/api/user/profile/route";
import { AlertError } from "@/app/components/alert/AlertError";
import { AlertInfo } from "@/app/components/alert/AlertInfo";
import { AlertLoading } from "@/app/components/alert/AlertLoading";
import { AlertSuccess } from "@/app/components/alert/AlertSuccess";
import { ButtonSave } from "@/app/components/misc/Button";
import { useCurrentSession } from "@/lib/auth-session";
import { CustomAlertType } from "@/types/_custom_alerts";
import { letterCapitalize } from "@/utils/_functions";
import { MAX_NAME_LENGTH, MIN_NAME_LENGTH } from "@/utils/_new_account_fields";
import { API_URL } from "@/utils/_variables";
import { countryList } from "@/utils/list_countries";
import { LoaderCircle, MapPinned, Phone, SquarePen, User } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

export type UserSettingsDataUpd = {
    name: string;
    email: string;
    phoneNumber: string | null;
    country: string;
    gender: number;
};

export default function ProfilePage() {
    const session = useCurrentSession();
    if (!session) return;

    const [initialSettings, setInitialSettings] = useState<UserSettingsDataUpd>({
        name: session.user.name,
        email: session.user.email,
        phoneNumber: session.user.phoneNumber ?? "",
        country: session.user.countryName ?? "",
        gender: session.user.gender,
    });

    const [userSettings, setUserSettings] = useState<UserSettingsDataUpd>(initialSettings);

    const [loading, setLoading] = useState<boolean>(false);
    const [status, setStatus] = useState<CustomAlertType>({
        success: false,
        error: false,
        message: "",
    });

    const hasChanges =
        userSettings.name !== initialSettings.name ||
        userSettings.email !== initialSettings.email ||
        userSettings.phoneNumber !== initialSettings.phoneNumber ||
        userSettings.country !== initialSettings.country ||
        userSettings.gender !== initialSettings.gender;

    const saveSettings = async () => {
        if (loading) return;
        if (!hasChanges) {
            toast("There are no changes to be made.", { duration: 3000 });
            return;
        }

        setLoading(true);

        try {
            const request = await fetch(`${API_URL}/user/profile`, {
                method: "POST",
                body: JSON.stringify({
                    _userId: session.user.id,
                    _data: userSettings,
                }),
            });

            const result = (await request.json()) as UserSettingsUpdateRes;

            if (result.error) {
                setStatus({
                    success: false,
                    error: true,
                    message: result.error ?? "Failed to update the settings.",
                });
                return;
            }

            setInitialSettings(userSettings);

            setStatus({
                success: true,
                error: false,
                message: result.message ?? "Settings saved.",
            });
        } catch {
            setStatus({
                success: false,
                error: true,
                message: "Failed to update the settings.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full space-y-5">
            <div className="w-fit relative block text-lg font-medium tracking-wide group cursor-pointer">
                <span>My Profile</span>
                <div className="absolute bottom-0 w-0 group-hover:w-full h-0.5 bg-gold-light transition-all duration-300 ease-in" />
            </div>

            {loading && <AlertLoading>Updating settings...</AlertLoading>}

            {status.success && (
                <AlertSuccess closeBtn={() => setStatus({ success: false, error: false })}>{status.message}</AlertSuccess>
            )}

            {status.error && (
                <AlertError closeBtn={() => setStatus({ success: false, error: false })}>{status.message}</AlertError>
            )}

            {session.user.authProvider && session.user.authProvider !== "credential" && (
                <AlertInfo>
                    You are signed in using a provider (
                    <span className="font-semibold">{letterCapitalize(session.user.authProvider)}</span>).
                </AlertInfo>
            )}

            {/* Fields */}
            <div>
                <div className="grid grid-cols-1 gap-x-2 gap-y-5 pb-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-semibold">
                            Full Name
                        </label>
                        <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                            <User size={"1.35rem"} className="text-gray-800/70" />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                placeholder="Your Full Name"
                                autoComplete="true"
                                min={MIN_NAME_LENGTH}
                                max={MAX_NAME_LENGTH}
                                value={userSettings.name}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                    setUserSettings((prev) => {
                                        return { ...prev, name: event.target.value };
                                    })
                                }
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-semibold">
                            Email Address
                        </label>
                        <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                            <User size={"1.35rem"} className="text-gray-800/70" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                placeholder="Your Email address"
                                autoComplete="true"
                                value={userSettings.email}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                    setUserSettings((prev) => {
                                        return { ...prev, email: event.target.value };
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone_number" className="text-sm font-semibold">
                            Phone Number
                        </label>
                        <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                            <Phone size={"1.35rem"} className="text-gray-800/70" />
                            <input
                                type="text"
                                id="phone_number"
                                name="phone_number"
                                className="w-full outline-none text-ink text-sm placeholder:font-medium font-semibold"
                                placeholder="+0 000 000 000"
                                autoComplete="true"
                                value={userSettings.phoneNumber ?? ""}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                    setUserSettings((prev) => {
                                        return { ...prev, phoneNumber: event.target.value };
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="gender" className="text-sm font-semibold">
                            Gender
                        </label>
                        <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                            <User size={"1.35rem"} className="text-gray-800/70" />
                            <select
                                id="gender"
                                name="gender"
                                autoComplete="gender"
                                className="w-full text-muted"
                                value={userSettings.gender}
                                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                                    setUserSettings((prev) => {
                                        return { ...prev, gender: Number(event.target.value) };
                                    });
                                }}
                            >
                                <option value="0">Male</option>
                                <option value="1">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="country" className="text-sm font-semibold">
                            Country
                        </label>
                        <div className="w-full max-w-lg py-2 px-4 flex items-center gap-x-3 p-2 border border-border-light rounded-lg">
                            <MapPinned size={"1.35rem"} className="text-gray-800/70" />
                            <select
                                id="country"
                                name="country"
                                autoComplete="country"
                                className="w-full text-muted"
                                value={userSettings.country}
                                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                                    setUserSettings((prev) => {
                                        if (countryList.includes(event.target.value)) {
                                            return { ...prev, country: event.target.value };
                                        }
                                        return prev;
                                    });
                                }}
                            >
                                {countryList.map((country, index) => (
                                    <option key={index} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                {!loading ? (
                    <ButtonSave
                        onClick={saveSettings}
                        disabled={loading || !hasChanges}
                        className="flex items-center justify-center gap-2 bg-gold-light/30 hover:bg-gold-dark/30"
                    >
                        <SquarePen size={"1.2rem"} className="text-gold" />
                        <span className="text-gold font-medium text-xs">Save</span>
                    </ButtonSave>
                ) : (
                    <ButtonSave disabled className="flex items-center justify-center gap-2 bg-gold-dark/30">
                        <LoaderCircle size={"1.2rem"} className="text-gold animate-spin" />
                        <span className="text-gold font-medium text-xs">Saving...</span>
                    </ButtonSave>
                )}
            </div>
        </div>
    );
}
