import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shilva Damayanti Santoso | Portfolio",
  description:
    "Personal portfolio of Shilva Damayanti Santoso — Information Systems & Technology student and UI/UX Designer passionate about human-centred design.",
  keywords: ["UI/UX Design", "Portofolio", "Sistem Informasi", "HCI", "Shilva Damayanti"],
  authors: [{ name: "Shilva Damayanti Santoso" }],
  openGraph: {
    title: "Shilva Damayanti Santoso | Portfolio",
    description: "UI/UX Designer & Information Systems student — crafting intuitive, beautiful digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAFAFA]">{children}</body>
    </html>
  );
}
