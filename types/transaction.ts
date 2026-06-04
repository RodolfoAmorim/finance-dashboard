export interface Transaction {
  id: string
  title: string
  avatar: string
  date: string
  amount: number
  status: "completed" | "declined"
}
