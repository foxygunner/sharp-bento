import { Rocket, Sparkles, Zap, PartyPopper, Trophy } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Container, Section } from "../craft";
import { NeonGradientCard } from "../ui/neon-gradient-card";

type Status = "completed" | "in-progress" | "not-started";

type StatusColor = Record<Status, { firstColor: string; secondColor: string }>;

const statusColors: StatusColor = {
  "not-started": { firstColor: "#FF073A", secondColor: "#FF4500" },
  "in-progress": { firstColor: "#00FFFF", secondColor: "#00FFF1" },
  completed: { firstColor: "#39FF14", secondColor: "#00FF00" },
};

export default function Roadmap() {
  const roadmapSteps = [
    {
      icon: <Rocket className="w-8 h-8 text-purple-500" />,
      title: "Pump Fun Launch",
      description: "Initial token launch on pump.fun",
      status: "completed" as Status,
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Viral Takeover",
      description: "Massive social media campaign and influencer partnerships",
      status: "in-progress" as Status,
    },
    {
      icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
      title: "Meme Magic",
      description: "Release our meme generator app and NFT collection",
      status: "in-progress" as Status,
    },
    {
      icon: <PartyPopper className="w-8 h-8 text-green-500" />,
      title: "Meme Economy",
      description: "Launch decentralized meme marketplace and staking rewards",
      status: "not-started" as Status,
    },
    {
      icon: <Trophy className="w-8 h-8 text-red-500" />,
      title: "Meme Domination",
      description: "Become the #1 meme token in the galaxy (and beyond)",
      status: "not-started" as Status,
    },
  ];

  return (
    <Section
      className="not-prose mt-40 lg:mt-0 py-16 bg-gradient-to-b from-background to-secondary"
      id="roadmap"
    >
      <Container className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Memetic Roadmap
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {roadmapSteps.map((step, index) => (
            <NeonGradientCard
              key={index}
              neonColors={statusColors[step.status]}
            >
              <Card
                key={index}
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <CardHeader className="flex flex-row items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {step.icon}
                    <CardTitle>{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            </NeonGradientCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
