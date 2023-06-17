import "./../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>Have a question or want to work together? </p>
      <p>Contact me below, and I'll get back to you as soon as possible.</p>
      <form>
        <div className="contact__wrapper">
          <input type="email" name="email" id="contact__email" placeholder=" " required />
          <label htmlFor="contact__email">Email</label>
          <span className="underline"></span>
        </div>
        <div className="contact__wrapper">
          <input type="text" name="name" id="contact__name" placeholder=" " required />
          <label htmlFor="contact__name">Name</label>
          <span className="underline"></span>
        </div>

        <div className="contact__wrapper">
          <textarea
            name="message"
            id="contact__message"
            cols={30}
            rows={10}
            placeholder=" "
            required
          />
          <label htmlFor="contact__message">Message</label>
          <span className="underline"></span>
        </div>

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
