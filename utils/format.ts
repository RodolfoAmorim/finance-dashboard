export function fmtBRL(
  n: number,
  opts: { sign?: boolean; cents?: boolean } = {}
): string {
  const { sign = false, cents = true } = opts
  const s = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: cents ? 2 : 0,
    maximumFractionDigits: cents ? 2 : 0,
  }).format(Math.abs(n))
  if (sign) return (n < 0 ? "− " : "+ ") + s
  return (n < 0 ? "− " : "") + s
}
