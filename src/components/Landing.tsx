import "../styles/Landing.css";

import SplitContent from "./SplitContent";
import { useLayoutEffect, useRef, RefObject } from "react";
import { gsap } from "gsap";
import usePrefersReducedMotion from "../hooks/usePreferesReducedMotion";
import ParticlesComponent from "./ParticlesComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  const scope = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (!scope.current || prefersReducedMotion) return;

    gsap.context(() => {
      const header = scope.current?.children[1];
      if (!header) return;

      const letters = Array.from(header?.children);

      gsap
        .timeline()
        .from(
          letters,
          {
            y: 50,
            autoAlpha: 0,

            ease: "ease",
            stagger: 0.1,
          },
          0
        )
        .from("p", { x: 500, autoAlpha: 0, duration: 1.5, ease: "bounce" }, 0)
        .from("a", { scale: 0, y: -200, ease: "bounce" });
    }, scope.current);
  }, []);

  return (
    <>
      <div className="landing relative" id="landing" ref={scope}>
        <div className="absolute">
          <ParticlesComponent />
        </div>
        <SplitContent
          content={"Hi, I'm Michael."}
          classes={["landing__header z-index-1"]}
          tag={"h1"}
        />

        <p className="z-index-1">
          I'm a <span className="secondary">full stack</span> web developer
        </p>

        <a href="#projects">
          view my projects &nbsp;
          <FontAwesomeIcon icon={faArrowDown} />
        </a>
      </div>
    </>
  );
};

export default Landing;
