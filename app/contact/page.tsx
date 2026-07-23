import { siteConfig } from "@/config/product";
export default function ContactPage() { return <section className="container page narrow"><p className="eyebrow">联系我们</p><h1>需要帮助？</h1><p className="lead">请发送邮件至 <a className="text-link" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a></p></section>; }
