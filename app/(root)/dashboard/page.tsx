import { Cell } from "@/components/cell"
import { CostCard } from "@/components/cost-card"
import { CreditCardPanel } from "@/components/credit-card-panel"
import { GoalsCard } from "@/components/goals-card"
import { HealthCard } from "@/components/health-card"
import { PerformanceCard } from "@/components/performance-card"
import { TransactionsResume } from "@/components/transactions-resume"
import { ClockIcon } from "lucide-react"

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="my-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="tight font-extrabold" style={{ fontSize: 24 }}>
            Olá, Michael 👋
          </h1>

          <p className="mt-0.5 text-sm text-muted-foreground">
            Aqui está o resumo das suas finanças
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ClockIcon name="clock" size={14} />
          Atualizado há 5 min
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <Cell span={9}>
          <div className="min-h-full">
            <PerformanceCard />

            <div className="mt-6 grid grid-cols-12 gap-6">
              <Cell span={4}>
                <CostCard />
              </Cell>

              <Cell span={4}>
                <HealthCard />
              </Cell>

              <Cell span={4}>
                <GoalsCard />
              </Cell>
            </div>
          </div>
        </Cell>

        <Cell span={3}>
          <div className="flex min-h-full flex-col items-center justify-start gap-6">
            <CreditCardPanel />
            <TransactionsResume />
          </div>
        </Cell>
      </div>
    </div>
  )
}
