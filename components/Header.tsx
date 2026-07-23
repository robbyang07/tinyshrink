import Link from "next/link";
import { siteConfig } from "@/config/product";

export function Header() {
  return <header className="header"><nav className="nav container" aria-label="主导航">
    <Link href="/" className="brand">{siteConfig.name}</Link>
    <div className="nav-links"><Link href="/pricing">定价</Link><Link href="/privacy">隐私</Link><Link href="/contact">联系</Link></div>
  </nav></header>;
}
