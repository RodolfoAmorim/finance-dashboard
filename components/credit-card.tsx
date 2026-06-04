import Image from "next/image"
import { cn } from "@/lib/utils"

interface CreditCardProps {
  index: number
  brand: string
  holder: string
  number: string
  expiresAt: string
}

const cardGradients = [
  "from-chart-1 to-chart-2",
  "from-chart-2 to-chart-3",
  "from-chart-3 to-chart-4",
  "from-chart-4 to-chart-5",
  "from-chart-5 to-chart-1",
] as const

export function CreditCard({
  index,
  brand,
  holder,
  number,
  expiresAt,
}: CreditCardProps) {
  return (
    <div
      className={cn(
        "relative flex aspect-video w-full flex-col justify-between overflow-hidden rounded-4xl p-6 text-white",
        "bg-linear-to-br",
        cardGradients[index % cardGradients.length]
      )}
    >
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 flex w-full items-center justify-between">
        <p className="text-sm font-medium text-white/80">Cartão de Crédito</p>

        <Image
          src={`/images/credit-card/${brand}.svg`}
          width={150}
          height={24}
          alt={brand}
          className="aspect-video h-8 w-auto"
        />
      </div>

      <div className="relative z-10 flex w-full items-end justify-between gap-4">
        <div className="flex-1">
          <p className="tnum text-lg font-bold tracking-[0.2em]">
            **** **** **** {number}
          </p>

          <p className="text-sm text-white/80">{holder}</p>
        </div>

        <p className="text-sm text-white/80">{expiresAt}</p>
      </div>
    </div>
  )
}
