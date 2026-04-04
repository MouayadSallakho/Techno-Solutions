import { Tajawal } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import BootstrapClient from "./BootstrapClient";
import AppProviders from "@/providers/AppProviders";
import ClientLayoutWrapper from "@/components/layout/ClientLayoutWrapper";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata = {
  title: "Techno Solutions",
  description: "Techno Solutions Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={tajawal.variable}>
        <AppProviders>
          <BootstrapClient />
          <ClientLayoutWrapper
            englishFont="font-english"
            arabicFont="font-arabic"
          >
            {children}
          </ClientLayoutWrapper>
        </AppProviders>
      </body>
    </html>
  );
}