import { fmtBRL } from "@/utils/format"
import {
  CurrencyIcon,
  PercentIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react"
import { Cell } from "./cell"
import { PerformanceChart } from "./performance-chart"
import { ElementType } from "react"

export interface PerfStat {
  label: string
  value: number | string
  accent: string
  icon: ElementType
  raw?: boolean
}

export const PERF_STATS: PerfStat[] = [
  {
    label: "Total recebido",
    value: 137450,
    icon: TrendingUpIcon,
    accent: "var(--color-green-400)",
  },
  {
    label: "Total gasto",
    value: 90420,
    icon: TrendingDownIcon,
    accent: "var(--color-red-400)",
  },
  {
    label: "Lucro líquido",
    value: 47030,
    icon: CurrencyIcon,
    accent: "var(--foreground)",
  },
  {
    label: "Taxa de economia",
    value: "34,2%",
    icon: PercentIcon,
    accent: "var(--primary)",
    raw: true,
  },
]

export function PerformanceCard() {
  return (
    <div className="grid grid-cols-12 gap-4 divide-y divide-border rounded-xl bg-card p-6 lg:divide-x lg:divide-y-0">
      <Cell span={9}>
        <div className="mb-6 w-full">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <WalletIcon size={16} className="text-primary" />
            Saldo atual
          </div>

          <div className="mt-3 flex items-end gap-3">
            <span className="tight tnum text-4xl font-extrabold">
              {fmtBRL(48750)}
            </span>

            {/* <span className="mb-1.5">
              <TrendPill delta={8.4} up suffix="este mês" />
            </span> */}
          </div>

          <p className="mt-1 text-sm text-muted-foreground">
            Movimentação dos últimos 7 dias
          </p>
        </div>

        <div className="mb-4 w-full lg:mb-0">
          <PerformanceChart />
        </div>
      </Cell>

      <Cell span={3}>
        <div className="grid w-full flex-1 grid-cols-2 gap-6 lg:grid-cols-1 lg:grid-rows-4">
          {PERF_STATS.map((s, i) => (
            <div
              key={i}
              className="flex flex-1 flex-col justify-center rounded-xl border border-border bg-input/10 p-3.5"
            >
              <div
                className="mb-2 flex size-9 items-center justify-center rounded-lg bg-primary/10 p-2"
                style={{
                  color: s.accent,
                  backgroundColor: `color-mix(in oklab, ${s.accent} 10%, transparent)`,
                }}
              >
                <s.icon size={16} />
              </div>

              <div
                className="mt-1 text-xl font-extrabold"
                style={{ color: s.accent }}
              >
                {s.raw ? s.value : fmtBRL(s.value as number, { cents: false })}
              </div>

              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </Cell>
    </div>
  )
}
