import Link from "next/link";
import { product } from "@/config/product";
export default function UpgradePage() { return <section className="container page narrow centered"><p className="eyebrow">TINYSHRINK PRO</p><h1>${product.price}，一次性购买</h1><p className="lead">批量压缩、更大的文件限制、一键下载全部结果和压缩历史记录。</p><div className="placeholder"><h2>在线支付功能正在接入中。</h2><p>此页面将用于后续接入真实的支付 Checkout。</p></div><Link className="button button-dark" href="/">返回产品首页</Link></section> }
