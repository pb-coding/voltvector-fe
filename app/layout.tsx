import { FC, ReactNode } from "react";
import { Inter } from "next/font/google";

import "./globals.css";
import AuthProvider from "@/global/auth/AuthProvider";
import ErrorHandlerProvider from "@/global/error/ErrorHandlerProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  // TODO: implement dark mode toggle
  const isDarkMode = true;
  const colorScheme = isDarkMode ? "dark" : "";

  return (
    <html lang="en" className={`${colorScheme}`}>
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.css"
          rel="stylesheet"
          as="style"
        />
      </head>
      <body className={inter.className}>
        <ErrorHandlerProvider>
          <AuthProvider>{children}</AuthProvider>
        </ErrorHandlerProvider>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js"
          defer
        />
      </body>
    </html>
  );
};

export default RootLayout;
