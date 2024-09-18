import Link from "next/link";
import { Clapperboard, GithubIcon, TwitterIcon } from "lucide-react";

import { siteConfig } from "@/config/site";

export const Footer = () => {
  return (
    <div className="mx-auto max-w-6xl overflow-hidden rounded-lg shadow-sm lg:mb-4 lg:border">
      <div className="border-t p-4">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-0">
          <div className="flex items-center gap-2">
            <Clapperboard size={20} />
            <h2 className="text-md font-normal">{siteConfig.name}</h2>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-xs text-muted-foreground">© 2024 avalynndev</p>

            <div className="h-3 border-r" />

            <span className=" text-xs text-muted-foreground">
              Data provided by Consumet and Tmdb API
            </span>
          </div>

          <div className="flex items-center gap-2 [&_a]:rounded-full [&_a]:border [&_a]:px-3 [&_a]:py-1 [&_a]:shadow">
            <Link href={siteConfig.links.github}>
              <GithubIcon />
            </Link>

            <Link href={siteConfig.links.twitter}>
              <TwitterIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
