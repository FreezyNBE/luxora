import { getUserSession } from "@/lib/auth.server";
import AdminNavigation from "../components/admin/AdminNavigation";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    const session = await getUserSession();

    if (!session?.user || !session.user.isAdmin) {
        return redirect("/");
    }

    return (
        <div className="relative w-full min-h-screen flex">
            <AdminNavigation />
            <main className="min-w-0 flex-1 admin-main">
                <div className="px-5 pt-2 pb-5 space-y-2">{children}</div>
            </main>
        </div>
    );
}
