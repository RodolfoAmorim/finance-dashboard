import { ElementType } from "react"

type User = {
  name: string
  email: string
  avatar: string
}

type NavItem = {
  title: string
  url: string
}

type NavItems = {
  title: string
  url: string
  icon: ElementType
  isActive?: boolean
  items?: NavItem[]
}

export type SidebarData = {
  user: User
  navMain: NavItems[]
  navSecondary: NavItems[]
}
