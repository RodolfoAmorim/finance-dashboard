"use client"

import { PlusIcon } from "lucide-react"
import { Button } from "./ui/button"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel"
import { CreditCard } from "./credit-card"
import { fmtBRL } from "@/utils/format"
import { useEffect, useState } from "react"

export function CreditCardPanel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="w-full rounded-xl bg-card p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="tight font-bold">Meus cartões</h3>

          <p className="text-sm text-muted-foreground">Ações rápidas</p>
        </div>

        <Button variant={"outline"} size={"xs"}>
          <PlusIcon />
          Adicionar
        </Button>
      </div>

      <div className="my-6 w-full">
        <Carousel
          opts={{
            align: "start",
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, i) => (
              <CarouselItem className="w-full" key={i}>
                <CreditCard
                  brand="visa"
                  expiresAt="12/30"
                  holder="Michael J. Doe"
                  index={i}
                  number="8922"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-4 flex items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Ir para slide ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 bg-primary"
                  : "w-1.5 bg-muted-foreground/20 hover:bg-muted-foreground/40"
              } `}
            />
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-start gap-2 lg:flex-row lg:gap-4">
        <div className="flex w-full flex-1 flex-row items-center justify-between rounded-xl border border-border bg-input/10 p-3.5 lg:flex-col lg:items-start lg:justify-center">
          <p className="text-xs text-muted-foreground">Disponível</p>

          <div className="mt-1 text-sm font-extrabold">{fmtBRL(17300)}</div>
        </div>

        <div className="flex w-full flex-1 flex-row items-center justify-between rounded-xl border border-border bg-input/10 p-3.5 lg:flex-col lg:items-start lg:justify-center">
          <p className="text-xs text-muted-foreground">Fatura Atual</p>

          <div className="mt-1 text-sm font-extrabold">{fmtBRL(6700)}</div>
        </div>
      </div>

      {/* <div className="items-starts mt-4 flex w-full justify-between gap-4">
        <div className="flex flex-1 flex-col items-center justify-center gap-1 text-center">
          <Button size={"icon-lg"} variant={"outline"}>
            <CreditCardIcon />
          </Button>
          <span className="text-xs text-muted-foreground">Pagar Fatura</span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-1 text-center">
          <Button size={"icon-lg"} variant={"outline"}>
            <UploadIcon />
          </Button>
          <span className="text-xs text-muted-foreground">Enviar</span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-1 text-center">
          <Button size={"icon-lg"} variant={"outline"}>
            <DownloadIcon />
          </Button>
          <span className="text-xs text-muted-foreground">Receber</span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-1 text-center">
          <Button size={"icon-lg"} variant={"outline"}>
            <EllipsisIcon />
          </Button>
          <span className="text-xs text-muted-foreground">Mais</span>
        </div>
      </div> */}
    </div>
  )
}
