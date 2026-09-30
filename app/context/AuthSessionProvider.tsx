"use client";

import { authClient } from "@/lib/auth-client";
import { createContext, useContext } from "react";

type SessionType = typeof authClient.$Infer.Session;

type Props = {
    initialSession: SessionType | null;
    children: React.ReactNode;
};

type AuthContextTypes = {
    initialSession: SessionType | null;
};

const AuthSessionContext = createContext<AuthContextTypes | null>(null);

export default function AuthSessionProvider({ initialSession, children }: Props) {
    authClient.hydrateSession(initialSession);

    return <AuthSessionContext.Provider value={{ initialSession }}>{children}</AuthSessionContext.Provider>;
}

export function useInitialSession() {
    const context = useContext(AuthSessionContext);

    if (!context) {
        throw new Error("useInitialSession must be used inside AuthSessionProvider");
    }

    return context.initialSession;
}
