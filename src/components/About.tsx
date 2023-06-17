import { useLayoutEffect, useRef } from "react";
import "../styles/About.css";
import { gsap } from "gsap";
import usePrefersReducedMotion from "../hooks/usePreferesReducedMotion";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const prefersReducedMotion: boolean = usePrefersReducedMotion();
  const scope = useRef<HTMLElement>(null);
  const languages = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion || !scope.current || !languages.current) return;

    const header: HTMLElement = scope.current.children[0] as HTMLElement;
    const paragraphs: Array<any> = Array.from(scope.current!.children[1].children[0].children);

    gsap.context(() => {
      gsap
        .timeline()
        .from(header, {
          scrollTrigger: {
            trigger: scope.current,
            start: "top bottom",
            end: "top 30",
            scrub: true,
          },
          x: 100,
          autoAlpha: 0,
        })
        .from(paragraphs, {
          scrollTrigger: {
            trigger: scope.current,
            start: "top bottom",
            end: "top 30",
            scrub: true,
          },
          y: 100,
          autoAlpha: 0,
          scale: 0,
        });
    }, [scope]);

    gsap.context(() => {
      gsap.from(".about__skill", {
        scrollTrigger: {
          trigger: languages.current,
          start: "top 65%",
        },
        scale: 0,
        autoAlpha: 0,
        delay: "random(0, 1)",
      });
    }, [languages.current]);
  }, [prefersReducedMotion]);

  return (
    <section className="about" id="about" ref={scope}>
      <h2>About</h2>
      <div className="about__container">
        <div className="about__summary">
          <p>
            A lover of all things tech, I'm a full stack web developer with a passion for
            animations. With a fast learning mentality and an attitude that does well under
            pressure, I'm always eager to learn new frameworks, libraries as well as tech stacks.
          </p>
          <p className="mt-1">
            I always strive to deliver any tasks assigned to me on time, to the best of my
            capabilites and am always open to constructive critisim.
          </p>
        </div>

        <div className="about__languages" ref={languages}>
          <div className="languages__left-container">
            <div className="about__skill">
              <div className="skill__content">
                <img src="/imgs/about/css.png" alt="css" />
                <h3>CSS</h3>
              </div>
            </div>

            <div className="about__skill">
              <div className="skill__content">
                <img src="/imgs/about/html.png" alt="html" />
                <h3>HTML</h3>
              </div>
            </div>

            <div className="about__skill">
              <div className="skill__content">
                <img src="/imgs/about/javascript.png" alt="javascript" />
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>

          <div className="languages__center-container">
            <div className="about__skill">
              <div className="skill__content">
                <img src="/imgs/about/git.png" alt="git" />
                <h3>GIT</h3>
              </div>
            </div>

            <div className="about__skill">
              <div className="skill__content">
                <img src="/imgs/about/express.png" alt="express" />
                <h3>EXPRESS</h3>
              </div>
            </div>

            <div className="about__skill">
              <div className="skill__content">
                <img src="/imgs/about/mongo.png" alt="mongo" />
                <h3>MONGO</h3>
              </div>
            </div>

            <div className="about__skill">
              <div className="skill__content">
                <img src="/imgs/about/node.png" alt="node" />
                <h3>NODE</h3>
              </div>
            </div>
          </div>

          <div className="languages__right-container">
            <div className="about__skill">
              <div className="skill__content">
                <img src="/imgs/about/react.png" alt="react" />
                <h3>REACT</h3>
              </div>
            </div>

            <div className="about__skill">
              <div className="skill__content">
                <img src="/imgs/about/sass.png" alt="sass" />
                <h3>SASS/SCSS</h3>
              </div>
            </div>

            <div className="about__skill">
              <div className="skill__content">
                <img src="/imgs/about/sql.png" alt="sql" />
                <h3>SQL</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
