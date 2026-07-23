import Link from "next/link";
import { siteConfig } from "@/config/product";

export function Footer() {
  return <footer className="footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} {siteConfig.name}</span><div><Link href="/privacy">隐私政策</Link><Link href="/terms">服务条款</Link><Link href="/refund">退款政策</Link><Link href="/contact">联系</Link></div></div></footer>;
}
