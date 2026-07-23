export const siteConfig = {
  name: "TinyShrink",
  description: "在浏览器中快速压缩图片，轻巧、私密、无需上传。",
  supportEmail: "support@example.com",
};

export const product = {
  name: "TinyShrink Pro",
  description: "为需要更高效率的图片处理工作流准备的增强版本。",
  price: 4.99,
  currency: "USD",
  type: "one-time",
  freeFeatures: ["每次处理一张图片", "JPG、PNG、WebP 格式", "可调整压缩质量", "下载压缩结果"],
  proFeatures: ["批量压缩", "更大的文件限制", "一键下载全部结果", "压缩历史记录"],
} as const;
