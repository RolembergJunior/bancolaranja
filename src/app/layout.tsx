import type { Metadata } from "next";
import "./globals.css";
import Provider from "./ThemeProvider";

export const metadata: Metadata = {
  title: "Banco Laranja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F6F6FB] dark:bg-[#15181F]"> 
        <Provider>{children}</Provider>        
      </body>
    </html>
  );
}
