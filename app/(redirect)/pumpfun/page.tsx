import { redirect } from "next/navigation";

import { siteConfig } from "@/config/site";

export default function YoutubeRedirect() {
  return redirect(siteConfig.links.pumpfun);
}
