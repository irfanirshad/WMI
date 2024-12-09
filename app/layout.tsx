import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { SiteHeader } from '@/components/layout/site-header';
import { COMPANY_NAME, SITE_DESCRIPTION } from '@/lib/constants';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: COMPANY_NAME,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ['medical equipment', 'industrial products', 'Saudi Arabia', 'medical supplies'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}