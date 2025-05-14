import { useLayoutEffect, useRef } from "react";
import "./../styles/Projects.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HighlightFont from "./HighlightFont";

const projects = [
  {
    title: "Cims - Complete Inventory Management System",
    link: "https://cims.michael-hodgson.co.uk",
    github: "https://github.com/michael86/inventory-management-system-web-app",
    img: "cims-landing.png",
    alt: "complete inventoory management system",
    description: "full stack application used to manage inventory within a company.",
    builtWith: ["React", "Express", "Bootstrap", "NodeJS", "SQL"],
  },
  {
    title: "The Weather Channel",
    link: "https://weather.michael-hodgson.co.uk",
    github: "https://github.com/michael86/weather-project",
    img: "weather.png",
    alt: "The Weather Channel",
    description:
      "A simple project showing the use of API authentication, alongside asynchronous functions.",
    builtWith: ["Javascript", "localstorage api", "Openweather Api", "JOI validation", "axios"],
  },
  {
    title: "Creekview Electronics LTD",
    link: "https://creekviewelectronics.co.uk",
    github: "https://github.com/michael86/creekview-new",
    img: "creekview-electronics.png",
    alt: "Creekview Electronics LTD",
    description:
      "My current employer wanted to update his website and move away from wix, he had asked me to create the site from scratch.",
    builtWith: ["React", "navigator api", "typescript", "gsap"],
  },
  {
    title: "Hackathon - Early Learner Reading",
    link: "https://reading.michael-hodgson.co.uk",
    github: "https://github.com/michael86/reading-app",
    img: "hackathon.png",
    alt: "Hackathon - Early Learner Reading",
    description:
      "As part of The Jump bootcamp, we had the oppertunity to take part in a hackathon. We had 8 hours to put together an online app to help parents teach early learners to read and spell.",
    builtWith: ["React", "Redux"],
  },
  {
    title: "Crimehood",
    link: "https://crimehood.michael-hodgson.co.uk/",
    github: "https://github.com/michael86/crime-hood",
    img: "crimehood.png",
    alt: "Crimehood",
    description:
      "A project utilising the police data api to show a user crimes as well as stop and searches within any area provided within the uk,",
    builtWith: ["Javascript", "HTML", "CSS", "AXIOS", "React"],
  },
];

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const scope = useRef<HTMLElement>(null);
  const projectRefs = useRef<Array<any>>([]);

  useLayoutEffect(() => {
    if (!projectRefs.current) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 990px)",
        isDesktop: "(min-width: 991px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { isDesktop, reduceMotion } = context.conditions!;

        if (reduceMotion) return;

        projectRefs.current.forEach((project, i) => {
          const anims = {
            desktop: {
              x: i % 2 === 0 ? 50 : -50,
              autoAlpha: 0,
            },
            mobile: {
              y: 50,
              autoAlpha: 0,
            },
          };

          const options: GSAPTweenVars = anims[isDesktop ? "desktop" : "mobile"];

          gsap.from(project, {
            ...options,
            scrollTrigger: {
              trigger: project,
              start: "top 60%",
            },
          });
        });
      },
      scope
    );
  }, []);

  return (
    <section className="projects" id="projects" ref={scope}>
      <h2>Projects</h2>

      {projects.map((project) => {
        return (
          <div className="project" ref={(e) => projectRefs.current.push(e)}>
            <h3 className="project__title">{project.title}</h3>
            <div className="project__container">
              <a href={project.link} className="project__link" target="__blank">
                <img src={`/imgs/projects/${project.img}`} alt={project.alt} />
              </a>

              <div className="project__description">
                {project.builtWith && (
                  <p>
                    Built with:{" "}
                    {project.builtWith.map((tech) => {
                      return <HighlightFont text={tech} />;
                    })}
                  </p>
                )}
                <p>{project.description}</p>

                <button>
                  <a href={project.github} target="__blank">
                    View Code
                  </a>
                </button>
                <button>
                  <a href={project.link} target="__blank">
                    Live Site
                  </a>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
