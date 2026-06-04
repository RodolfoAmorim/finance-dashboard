import { CSSProperties, ReactNode } from "react"

export function Cell({
  span,
  children,
}: {
  span: number
  children: ReactNode
}) {
  return (
    <div
      className="col-span-full flex min-w-0 flex-col lg:col-[span_var(--span)/span_var(--span)]"
      style={{ "--span": span } as CSSProperties}
    >
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
    </div>
  )
}
