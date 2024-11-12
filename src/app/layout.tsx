import type { Metadata } from "next";
import "./globals.css";
import { UserProvider } from "@/contexts/usernameContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
  title: "Cumhurbaşkanı Simulator",
  description: "Cumhurbaşkanı Simulator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className="bg-[#f5f5f5]"
        style={{
          backgroundImage: 'url(/images/background.webp)', backgroundSize: 'cover',
          backgroundRepeat: 'repeat'
        }}
      >
        <ThemeProvider>
          <UserProvider>
            {children}
          </UserProvider>
        </ThemeProvider>

      </body>
    </html>
  );
}
