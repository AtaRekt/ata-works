import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "..//globals.css";
import { cn } from "@/lib/utils";

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mustafa Ata ÇAĞLAYAN | Full Stack Developer",
  description: "Full Stack Developer specializing in Next.js, React, and modern web technologies",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background antialiased",
        inter.className
      )}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
