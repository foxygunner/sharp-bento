export type SiteConfig = typeof siteConfig;

const siteUrl = "https://sharp-bento.vercel.app";

export const siteConfig = {
  name: "Sharp Bento Coin",
  description:
    "Bento is a commanding figure, who leads the community to greater heights.",
  author: "anon",

  links: {
    twitter: "https://x.com/bentotoken",
    pumpfun: "/#",
    telegram: "https://t.me/+7BkidVA9BZ80NTg0",
  },
  url: { base: siteUrl },
  keywords: [
    "Meme Token",
    "Solana",
    "Cryptocurrency",
    "Bitcoin",
    "Blockchain",
    "Pump.fun",
    "Raydium",
    "Bento",
  ],
  ogImage: `${siteUrl}/airborn.gif`,
};
