import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/layout/header";
import { ReadingListsProvider } from "./context/ReadingListsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Tracker App",
  description: "Track your reading progress",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ReadingListsProvider>
          {children}
        </ReadingListsProvider>
      </body>
    </html>
  );
}
