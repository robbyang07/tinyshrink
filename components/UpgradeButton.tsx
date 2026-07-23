import Link from "next/link";

type UpgradeButtonProps = { className?: string; children?: React.ReactNode };

/**
 * TODO: 后续由商户在此处接入真实支付服务。
 * 当前仅跳转到支付接入说明页，不创建订单、不包含任何支付逻辑。
 */
export function UpgradeButton({ className = "", children = "升级到 Pro" }: UpgradeButtonProps) {
  return <Link className={`button button-primary ${className}`} href="/upgrade">{children}</Link>;
}
