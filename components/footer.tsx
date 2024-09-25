import Link from "next/link";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import logoImg from "@/public/bent.png";
import { Icons } from "./common/icons";

export const Footer = () => {
  return (
    <div className="mx-auto max-w-6xl overflow-hidden font-coffee rounded-lg shadow-sm lg:mb-4 lg:border">
      <div className="border-t p-4">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-0">
          <div className="flex items-center gap-2">
            <Image
              src={logoImg}
              alt="Bento Logo"
              className="h-10 w-10 dark:invert"
            />
            <h2 className="text-md font-normal">{siteConfig.name}</h2>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-xs text-muted-foreground">© 2024 Bento</p>

            <div className="h-3 border-r" />

            <span className=" text-xs text-muted-foreground">
              Bento says we are going to the moon
            </span>
          </div>

          <div className="flex items-center gap-2 [&_a]:rounded-full [&_a]:border [&_a]:px-3 [&_a]:py-1 [&_a]:shadow">
            <Link href="/telegram">
              <Icons.telegram className="h-5 w-5" />
            </Link>

            <Link href="/x">
              <Icons.twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
