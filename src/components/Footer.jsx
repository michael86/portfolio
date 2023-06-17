import "./../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__scroll">
        <a href="#landing">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24">
            <title></title>
            <path
              fill="#fafafa"
              d="M17.707 10.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM17.707 17.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"
            ></path>
          </svg>
        </a>
      </div>

      <div className="footer__contact-container">
        <a href="mailto:michael8t6@gmail.com">
          <img src="/imgs/footer/mail.svg" alt="email" />
        </a>
        <a href="https://github.com/michael86" target="__blank">
          <img src="/imgs/footer/github.svg" alt="github" />
        </a>
      </div>

      <p>michael hodgson &copy;</p>
    </footer>
  );
};

export default Footer;
