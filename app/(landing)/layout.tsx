import Footer from "@/component/landing/Footer";
import Header from "@/component/landing/Header";
import License from "@/component/landing/License";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Fasonly",
  description: "New Generation Production",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e1932", // Move your themeColor here
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full flex flex-col overflow-hidden">
      <Header />
      {children}
      <Footer />
      <License />
    </div>
  );
}
