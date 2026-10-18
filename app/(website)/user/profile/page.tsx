"use client";
import { UserSettingsUpdateRes } from "@/app/api/user/profile/route";
import { AlertError } from "@/app/components/alert/AlertError";
import { AlertInfo } from "@/app/components/alert/AlertInfo";
import { AlertLoading } from "@/app/components/alert/AlertLoading";
import { AlertSuccess } from "@/app/components/alert/AlertSuccess";
import BackButton from "@/app/components/min/BackButton";
import { ButtonSave } from "@/app/components/misc/Button";
import { Input, Select } from "@/app/components/misc/Input";
import { useCurrentSession } from "@/lib/auth-session";
import { CustomAlertType } from "@/types/_custom_alerts";
import { letterCapitalize } from "@/utils/_functions";
import { MAX_NAME_LENGTH, MIN_NAME_LENGTH } from "@/utils/_new_account_fields";
import { API_URL, GENDERS } from "@/utils/_variables";
import { countryList } from "@/utils/list_countries";
import { phonePrefixesByCountry } from "@/utils/phone_numbers";
import { LoaderCircle, SquarePen } from "lucide-react";
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
        <div className="w-full space-y-2">
            <BackButton url="/" text="Back to Home" />

            <div>
                <h1 className="text-3xl tracking-wide">My Profile</h1>
                <span className="text-gray-600 text-sm">Edit your profile informations.</span>
            </div>

            <div className="space-y-2">
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
            </div>

            {/* Fields */}
            <div className="w-full p-4 bg-cream border border-border-gray rounded-md">
                <div className="flex flex-col gap-5 pb-5">
                    <div className="w-full max-w-lg flex flex-col gap-2">
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            autoComplete="name"
                            placeholder="eg: Alex Johnson"
                            className="text-ink"
                            min={MIN_NAME_LENGTH}
                            max={MAX_NAME_LENGTH}
                            value={userSettings.name}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setUserSettings((prev) => {
                                    return { ...prev, name: event.target.value };
                                })
                            }
                            required
                        >
                            Full Name <span className="text-rose-700">*</span>
                        </Input>
                    </div>
                    <div className="w-full max-w-lg flex flex-col gap-2">
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="email"
                            placeholder="eg: alex.johnson@example.com"
                            className="text-ink"
                            value={userSettings.email}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setUserSettings((prev) => {
                                    return { ...prev, email: event.target.value };
                                })
                            }
                            required
                        >
                            Email Address <span className="text-rose-700">*</span>
                        </Input>
                    </div>
                    <div className="w-full max-w-lg flex flex-col gap-2">
                        <label htmlFor="phone_number" className="text-xs text-heading font-medium">
                            Phone Number
                        </label>
                        <div className="flex w-full">
                            <div className="w-45 py-2 px-4 flex items-center gap-x-3 p-2 border border-r-transparent border-border-gray rounded-md rounded-r-none focus-within:ring-[1.5px] focus-within:ring-gold-light transition-all duration-100">
                                <select
                                    id="phone_prefix"
                                    name="phone_prefix"
                                    autoComplete="off"
                                    className="w-full text-gray-500 text-sm font-medium"
                                >
                                    {phonePrefixesByCountry.map((prefix, index) => (
                                        <option key={index} value={prefix.code} className="w-fit">
                                            {prefix.shortname}:{prefix.code}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-full py-2 px-4 flex items-center gap-x-3 p-2 border border-border-gray rounded-md rounded-l-none focus-within:ring-[1.5px] focus-within:ring-gold-light transition-all duration-100">
                                <input
                                    type="text"
                                    id="phone_number"
                                    name="phone_number"
                                    className="w-full text-ink text-sm placeholder:text-gray-500/65 placeholder:text-xs placeholder:font-medium"
                                    placeholder="1234 567 890"
                                    autoComplete="tel"
                                    value={userSettings.phoneNumber ?? ""}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                        setUserSettings((prev) => {
                                            return { ...prev, phoneNumber: event.target.value };
                                        })
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-lg flex flex-col gap-2">
                        <Select id="gender" name="gender" options={GENDERS}>
                            Gender <span className="text-rose-700">*</span>
                        </Select>
                    </div>
                    <div className="w-full max-w-lg flex flex-col gap-2">
                        <Select
                            id="country"
                            name="country"
                            options={countryList}
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
                            Country <span className="text-rose-700">*</span>
                        </Select>
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
