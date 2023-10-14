import { Header } from "@/components/navigation/header";
import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ModalProvider } from "@/providers/modal-provider";
import { ToastProvider } from "@/providers/toast-provider";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store front",
  description: "Store - The best store in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <ModalProvider />
          <ToastProvider />
          <Header />
          <main className="pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
