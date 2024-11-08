import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ModeToggle";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Proptext AI",
  description: "",
};

export default function RootLayout({ children, pageProps }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider {...pageProps}>
            <SidebarProvider>
              <AppSidebar />
              <div className="fixed right-2 top-2">
                <ModeToggle />
              </div>
              <main>
                <div className="fixed left-1 top-0 z-50">
                  <SidebarTrigger />
                </div>

                {children}
                <Toaster />
              </main>
            </SidebarProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
