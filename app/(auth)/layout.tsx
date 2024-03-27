
export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="w-full min-h-screen bg-[#111] flex items-center justify-center">
        {children}
      </main>
    );
  }