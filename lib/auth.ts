import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { nextCookies } from "better-auth/next-js";
import { customSessionClient } from "better-auth/client/plugins";
import { customSession } from "better-auth/plugins";

const appUrl = process.env.APP_URL;

if (!appUrl) {
    throw Error("APP_URL is not defined");
}

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: false,
    },
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
    account: {
        accountLinking: {
            enabled: false,
            // disableImplicitLinking: true,
        },
    },
    user: {
        additionalFields: {
            phoneNumber: {
                type: "string",
                required: false,
            },
            countryName: {
                type: "string",
                required: false,
            },
            gender: {
                type: "number",
            },
        },
    },
    trustedOrigins: [appUrl],
    plugins: [
        customSession(async ({ user, session }) => {
            const account = await prisma.account.findFirst({
                where: {
                    userId: user.id,
                },
                select: {
                    providerId: true,
                },
            });

            return {
                user: {
                    ...user,
                    authProvider: account?.providerId ?? null,
                },
                session,
            };
        }),
        nextCookies(),
    ],
});
