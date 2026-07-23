import Link from "next/link";
import { ImageCompressor } from "@/components/ImageCompressor";
import { UpgradeButton } from "@/components/UpgradeButton";
import { product } from "@/config/product";

export default function Home() { return <><section className="hero container"><p className="eyebrow">简单、私密、免费</p><h1>让图片变小，<br />不牺牲你的隐私。</h1><p className="lead">TinyShrink 在你的浏览器中压缩图片。文件不会离开你的设备。</p><ImageCompressor /></section><section className="plans container"><div><p className="eyebrow">选择适合你的方式</p><h2>从免费开始。</h2><p>免费版已包含单张图片压缩和下载所需的一切。</p><Link href="/pricing" className="text-link">查看版本对比 →</Link></div><article className="pro-card"><span className="pill">PRO</span><h3>{product.name}</h3><p>批量处理、更大文件与压缩历史，留待后续上线。</p><strong className="price">${product.price} <small>一次性购买</small></strong><UpgradeButton /></article></section></> }
