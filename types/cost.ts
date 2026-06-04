export interface CostCat {
  name: string
  value: number
}

export interface CostData {
  total: number
  month: string
  categories: CostCat[]
}
