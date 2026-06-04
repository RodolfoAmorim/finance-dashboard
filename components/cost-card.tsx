"use client"

import { CostData } from "@/types/cost"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart"
import { Label, Pie, PieChart, PieSectorShapeProps, Sector } from "recharts"
import { fmtBRL } from "@/utils/format"

export const COST: CostData = {
  total: 8450,
  month: "Janeiro",
  categories: [
    { name: "home", value: 1521 },
    { name: "food", value: 1183 },
    { name: "transport", value: 761 },
    { name: "health", value: 845 },
    { name: "education", value: 591 },
    { name: "recreation", value: 676 },
    { name: "others", value: 2873 },
  ],
}

const chartConfig = {
  home: {
    label: "Moradia",
    color: "var(--chart-1)",
  },
  food: {
    label: "Alimentação",
    color: "var(--chart-2)",
  },
  transport: {
    label: "Transporte",
    color: "var(--chart-3)",
  },
  health: {
    label: "Saúde",
    color: "var(--chart-4)",
  },
  education: {
    label: "Educação",
    color: "var(--chart-5)",
  },
  recreation: {
    label: "Lazer",
    color: "var(--chart-6)",
  },
  others: {
    label: "Other",
    color: "var(--chart-7)",
  },
} satisfies ChartConfig

const PieShape = (props: PieSectorShapeProps) => {
  const categoryName = COST.categories[props.index]
    ?.name as keyof typeof chartConfig

  return <Sector {...props} fill={chartConfig[categoryName]?.color} />
}

export function CostCard() {
  return (
    <div className="h-full rounded-xl bg-card p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="tight font-bold">Análise de custos</h3>

          <p className="text-sm text-muted-foreground">Visão geral de gastos</p>
        </div>
      </div>

      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-62.5"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={COST.categories}
            dataKey="value"
            nameKey="categories"
            innerRadius={60}
            strokeWidth={5}
            cornerRadius={4}
            paddingAngle={2}
            shape={PieShape}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-lg font-bold"
                      >
                        {fmtBRL(COST.total)}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Total Gasto
                      </tspan>
                    </text>
                  )
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>

      <div className="flex w-full flex-wrap items-center justify-center gap-4">
        {COST.categories.map((item) => (
          <div
            className="flex items-center justify-start gap-2 object-center"
            key={item.name}
          >
            <div
              className="h-2 w-2 shrink-0 rounded-xs"
              style={{
                backgroundColor:
                  chartConfig[item.name as keyof typeof chartConfig]?.color,
              }}
            />
            <p className="text-xs text-muted-foreground">
              {chartConfig[item.name as keyof typeof chartConfig]?.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
