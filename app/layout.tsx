import { FC, ReactNode } from "react";
import { Inter } from "next/font/google";

import "./globals.css";
import AuthProvider from "@/global/auth/AuthProvider";
import AlertProvider from "@/global/error/AlertProvider";
import Alert from "@/global/error/Alert";

const inter = Inter({ subsets: ["latin"] });

const environment = process.env.NEXT_PUBLIC_ENVIRONMENT ?? "missing";

export const metadata = {
  title: "VoltVector - Energy Management System - " + environment,
  description:
    "Energy Management System for users with solar systems from Enphase Energy.",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  // TODO: implement dark mode toggle
  const isDarkMode = true;
  const colorScheme = isDarkMode ? "dark" : "";

  // TODO: add webmanifest: <link rel="manifest" type="application/manifest+json" href="/site.webmanifest" />

  return (
    <html lang="en" className={`${colorScheme}`}>
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.css"
          rel="stylesheet"
          as="style"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" />
        <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" />
      </head>
      <body className={inter.className}>
        <AlertProvider>
          <Alert />
          <AuthProvider>{children}</AuthProvider>
        </AlertProvider>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js"
          defer
        />
      </body>
    </html>
  );
};

export default RootLayout;
