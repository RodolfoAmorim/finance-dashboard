import { Goal } from "@/types/goal"
import { GoalItem } from "./goal-item"
import {
  PiggyBank,
  Plane,
  Car,
  Building2,
  Edit2Icon,
  ChevronRight,
} from "lucide-react"
import { Button } from "./ui/button"

const GOALS: Goal[] = [
  {
    id: "1",
    title: "Reserve",
    icon: <PiggyBank className="size-5" />,
    current: 7000,
    target: 10000,
    deadline: "4 months",
  },
  {
    id: "2",
    title: "Travel",
    icon: <Plane className="size-5" />,
    current: 2500,
    target: 4000,
    deadline: "3 months",
  },
  {
    id: "3",
    title: "Car",
    icon: <Car className="size-5" />,
    current: 16000,
    target: 20000,
    deadline: "3 years 8 months",
  },
  {
    id: "4",
    title: "Real estate",
    icon: <Building2 className="size-5" />,
    current: 8300,
    target: 70000,
    deadline: "5 years 8 months",
  },
]

export function GoalsCard() {
  return (
    <div className="flex h-full flex-col items-start justify-start gap-4 rounded-xl bg-card p-6">
      <div className="flex w-full items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="tight font-bold">Objetivos Financeiros</h3>

          <p className="text-sm text-muted-foreground">
            Acompanhe o progresso das suas metas
          </p>
        </div>

        <Button title="Editar objetivos" size={"icon-xs"} variant={"outline"}>
          <Edit2Icon />
        </Button>
      </div>

      <div className="flex w-full flex-1 flex-col items-center justify-between gap-2">
        {GOALS.map((goal) => (
          <GoalItem key={goal.id} {...goal} />
        ))}
      </div>

      <Button variant={"outline"} className="w-full">
        Ver todas metas
        <ChevronRight />
      </Button>
    </div>
  )
}
