import { UserSettingsDataUpd } from "@/app/(website)/user/profile/page";
import { getUserSession } from "@/lib/auth.server";
import { prisma } from "@/lib/prisma";
import { validateEmail } from "@/utils/_functions";
import { MAX_NAME_LENGTH, MIN_NAME_LENGTH } from "@/utils/_new_account_fields";
import { countryList } from "@/utils/list_countries";
import { NextRequest, NextResponse } from "next/server";

export type UserSettingsUpdateRes = {
    success?: boolean;
    message?: string;
    error?: string;
};

export type ExpectedBodyData = { _userId: string; _data: UserSettingsDataUpd };

export async function POST(request: NextRequest): Promise<NextResponse<UserSettingsUpdateRes>> {
    const session = await getUserSession();
    const { _userId: userId, _data: data }: ExpectedBodyData = await request.json();

    if (!session?.user || session.user.id !== userId) {
        return NextResponse.json({ error: "You are not authorized." }, { status: 401 });
    }

    if (data.name.length < MIN_NAME_LENGTH || data.name.length > MAX_NAME_LENGTH) {
        return NextResponse.json(
            { error: `Name length must be between ${MIN_NAME_LENGTH} - ${MAX_NAME_LENGTH} characters.` },
            { status: 422 },
        );
    }

    if (!validateEmail) {
        return NextResponse.json({ error: "You need to enter a valid email address." }, { status: 422 });
    }

    if (data.phoneNumber !== null) {
        if (data.phoneNumber.length < 10) {
            data.phoneNumber = null;
        } else if (!Number(data.phoneNumber)) {
            return NextResponse.json({ error: "Phone number must be numeric (eg: 0004447770)." }, { status: 422 });
        }

        if (data.phoneNumber && data.phoneNumber.length > 12) {
            return NextResponse.json({ error: "Phone number must not exeed 12 digits." }, { status: 422 });
        }
    }

    if (data.gender != 0 && data.gender != 1) {
        return NextResponse.json({ error: "Invalid gender selected." }, { status: 422 });
    }

    if (!countryList.includes(data.country)) {
        return NextResponse.json({ error: "Invalid country selected." }, { status: 422 });
    }

    try {
        const emailAlreadyExist = await prisma.user.findFirst({
            where: {
                email: data.email,
                NOT: { id: userId },
            },
        });

        if (emailAlreadyExist) {
            return NextResponse.json({ error: "This email address is taken." }, { status: 422 });
        }

        await prisma.user.update({
            where: {
                id: userId,
            },

            data: {
                name: data.name,
                email: data.email,
                phoneNumber: data.phoneNumber ?? null,
                countryName: data.country,
                gender: data.gender,
            },
        });

        return NextResponse.json({ success: true, message: "Profile settings updated." }, { status: 200 });
    } catch {
        return NextResponse.json({ error: "Something went wrong. We couldn't update your settings." }, { status: 401 });
    }
}
