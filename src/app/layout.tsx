import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'sonner';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

const outfit = Outfit({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Admin Tarrecards',
  description: 'Course rental cars by Tarrecards.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${outfit.variable} antialiased`}>
          <NextTopLoader color='#000' />
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
