"use client";

import { ChangeEvent, useEffect, useState } from "react";

type Result = { url: string; size: number; name: string; type: string };
const allowed = ["image/jpeg", "image/png", "image/webp"];
const formatBytes = (bytes: number) => bytes < 1024 * 1024 ? `${(bytes / 1024).toFixed(1)} KB` : `${(bytes / 1024 / 1024).toFixed(2)} MB`;

export function ImageCompressor() {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState(75);
  const [result, setResult] = useState<Result | null>(null);
  const [message, setMessage] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => () => { if (result) URL.revokeObjectURL(result.url); }, [result]);
  function chooseFile(event: ChangeEvent<HTMLInputElement>) {
    const selected = event.target.files?.[0];
    if (!selected) return;
    if (!allowed.includes(selected.type)) { setMessage("请选择 JPG、PNG 或 WebP 图片。"); return; }
    if (result) URL.revokeObjectURL(result.url);
    setFile(selected); setResult(null); setMessage("");
  }
  async function compress() {
    if (!file) { setMessage("请先选择一张图片。"); return; }
    setProcessing(true); setMessage("");
    try {
      const image = new Image();
      const source = URL.createObjectURL(file);
      await new Promise<void>((resolve, reject) => { image.onload = () => resolve(); image.onerror = () => reject(new Error("图片无法读取")); image.src = source; });
      const canvas = document.createElement("canvas");
      canvas.width = image.naturalWidth; canvas.height = image.naturalHeight;
      const context = canvas.getContext("2d");
      if (!context) throw new Error("浏览器不支持图片处理");
      context.drawImage(image, 0, 0); URL.revokeObjectURL(source);
      const outputType = file.type === "image/png" ? "image/png" : "image/jpeg";
      const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, outputType, quality / 100));
      if (!blob) throw new Error("压缩失败，请重试");
      if (result) URL.revokeObjectURL(result.url);
      const extension = outputType === "image/png" ? "png" : "jpg";
      setResult({ url: URL.createObjectURL(blob), size: blob.size, name: file.name.replace(/\.[^.]+$/, `-tiny.${extension}`), type: outputType });
    } catch (error) { setMessage(error instanceof Error ? error.message : "压缩失败，请重试。"); }
    finally { setProcessing(false); }
  }
  const reduction = result && file ? Math.max(0, Math.round((1 - result.size / file.size) * 100)) : null;
  return <section className="compressor" aria-label="图片压缩工具">
    <label className="dropzone"><input type="file" accept="image/jpeg,image/png,image/webp" onChange={chooseFile} />
      <span className="upload-icon">↑</span><strong>{file ? file.name : "选择一张图片"}</strong><small>JPG、PNG 或 WebP · 图片仅在本地浏览器中处理</small>
    </label>
    <div className="quality-row"><label htmlFor="quality">压缩质量 <strong>{quality}</strong></label><input id="quality" type="range" min="10" max="95" value={quality} onChange={(e) => setQuality(Number(e.target.value))} /><span>更小文件 ← → 更清晰</span></div>
    <button type="button" className="button button-primary action" onClick={compress} disabled={processing}>{processing ? "正在压缩…" : "压缩图片"}</button>
    {message && <p className="notice" role="alert">{message}</p>}
    {file && <div className="stats"><div><span>原文件大小</span><strong>{formatBytes(file.size)}</strong></div><div><span>压缩后大小</span><strong>{result ? formatBytes(result.size) : "—"}</strong></div><div><span>压缩比例</span><strong>{reduction === null ? "—" : `${reduction}%`}</strong></div></div>}
    {result && <a className="button button-dark download" href={result.url} download={result.name}>下载压缩后的图片</a>}
  </section>;
}
