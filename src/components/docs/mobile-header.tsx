import { Link } from "@tanstack/react-router"
import { Menu } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"

interface MobileHeaderProps {
  onMenuToggle: () => void
}

export function MobileHeader({ onMenuToggle }: MobileHeaderProps) {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-700 px-4 h-16 flex items-center justify-between transition-colors duration-300">
      <Link to="/" className="flex items-center gap-2 text-zinc-900 dark:text-zinc-50">
        <Logo className="h-5" />
      </Link>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button variant="ghost" size="icon" onClick={onMenuToggle} className="text-zinc-900 dark:text-zinc-50">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
