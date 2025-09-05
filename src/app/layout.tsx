import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";

const commissioner = localFont({
  src: "../../public/Commissioner-VariableFont.ttf",
});

export const metadata: Metadata = {
  title: "TC Tracker",
  description: "Track card prices and get notified!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${commissioner.className} antialiased bg-papaya flex flex-col items-center`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
