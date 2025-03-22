import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nova Tech | AI-Powered Project Management",
  description: "Nova Tech is an AI-powered project management tool that streamlines your workflow. Experience advanced AI task automation, real-time analytics, and seamless team collaboration.",
  metadataBase: new URL('https://nova-tech.vercel.app'),
  openGraph: {
    title: "Nova Tech | AI-Powered Project Management",
    description: "Streamline your workflow with Nova Tech, the future of AI-powered project management",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
