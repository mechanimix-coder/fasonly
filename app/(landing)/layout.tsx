import Footer from "@/component/landing/Footer";
import Header from "@/component/landing/Header";
import License from "@/component/landing/License";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fasonly",
  themeColor: "#0e1932",
  description: "New Generation Production",
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
