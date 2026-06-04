import { AppSidebar } from "@/components/app-sidebar"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { ReactNode } from "react"

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <Header />

        {children}

        <Footer />
      </SidebarInset>
    </SidebarProvider>
  )
}
