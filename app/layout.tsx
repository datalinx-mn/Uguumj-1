import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Өгөөмж Архад ХХК — Сэтгэлд хүрсэн амт",
  description:
    "Өгөөмж Архад ХХК — Монголын нарийн боов, хүнсний үйлдвэрлэгч. Уламжлалт жор, орчин үеийн үйлдвэрлэл.",
  icons: {
    icon: "/legacy/favicon.svg",
    shortcut: "/legacy/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/legacy/assets/index-CC0e9Jox.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
