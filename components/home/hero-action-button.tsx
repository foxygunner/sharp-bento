"use client";

import { useTheme } from "next-themes";
import Link from "next/link";

import ShineBorder from "@/components/ui/shine-border";

export function HeroActionButton() {
  const theme = useTheme();

  return (
    <ShineBorder
      className="text-center text-2xl font-bold capitalize"
      color={theme.theme === "dark" ? "white" : "black"}
    >
      <Link className="transition-all hover:opacity-70" href="#">
        Check it Out -{`>`}
      </Link>
    </ShineBorder>
  );
}
