import type { Metadata } from "next";
import "./globals.css";

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
        style={{ backgroundImage: 'url(/images/background.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
      >
        {children}
      </body>
    </html>
  );
}
