import {
  BookOpen,
  Bot,
  Building2,
  ChevronDown,
  FileText,
  HelpCircle,
  Menu,
  RefreshCw,
  Truck,
  Wallet,
  X,
} from "lucide-react"
import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const resources = [
  {
    icon: BookOpen,
    label: "Ресурси",
    description: "Водичи, документи и материјали",
    href: "/resursi",
  },
  {
    icon: HelpCircle,
    label: "FAQ",
    description: "Најчесто поставувани прашања",
    href: "/faq",
  },
  {
    icon: Bot,
    label: "AI во Veridex",
    description: "Вештачка интелигенција во ERP",
    href: "/ai",
  },
  {
    icon: FileText,
    label: "Veridex vs Excel",
    description: "Споредба на ERP наспроти Excel",
    href: "/veridex-vs-excel",
  },
  {
    icon: RefreshCw,
    label: "Changelog",
    description: "Историја на промени и надградби",
    href: "/changelog",
  },
]

const modules = [
  {
    icon: Building2,
    label: "Организација",
    description: "Компании, вработени, возила, приколки и одржување",
    href: "/moduli/organizacija",
  },
  {
    icon: Truck,
    label: "Транспорт",
    description: "Тури, налози и оперативно планирање",
    href: "/moduli/transport",
  },
  {
    icon: Wallet,
    label: "Финансии",
    description: "Фактури, трошоци и финансиски извештаи",
    href: "/moduli/finansii",
  },
]

interface SiteHeaderProps {
  currentPath?: string
}

export default function SiteHeader({
  currentPath = "",
}: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileModulesOpen, setMobileModulesOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)

  const isActive = (path: string) => currentPath === path

  const linkClass = (path: string) =>
    isActive(path)
      ? "text-primary text-sm font-medium"
      : "text-muted-foreground text-sm font-medium transition-colors duration-200 hover:text-primary"

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border/50 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Veridex" className="h-9 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={
                    currentPath.startsWith("/moduli")
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }
                >
                  Модули
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[340px] space-y-1 p-3">
                    {modules.map((mod) => (
                      <NavigationMenuLink
                        className="flex flex-row items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted"
                        href={mod.href}
                        key={mod.label}
                      >
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <mod.icon className="h-4.5 w-4.5 text-primary" />
                        </div>
                        <div>
                          <span className="block text-sm font-semibold">
                            {mod.label}
                          </span>
                          <span className="block text-xs text-muted-foreground">
                            {mod.description}
                          </span>
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={
                    ["/resursi", "/faq", "/ai", "/veridex-vs-excel", "/changelog"].some((p) => currentPath.startsWith(p))
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }
                >
                  Ресурси
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[340px] space-y-1 p-3">
                    {resources.map((res) => (
                      <NavigationMenuLink
                        className="flex flex-row items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted"
                        href={res.href}
                        key={res.label}
                      >
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <res.icon className="h-4.5 w-4.5 text-primary" />
                        </div>
                        <div>
                          <span className="block text-sm font-semibold">
                            {res.label}
                          </span>
                          <span className="block text-xs text-muted-foreground">
                            {res.description}
                          </span>
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <a href="/blog" className={linkClass("/blog")}>
            Блог
          </a>
          <a href="/za-nas" className={linkClass("/za-nas")}>
            За нас
          </a>
        </nav>

        <a href="/kontakt" className="hidden md:block">
          <button className="rounded-xl bg-gradient-to-r from-primary to-[oklch(0.48_0.22_275)] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30">
            Закажи демо
          </button>
        </a>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-200 hover:bg-muted md:hidden"
          aria-label="Мени"
          aria-expanded={mobileOpen}
          onClick={() => {
            setMobileOpen(!mobileOpen)
            if (mobileOpen) {
              setMobileModulesOpen(false)
              setMobileResourcesOpen(false)
            }
          }}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/50 bg-white/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {/* Modules accordion */}
            <button
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-primary"
              onClick={() => setMobileModulesOpen(!mobileModulesOpen)}
            >
              Модули
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${mobileModulesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileModulesOpen && (
              <div className="ml-4 space-y-1 border-l-2 border-primary/10 pl-4">
                {modules.map((mod) => (
                  <a
                    key={mod.label}
                    href={mod.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-primary"
                    onClick={() => setMobileOpen(false)}
                  >
                    <mod.icon className="h-4 w-4 text-primary" />
                    {mod.label}
                  </a>
                ))}
              </div>
            )}

            {/* Resources accordion */}
            <button
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-primary"
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
            >
              Ресурси
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${mobileResourcesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileResourcesOpen && (
              <div className="ml-4 space-y-1 border-l-2 border-primary/10 pl-4">
                {resources.map((res) => (
                  <a
                    key={res.label}
                    href={res.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-primary"
                    onClick={() => setMobileOpen(false)}
                  >
                    <res.icon className="h-4 w-4 text-primary" />
                    {res.label}
                  </a>
                ))}
              </div>
            )}
            <a
              href="/blog"
              className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              Блог
            </a>
            <a
              href="/za-nas"
              className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              За нас
            </a>
            <div className="mt-2 border-t border-border/50 pt-3">
              <a href="/kontakt" className="block">
                <button className="w-full rounded-xl bg-gradient-to-r from-primary to-[oklch(0.48_0.22_275)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25">
                  Закажи демо
                </button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
