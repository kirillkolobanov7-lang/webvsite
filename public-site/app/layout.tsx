import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "LuffyReseller — торговля нового поколения", description: "AI-платформа для управления продажами на FunPay." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
