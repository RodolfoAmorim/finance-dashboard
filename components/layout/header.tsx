"use client"

import {
  BellIcon,
  HelpCircleIcon,
  MoonIcon,
  PlusIcon,
  SearchIcon,
  SunIcon,
} from "lucide-react"
import { Input } from "../form/input"
import { Separator } from "../ui/separator"
import { SidebarTrigger } from "../ui/sidebar"
import { Button } from "../ui/button"
import { useTheme } from "next-themes"

export function Header() {
  const { theme, setTheme } = useTheme()

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <header className="flex h-16 shrink-0 items-center gap-2">
      <div className="flex flex-1 items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />

        <Separator
          orientation="vertical"
          className="mr-2 data-vertical:h-4 data-vertical:self-auto"
        />

        <Input.Root className="hidden max-w-sm lg:flex">
          <Input.Icon>
            <SearchIcon size={18} />
          </Input.Icon>

          <Input.Field placeholder="Buscar..." />
        </Input.Root>
      </div>

      <div className="flex items-center justify-end gap-4 pr-4">
        <Button
          variant={"outline"}
          size={"icon-lg"}
          onClick={handleChangeTheme}
          style={{ color: "var(--muted-foreground)" }}
          aria-label="Alternar tema"
          title={theme === "light" ? "Mudar para escuro" : "Mudar para claro"}
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>

        <Button
          variant={"outline"}
          size={"icon-lg"}
          style={{ color: "var(--muted-foreground)" }}
        >
          <BellIcon />
        </Button>

        <Button
          variant={"outline"}
          size={"icon-lg"}
          style={{ color: "var(--muted-foreground)" }}
          className="hidden lg:flex"
        >
          <HelpCircleIcon />
        </Button>

        <Button size={"lg"}>
          <PlusIcon />
          Nova Transação
        </Button>
      </div>
    </header>
  )
}
