import AdminNavigation from "../components/admin/AdminNavigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative w-full min-h-screen flex">
            <AdminNavigation />
            <main className="min-w-0 flex-1 admin-main">
                <div className="px-5 pt-2 pb-5 space-y-2">{children}</div>
            </main>
        </div>
    );
}
