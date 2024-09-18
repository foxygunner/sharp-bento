import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/common/icons";
import { MainNav } from "@/components/navbar/main-nav";
import { MobileNav } from "@/components/navbar/mobile-nav";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "../theme/mode-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <nav className="flex items-center">
            <Link href="/telegram" target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.telegram className="h-5 w-5" />
                <span className="sr-only">Telegram</span>
              </div>
            </Link>
            <Link href="/x" target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">X (Formerly Twitter)</span>
              </div>
            </Link>

            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
