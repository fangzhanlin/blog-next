import { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fontsource/maple-mono";
import "./globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import ThemeProvider from "@/components/global/ThemeProvider";
import { Toaster } from "@/components/ui/sonner"; // Import Toaster

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "l's Space",
  description: "Personal website of FZLin",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    types: {
      "application/rss+xml": [
        {
          url: "/api/rss",
          title: "Blog RSS Feed of kexu.win",
        },
      ],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-w-[320px] flex flex-col items-center justify-center w-full">
            <Header />
            {/* Add padding-top equal to header height to prevent overlap */}
            {/* Removed width constraints (w-5/6 md:w-2/3 lg:w-1/2) - Apply them in specific page layouts/pages where needed */}
            <div className="w-full mb-16 pt-[70px] px-4">{children}</div> {/* Use w-full and add some padding */}
            <Footer />
            <Toaster richColors /> {/* Add Toaster here */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
