import { Progress } from "@/components/ui/progress"

interface GoalItemProps {
  title: string
  icon: React.ReactNode
  current: number
  target: number
  deadline: string
}

export function GoalItem({
  title,
  icon,
  current,
  target,
  deadline,
}: GoalItemProps) {
  const progress = (current / target) * 100

  return (
    <div className="flex w-full gap-3">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center justify-between gap-2">
          <p className="truncate text-sm font-medium">{title}</p>

          <p className="text-xs whitespace-nowrap text-muted-foreground">
            ${current.toLocaleString()}/ ${target.toLocaleString()}
          </p>
        </div>

        <Progress value={progress} className="h-2" />

        <p className="mt-1 text-xs text-muted-foreground">
          Left to save {deadline}
        </p>
      </div>
    </div>
  )
}
