import { useLayoutEffect, useRef } from "react";
import "../styles/About.css";
import { gsap } from "gsap";
import usePrefersReducedMotion from "../hooks/usePreferesReducedMotion";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const prefersReducedMotion: boolean = usePrefersReducedMotion();
  const scope = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion || !scope.current) return;

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
  }, [prefersReducedMotion]);

  return (
    <section className="about" id="about" ref={scope}>
      <h2>About</h2>
      <div className="about__container">
        <div className="about__summary">
          <p>
            A lover of all things tech, I'm a full-stack web developer with a deep passion for
            animations and a keen interest in the latest technological advancements. My journey in
            the tech world has been driven by an insatiable curiosity and a desire to create
            engaging, dynamic user experiences. With a fast learning mentality and an attitude that
            thrives under pressure, I continuously seek out new frameworks, libraries, and tech
            stacks to expand my skill set and stay ahead of industry trends.
          </p>

          <p className="mt-1">
            I take great pride in my ability to deliver any tasks assigned to me on time and to the
            best of my capabilities. My approach to work is detail-oriented and driven by a
            commitment to excellence, ensuring that every project I undertake meets the highest
            standards of quality. Moreover, I am always open to constructive criticism and actively
            seek feedback to improve my work. This openness to learning and growth enables me to
            adapt quickly and effectively to new challenges and opportunities in the ever-evolving
            tech landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
