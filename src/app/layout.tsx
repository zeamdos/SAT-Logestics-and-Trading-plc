import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ClientShell } from "@/components/ClientShell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAT Logistics & Trading PLC — End-to-End Supply Chain Solutions",
  description:
    "End-to-End Supply Chain Solutions & Commercial Trading Excellence. Operating primary multimodal corridors from Port of Djibouti to Mojo Dry Port and Addis Ababa.",
  keywords: [
    "SAT Logistics and Trading PLC",
    "Djibouti to Addis Ababa freight",
    "Ethiopia customs clearance",
    "Samuel Ayalew",
    "multimodal logistics Horn of Africa",
    "Fetele Building Wolo Sefer",
    "machinery import trading Ethiopia"
  ],
  icons: {
    icon: "/images/sat-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;600;700&family=Noto+Sans+Ethiopic:wght@300;400;600;700&family=Noto+Sans+SC:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-black font-sans">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
