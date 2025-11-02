import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // opcional: cria uma CSS variable
});

export const metadata: Metadata = {
  title: "Gestor de Notas",
  description: "Mais produtividade para alunos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-linear-to-br from-orange-50 to-orange-100`}
      >
        {children}
      </body>
    </html>
  );
}
