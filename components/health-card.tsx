"use client"

import { CheckCircle2Icon, TrendingUp } from "lucide-react"
import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts"

export function HealthCard() {
  const score = 86

  const data = [
    {
      name: "score",
      value: score,
    },
  ]

  return (
    <div className="h-full rounded-xl bg-card p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="tight font-bold">Saúde Financeira</h3>

          <p className="text-sm text-muted-foreground">Status atual</p>
        </div>
      </div>

      <div className="relative mx-auto h-56 w-56 pt-6">
        <RadialBarChart
          width={224}
          height={224}
          data={data}
          innerRadius={100}
          outerRadius={80}
          startAngle={210}
          endAngle={-30}
        >
          <defs>
            <linearGradient
              id="health-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="var(--chart-6)" />
              <stop offset="40%" stopColor="var(--chart-7)" />
              <stop offset="60%" stopColor="var(--chart-1)" />
              <stop offset="100%" stopColor="var(--chart-2)" />
            </linearGradient>
          </defs>

          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />

          <RadialBar
            dataKey="value"
            background={{
              fill: "hsl(var(--muted))",
            }}
            fill="url(#health-gradient)"
            cornerRadius={999}
          />
        </RadialBarChart>

        <div className="absolute inset-0 mt-10 flex flex-col items-center justify-center">
          <p className="text-5xl font-bold">{score}</p>

          <p className="text-sm text-muted-foreground">de 100 pontos</p>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-start">
        <div className="mt-3 flex items-center justify-center gap-1 rounded-full bg-chart-2/15 px-3 py-1 text-sm font-medium text-chart-2">
          <CheckCircle2Icon size={14} />
          Excelente
        </div>

        <div className="mt-5 flex items-center gap-1 text-sm font-medium text-chart-2">
          <p className="flex items-center justify-center gap-2">
            <TrendingUp size={14} /> +4 pts
          </p>

          <span className="font-normal text-muted-foreground">
            nos últimos 30 dias
          </span>
        </div>
      </div>
    </div>
  )
}
