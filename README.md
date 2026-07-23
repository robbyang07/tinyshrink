# TinyShrink

TinyShrink 是一个极简、可实际使用的在线图片压缩工具：图片在浏览器本地压缩，不上传至服务器，也不需要账户。

## 已实现功能

- 上传单张 JPG、JPEG、PNG 或 WebP 图片
- 在浏览器端调节压缩质量并生成压缩结果
- 显示原文件大小、压缩后大小和压缩比例
- 下载压缩后的图片
- 响应式首页、定价、隐私政策、服务条款、退款政策、联系页
- Pro 功能和价格展示；升级按钮仅前往 `/upgrade` 说明页

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。生产验证可依次运行：

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

## 部署

本项目适合直接部署到 Vercel：导入 GitHub 仓库后，Vercel 会识别为 Next.js 项目，保持默认构建设置并点击 Deploy 即可。无需设置环境变量。

## 支付状态与后续接入

当前**未接入任何支付服务**，没有支付 SDK、API Route、Webhook、订单、Checkout 或支付环境变量，也没有任何模拟收银台。

后续由商户自行接入时，可从 [components/UpgradeButton.tsx](components/UpgradeButton.tsx) 开始；商品和版本信息集中在 [config/product.ts](config/product.ts)，支付完成/取消的预留页面分别是 `/payment-success` 与 `/payment-cancelled`。`/upgrade` 当前只展示接入说明。

## 可用于商户入驻或支付审核展示的页面

- `/`：真实可用的核心产品
- `/pricing`：Free 与 Pro 版本和价格
- `/privacy`、`/terms`、`/refund`、`/contact`：政策和联系信息
