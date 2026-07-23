import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/config/product";

export const metadata: Metadata = { title: `${siteConfig.name} — 在线图片压缩`, description: siteConfig.description };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="zh-CN"><body><Header /><main>{children}</main><Footer /></body></html>; }
