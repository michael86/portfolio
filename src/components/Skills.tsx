import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Skills = () => {
  const languages = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
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
  }, []);

  return (
    <div className="landing__languages" ref={languages}>
      <div>
        <div className="landing__skill">
          <div className="skill__content">
            <img src="/imgs/about/css.png" alt="css" />
            <h3>CSS</h3>
          </div>
        </div>

        <div className="landing__skill">
          <div className="skill__content">
            <img src="/imgs/about/html.png" alt="html" />
            <h3>HTML</h3>
          </div>
        </div>

        <div className="landing__skill">
          <div className="skill__content">
            <img src="/imgs/about/javascript.png" alt="javascript" />
            <h3>JAVASCRIPT</h3>
          </div>
        </div>

        <div className="landing__skill">
          <div className="skill__content">
            <img src="/imgs/about/git.png" alt="git" />
            <h3>GIT</h3>
          </div>
        </div>

        <div className="landing__skill">
          <div className="skill__content">
            <img src="/imgs/about/express.png" alt="express" />
            <h3>EXPRESS</h3>
          </div>
        </div>

        <div className="landing__skill">
          <div className="skill__content">
            <img src="/imgs/about/mongo.png" alt="mongo" />
            <h3>MONGO</h3>
          </div>
        </div>
      </div>
      <div>
        <div className="landing__skill">
          <div className="skill__content">
            <img src="/imgs/about/node.png" alt="node" />
            <h3>NODE</h3>
          </div>
        </div>

        <div className="landing__skill">
          <div className="skill__content">
            <img src="/imgs/about/react.png" alt="react" />
            <h3>REACT</h3>
          </div>
        </div>

        <div className="landing__skill">
          <div className="skill__content">
            <img src="/imgs/about/sass.png" alt="sass" />
            <h3>SASS/SCSS</h3>
          </div>
        </div>

        <div className="landing__skill">
          <div className="skill__content">
            <img src="/imgs/about/sql.png" alt="sql" />
            <h3>SQL</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
