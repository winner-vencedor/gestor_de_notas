import { Sidebar } from "@/components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`antialiased bg-linear-to-br w-full min-h-screen flex from-orange-50 to-orange-100`}
    >
      <Sidebar />
      <main className="w-full">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
