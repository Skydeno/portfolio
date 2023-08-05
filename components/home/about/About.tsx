import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Konrad, if you didn&apos;t already know. I&apos;m a
              web developer from Gdańsk, Poland. I specialize in the frontend,
              primarily React.js and Typescript, but love building with whatever
              tools are right for the job.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I worked for a company named WizCode for a year. I&apos;m also
              doing projects for companies as freelancer.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I love aviation. Any time there is nice weather
              you&apos;ll find me spotting planes in Gdańsk airport. If
              it&apos;s ☁️ i spend my free time increasing my developer skills
              and play flight simulator.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m actively looking for new position where I can merge my
              love for code with my love for aviation. If you think you&apos;ve
              got an opening that I might like, let&apos;s connect 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
