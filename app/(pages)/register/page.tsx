import RegisterComponent from "@/app/components/auth/Register";
import { getUserSession } from "@/lib/auth.server";
import { redirect } from "next/navigation";

export default async function RegisterPage() {
    const session = await getUserSession();

    if (session?.user) {
        return redirect("/");
    }

    return <RegisterComponent />;
}
