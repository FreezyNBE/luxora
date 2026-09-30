import LoginComponent from "@/app/components/auth/Login";
import { getUserSession } from "@/lib/auth.server";
import { redirect } from "next/navigation";

export default async function LoginPage() {
    const session = await getUserSession();

    if (session?.user) {
        return redirect("/");
    }

    return <LoginComponent />;
}
