import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Bezpieczne Auto USA",
    imgSrc: "project-imgs/usa.png",
    code: "https://github.com/Skydeno/",
    projectLink: "https://bezpieczneautousa.pl/",
    tech: ["Next.js", "Sanity CMS", "Tailwind", "SCSS", "Figma", "Typescript"],
    description: "Application made for car importing company.",
    modalContent: (
      <>
        <p>This project was made on company request.</p>
        <p>
          Site was made in colaboration with friend, design was purely made by
          ourselves based only client demands. Application is fully responsive
          and optimizied to maximum. Code cannot be provided as its client
          ownership.
        </p>
        <p>
          App is using Sanity CMS, which gives studio for company to add
          imported cars themselves. After that, all data and images are given
          back in API and frontend side of app will map the data and place it on
          the site. In same way is made YouTube section.
        </p>
      </>
    ),
  },
  {
    title: "TokaCars",
    imgSrc: "project-imgs/toka.png",
    code: "https://github.com/Skydeno/Toka-cars",
    projectLink: "https://tokacars.eu/",
    tech: ["Next.js", "Sanity CMS", "GROQL", "SCSS", "Figma", "Typescript"],
    description: "Car rent company based in Poznań, Poland.",
    modalContent: (
      <>
        <p>This project was made on company request.</p>
        <p>
          All car data and images are given by them. Also design was created by
          me, based on company imagination and requirements.
        </p>
        <p>
          App is using Sanity CMS, which gives studio for company to add cars
          themselves. After that, all data and images are given back in API and
          frontend side of app will map the data and place it on the site.
        </p>
      </>
    ),
  },
  {
    title: "Grey barber",
    imgSrc: "project-imgs/greybarber.jpg",
    code: "https://github.com/Skydeno/grey-barber",
    projectLink: "https://greybarber.netlify.app/",
    tech: ["React.js", "CSS", "Python", "FastAPI"],
    description:
      "Site created purely for giving company information. One of my first projects.",
    modalContent: (
      <>
        <p>Greybarber was made for a barber studio based near Gdańsk.</p>
        <p>This is single page site, which was designed and created</p>
        <p>
          Design was made myself and i want to mention it again - this project
          is one of the firsts i ever did.
        </p>
      </>
    ),
  },
  {
    title: "KonradFlight",
    imgSrc: "project-imgs/git.jpg",
    code: "https://github.com/Skydeno/konrad-flight/tree/master/Konrad-flight-frontend",
    projectLink: "None",
    tech: ["Express", "React.js", "SCSS", "REST Api", "Typescript"],
    description: "My pet project with aviation theme. (WIP)",
    modalContent: (
      <>
        <p>
          KonradFlight is my pet project that i started a while ago, but
          abandoned because of many tasks at work.
        </p>
        <p>
          Plane data is mostly fetched from opensky network that is allowing for
          free requests in intervals.
        </p>
        <p>
          Airport data was downloaded from google and is returend by server made
          in Express.
        </p>
        <p>
          When clicking on plane icon, you cant check some data that is attached
          to the aircraft.
        </p>
      </>
    ),
  },
  {
    title: "Powerso",
    imgSrc: "project-imgs/powerso.png",
    code: "https://github.com/Skydeno/",
    projectLink: "https://www.powerso.pl/",
    tech: ["Next.js", "Sanity CMS", "Tailwind", "SCSS", "Figma", "Typescript"],
    description: "Complex application for electric car owners and chargers",
    modalContent: (
      <>
        <p>Realized while working in WizCode.</p>
        <p>
          Project that is focused in delivering optimized and advanced web
          application with services like user account and reservations.
        </p>
      </>
    ),
  },
];
