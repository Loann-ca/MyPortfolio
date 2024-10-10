import type { Metadata } from "next";
import { Urbanist } from 'next/font/google';
import "./globals.css";

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '700'], // Especifica los pesos que necesitas
});

export const metadata: Metadata = {
  title: "Loann's page",
  description: "My personal page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={urbanist.className}
      >
        {children}
      </body>
    </html>
  );
}
