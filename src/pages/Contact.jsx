import "../css/Contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact-main-container">
        <div className="contact-text-card">
          <h1 className="contact-title">Let's see what we can do together</h1>
        </div>
        <div className="contact-links-card">
          <h1>Let's talk</h1>
          <h3>
            We are excited to hear about your project, your vision and your
            goal. Let's set up a meeting.
          </h3>
          <a href="mailto:keanuph@gmail.com" className="email-btn">
            Start a project
          </a>
        </div>
      </div>
    </>
  );
}
