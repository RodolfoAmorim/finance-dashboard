import Image from "next/image"
import { cn } from "@/lib/utils"
import { AvatarImage, AvatarFallback, Avatar } from "./ui/avatar"

interface TransactionItemProps {
  title: string
  avatar: string
  date: string
  amount: number
  status: "completed" | "declined"
}

export function TransactionItem({
  title,
  avatar,
  date,
  amount,
  status,
}: TransactionItemProps) {
  const isPositive = amount > 0

  const splicedTitle = title.split(" ")
  const titleFallback = splicedTitle[0][0] + splicedTitle[1][0]

  return (
    <div className="flex items-center gap-3">
      <Avatar className="size-10 rounded-lg after:rounded-lg">
        <AvatarImage className="rounded-lg" src={avatar} />
        <AvatarFallback className="rounded-lg uppercase">
          {titleFallback}
        </AvatarFallback>
      </Avatar>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">{title}</p>

        <p className="text-xs text-muted-foreground">{date}</p>
      </div>

      <div className="text-right">
        <p
          className={cn(
            "text-sm font-semibold tabular-nums",
            isPositive ? "text-emerald-500" : "text-foreground"
          )}
        >
          {isPositive ? "+" : "-"}${Math.abs(amount).toLocaleString()}
        </p>

        <p
          className={cn(
            "text-xs",
            status === "completed" ? "text-emerald-500" : "text-red-500"
          )}
        >
          {status === "completed" ? "Completed" : "Declined"}
        </p>
      </div>
    </div>
  )
}
