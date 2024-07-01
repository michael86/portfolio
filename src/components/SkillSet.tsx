import { useRef } from "react";

const SkillSet = () => {
  const languages = useRef<HTMLDivElement>(null);

  return (
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
  );
};

export default SkillSet;
