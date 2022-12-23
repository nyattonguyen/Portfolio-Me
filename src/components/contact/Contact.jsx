import { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineMessage, AiOutlineWhatsApp } from "react-icons/ai";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_q60c0gb",
      "template_qiq8fjb",
      form.current,
      "wDkixgHitUfEhtUST"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>nyattonguyen@gmail.com</h5>
            <a href="mailto:nyattonguyen@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineMessage className="contact__option-icon" />
            <h4>Message</h4>
            <h5>Egatorturials</h5>
            <a
              href="https://m.me/profile.php?id=100013007494386"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+84 898419640</h5>
            <a
              href="https://api.whatsapp.com/send?phone+0898419640"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End of contact options  */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ fontSize: 16 }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
