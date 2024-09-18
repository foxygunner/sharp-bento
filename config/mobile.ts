import { MainNavItem, SidebarNavItem } from "@/types";

interface MobileConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const mobileConfig: MobileConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Roadmap",
      href: "/#roadmap",
    },
    {
      title: "Telegram",
      href: "/telegram",
    },
    {
      title: "X",
      href: "/x",
    },
  ],
  sidebarNav: [
    {
      title: "Exchanges",
      items: [
        {
          title: "Pump.fun",
          href: "/pumpfun",
          items: [],
        },
      ],
    },
  ],
};
