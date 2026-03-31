import localFont from "next/font/local";
import { Tajawal } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import BootstrapClient from "./BootstrapClient";
import AppProviders from "@/providers/AppProviders";
import ClientLayoutWrapper from "@/components/layout/ClientLayoutWrapper";

const axiforma = localFont({
  src: [
    {
      path: "../public/fonts/Axiforma-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Axiforma-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/Axiforma-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Axiforma-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/Axiforma-Book.ttf",
      weight: "350",
      style: "normal",
    },
    {
      path: "../public/fonts/Axiforma-BookItalic.ttf",
      weight: "350",
      style: "italic",
    },
    {
      path: "../public/fonts/Axiforma-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Axiforma-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Axiforma-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Axiforma-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/Axiforma-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Axiforma-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/Axiforma-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Axiforma-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Axiforma-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Axiforma-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/Axiforma-Heavy.ttf",
      weight: "850",
      style: "normal",
    },
    {
      path: "../public/fonts/Axiforma-HeavyItalic.ttf",
      weight: "850",
      style: "italic",
    },
    {
      path: "../public/fonts/Axiforma-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Axiforma-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-axiforma",
  display: "swap",
});

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
    <html lang="en">
      <body className={`${axiforma.variable} ${tajawal.variable}`}>
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