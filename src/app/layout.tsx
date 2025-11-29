import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AuthProvider } from "@/lib/firebase/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forensic AI Hub | AI-Powered Learning for Forensic Science Students",
  description: "Empower your forensic science education with AI tools. Learn how to leverage ChatGPT, Claude, and other AI assistants to master math, understand complex concepts, and build tech skills.",
  keywords: ["forensic science", "AI learning", "math help", "forensic careers", "Dexter", "blood spatter analysis", "George Mason University"],
  authors: [{ name: "Forensic AI Hub" }],
  openGraph: {
    title: "Forensic AI Hub | AI-Powered Learning for Forensic Science Students",
    description: "You don't need to be a math genius to master forensic science. Discover AI-powered tools and resources designed for students like you.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <AuthProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
// Force rebuild Fri Nov 28 22:32:11 EST 2025
