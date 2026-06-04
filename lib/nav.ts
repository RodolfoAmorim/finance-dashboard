import { SidebarData } from "@/types/nav"
import {
  ArrowLeftRight,
  BookOpenIcon,
  BotIcon,
  ChartArea,
  CreditCard,
  FileText,
  LayoutDashboard,
  LifeBuoyIcon,
  PiggyBank,
  SendIcon,
  Settings2Icon,
  Target,
  TerminalSquareIcon,
  TrendingUp,
  Wallet,
} from "lucide-react"

export const NAV: SidebarData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Transações",
      url: "#",
      icon: ArrowLeftRight,
      isActive: true,
      items: [
        {
          title: "Histórico",
          url: "#",
        },
        {
          title: "Integrações",
          url: "#",
        },
        {
          title: "Relatórios",
          url: "#",
        },
      ],
    },
    {
      title: "Contas",
      url: "#",
      icon: Wallet,
    },
    {
      title: "Investimentos",
      url: "#",
      icon: TrendingUp,
    },
    {
      title: "Orçamentos",
      url: "#",
      icon: PiggyBank,
    },
    {
      title: "Metas",
      url: "#",
      icon: Target,
    },
    {
      title: "Cartões",
      url: "#",
      icon: CreditCard,
    },
    {
      title: "Relatórios",
      url: "#",
      icon: FileText,
    },
    {
      title: "Análise",
      url: "#",
      icon: ChartArea,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoyIcon,
    },
    {
      title: "Feedback",
      url: "#",
      icon: SendIcon,
    },
  ],
}
