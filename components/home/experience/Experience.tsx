import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "WizCode",
    position: "Frontend Developer",
    time: "2022 - 2023",
    location: "Warsaw",
    description:
      "I help build large project that includes user profiles, saving user preferences and communicating data with backend. There I was learning from experienced senior frontend devs, that gave me a lot of knowledge and good programming practicies.",
    tech: [
      "React.js",
      "REST Api",
      "Tailwind",
      "SCSS",
      "Bitbucket",
      "Jira",
      "Figma",
      "Git",
    ],
  },
  {
    title: "Freelancing",
    position: "Freelancer",
    time: "2022 - now",
    location: "Network",
    description:
      "Senior Full Stack Engineer for Facebook Marketplace. Created a service from scratch to handle new listings. Also played some ping pong. It was fun.",
    tech: ["React.js", "Git", "Sanity CMS", "Tailwind", "SCSS", "Figma"],
  },
];
