import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TypeScript Concepts",
  description: "Criado por Carlos Oliveira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <nav className="bg-yellow-800 p-3">
          <ul className="flex space-x-2 justify-between text-white">
            <li><a href='/'>Home</a></li>
            <li><a href='/intersection'>Intersection Types</a></li>
            <li><a href='/union'>Union Types</a></li>
            <li><a href='/generic'>Generic Types</a></li>
            <li><a href='/pick-omit'>Pick and Omit Utility Types</a></li>
            <li><a href='/record'>Record Utility Type</a></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
