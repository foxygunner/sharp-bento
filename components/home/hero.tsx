import Image from "next/image";
import Link from "next/link";

import { Section, Container } from "@/components/craft";
import Logo from "@/public/airborn.gif";

import { BackgroundLines } from "../ui/background-lines";

const Hero = () => {
  return (
    <BackgroundLines>
      <Section className="not-prose">
        <Container>
          <div className="m-auto flex h-full w-full max-w-5xl flex-col gap-8 px-4 py-4 md:px-6 md:py-10">
            {/* Large Text */}
            <h1 className="text-3xl font-normal tracking-tight md:text-6xl">
              Bento is a Commanding Figure {/* eslint-disable-next-line */}
              <Image
                className="my-auto -mt-3 inline w-24 md:-mt-6 md:w-48"
                width={192}
                height={108}
                src="https://newsroom.porsche.com/dam/jcr:a388376a-c5e2-4363-939b-6fbacd867a64/718_neu_2023.png"
                alt=""
              ></Image>{" "}
              leading us {/* eslint-disable-next-line */}
              <Image
                className="my-auto -mt-3 inline w-24 md:-mt-6 md:w-48"
                width={192}
                height={108}
                src="https://newsroom.porsche.com/dam/jcr:a388376a-c5e2-4363-939b-6fbacd867a64/718_neu_2023.png"
                alt=""
              ></Image>{" "}
              to greater heights. {/* eslint-disable-next-line */}
            </h1>
            {/* logo features */}
            <div className="flex w-fit flex-wrap items-center gap-6 rounded-lg border p-4">
              <p>As seen in:</p>
              <Image
                className="h-6 w-fit dark:invert"
                src={Logo}
                alt=""
              ></Image>
              <Image
                className="h-6 w-fit dark:invert"
                src={Logo}
                alt=""
              ></Image>
              <Image
                className="h-6 w-fit dark:invert"
                src={Logo}
                alt=""
              ></Image>
            </div>
            {/* End Text */}
            <div className="md:text-lg">
              <p className="hidden md:block">We are now listed on PumpFun.</p>
              <div className="grid gap-2 md:flex">
                <p className="opacity-50">
                  Visit pump.fun now before we leave for raydium.{" "}
                </p>
                <Link className="transition-all hover:opacity-70" href="#">
                  Check it Out -{`>`}
                </Link>
              </div>
              <p className="mt-4 text-xs">
                <span className="opacity-50">CTO token.</span> We are bringing
                the next 10 million users onchain.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </BackgroundLines>
  );
};

export default Hero;
