export default function PrivacyPage() { return <Legal title="隐私政策"><p>TinyShrink 仅在您的浏览器中处理所选图片。图片不会上传到我们的服务器，也不会被存储或分享。</p><p>当前产品不收集支付信息，也不创建或维护用户账户。</p><p>我们可能使用必要的、非识别性技术数据来维持网站正常运行；本政策如有更新，将在本页发布。</p></Legal>; }
function Legal({ title, children }: { title: string; children: React.ReactNode }) { return <section className="container page legal"><h1>{title}</h1>{children}</section>; }
