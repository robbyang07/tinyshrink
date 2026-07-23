import { UpgradeButton } from "@/components/UpgradeButton";
import { product } from "@/config/product";
import Link from "next/link";
export default function PricingPage() { return <section className="container page"><p className="eyebrow">简单透明</p><h1>选择你的版本</h1><div className="pricing-grid"><article className="price-card"><h2>Free</h2><p className="price">$0</p><ul>{product.freeFeatures.map((x) => <li key={x}>✓ {x}</li>)}</ul><Link className="button button-outline" href="/">开始压缩</Link></article><article className="price-card featured"><span className="pill">PRO</span><h2>Pro</h2><p className="price">${product.price} <small>一次性购买</small></p><ul>{product.proFeatures.map((x) => <li key={x}>✓ {x}</li>)}</ul><UpgradeButton /></article></div></section> }
