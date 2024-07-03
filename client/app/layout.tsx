import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/ui/global.css";
import UseGlobalContext from "@/app/context/all-context-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Html Viewer",
  description: "Server base html renderer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <UseGlobalContext>{children}</UseGlobalContext>
      </body>
    </html>
  );
}
