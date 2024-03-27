import AuthNav from "../components/auth/auth-nav";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="w-full min-h-screen bg-[#111] flex items-center flex-col">
        {/* Login user */}
        <AuthNav />


        {children}
      </main>
    );
  }