import { Transaction } from "@/types/transaction"
import { TransactionItem } from "./transaction-item"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Button } from "./ui/button"
import { ChevronRight } from "lucide-react"

const TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    title: "Dividend payout",
    avatar: "/images/users/1.jpg",
    date: "25 Feb 2025",
    amount: 1100,
    status: "completed",
  },
  {
    id: "2",
    title: "Corporate subscriptions",
    avatar: "/images/users/2.jpg",
    date: "25 Feb 2025",
    amount: -6400,
    status: "declined",
  },
  {
    id: "3",
    title: "Investment ETF",
    avatar: "/images/users/3.jpg",
    date: "21 Feb 2025",
    amount: -900,
    status: "completed",
  },
  {
    id: "4",
    title: "Consulting services",
    avatar: "/images/users/4.jpg",
    date: "21 Feb 2025",
    amount: -2100,
    status: "completed",
  },
  {
    id: "5",
    title: "Dividend payout",
    avatar: "/images/users/1.jpg",
    date: "25 Feb 2025",
    amount: 1100,
    status: "completed",
  },
  {
    id: "6",
    title: "Corporate subscriptions",
    avatar: "/images/users/2.jpg",
    date: "25 Feb 2025",
    amount: -6400,
    status: "declined",
  },
  {
    id: "7",
    title: "Investment ETF",
    avatar: "/images/users/3.jpg",
    date: "21 Feb 2025",
    amount: -900,
    status: "completed",
  },
  {
    id: "8",
    title: "Investment ETF",
    avatar: "/images/users/3.jpg",
    date: "21 Feb 2025",
    amount: -900,
    status: "completed",
  },
]

export function TransactionsResume() {
  return (
    <div className="flex w-full flex-1 flex-col items-start justify-start gap-4 rounded-xl bg-card p-6">
      <div className="flex w-full items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="tight font-bold">Histórico de Transações</h3>

          <p className="text-sm text-muted-foreground">
            Movimentações recentes
          </p>
        </div>

        <Select defaultValue="7d">
          <SelectTrigger className="h-8 w-20">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="7d">7d</SelectItem>

            <SelectItem value="30d">30d</SelectItem>

            <SelectItem value="90d">90d</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex w-full justify-between text-xs text-muted-foreground">
        <span>11 Mar</span>
        <span>Amount</span>
      </div>

      <div className="w-full flex-1 space-y-4">
        {TRANSACTIONS.map((transaction) => (
          <TransactionItem key={transaction.id} {...transaction} />
        ))}
      </div>

      <Button variant={"outline"} className="w-full">
        Ver todas transações <ChevronRight />
      </Button>
    </div>
  )
}
