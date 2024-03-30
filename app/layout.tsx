import type { Metadata } from "next";

import "./globals.css";
import { ModalProvider } from "./providers/model-provider";
import { roboto_mono } from "./components/ui/fonts";

export const metadata: Metadata = {
  title: "Mindcraft AI",
  description:
    "Mindcraft AI is your ultimate AI workbench, empowering users to seamlessly craft intelligent solutions for a wide range of tasks. From creating chat sessions to scraping data, generating images, and offering assistance for projects, work, learning, and school, Mindcraft AI provides a versatile platform for innovation and productivity. With intuitive tools and cutting-edge technology, Mindcraft AI transforms ideas into reality, helping users unlock their full potential in the digital realm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>
        {children}
        <ModalProvider />
      </body>
    </html>
  );
}
