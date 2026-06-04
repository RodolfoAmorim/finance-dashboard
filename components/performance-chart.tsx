"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart"

export function PerformanceChart() {
  const chartData = [
    { day: "Dom", income: 1.8, expense: 0.9, invest: 0.4 },
    { day: "Seg", income: 2.1, expense: 1.3, invest: 0.5 },
    { day: "Ter", income: 1.4, expense: 0.7, invest: 0.3 },
    { day: "Qua", income: 2.6, expense: 1.6, invest: 0.8 },
    { day: "Qui", income: 1.9, expense: 1.1, invest: 0.6 },
    { day: "Sex", income: 2.3, expense: 1.4, invest: 0.7 },
    { day: "Sáb", income: 1.2, expense: 0.6, invest: 0.45 },
  ]

  const chartConfig = {
    income: {
      label: "Recebidos",
      color: "var(--chart-bar-1)",
    },
    expense: {
      label: "Gastos",
      color: "var(--chart-bar-2)",
    },
    invest: {
      label: "Investidos",
      color: "var(--chart-bar-3)",
    },
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar
          dataKey="income"
          stackId="a"
          fill="var(--color-income)"
          radius={[0, 0, 8, 8]}
        />
        <Bar
          dataKey="expense"
          stackId="a"
          fill="var(--color-expense)"
          radius={[0, 0, 0, 0]}
        />
        <Bar
          dataKey="invest"
          stackId="a"
          fill="var(--color-invest)"
          radius={[8, 8, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  )
}
