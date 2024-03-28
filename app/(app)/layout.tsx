import AuthNav from "../components/auth/auth-nav";
import { getSession } from "../lib/actions";

export default async function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    
    const session = await getSession()

    return (
      <main className="w-full min-h-screen bg-[#111] flex items-center flex-col">
        {/* Login user */}
        <AuthNav currrentSession={JSON.stringify(session)} />


        {children}
      </main>
    );
  }