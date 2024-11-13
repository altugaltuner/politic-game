import type { Metadata } from "next";
import "./globals.css";
import { UserProvider } from "@/contexts/usernameContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { VolumeProvider } from "@/contexts/VolumeContext";

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
        <VolumeProvider>
          <ThemeProvider>
            <UserProvider>
              {children}
            </UserProvider>
          </ThemeProvider>
        </VolumeProvider>
      </body>
    </html>
  );
}
