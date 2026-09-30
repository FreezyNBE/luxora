// Better-Auth: Client Session Hydration Checks
"use client";

import { useInitialSession } from "@/app/context/AuthSessionProvider";
import { authClient } from "./auth-client";

export function useCurrentSession() {
    const initialSession = useInitialSession();
    const { data, isPending, isRefetching } = authClient.useSession();
    return isPending && !isRefetching ? initialSession : data;
}
