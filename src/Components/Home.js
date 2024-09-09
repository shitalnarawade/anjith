import React, { useState } from "react";
import sideImg from "../Image/sidepic.jpg";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import "./Main.css";

function Home() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm((prevState) => !prevState);
  };

  return (
    <div className="container main-container mt-4">
      <div className="text-center">
        <div style={{ margin: "0 auto", maxWidth: "800px" }}>
          {!showLoginForm ? (
            <>
              <h1 className="display-4 mb-4 fw-bold custom-line-height mt-5 custom-heading">
                Turn your blogs into stunning, shareable infographics, powered
                by AI
              </h1>
              <h3 className="mt-4">
                Turn your blogs into stunning, shareable infographics, powered
                by AI
              </h3>
              <button className="btn btn1 mt-4" onClick={handleLoginClick}>
                Login
              </button>
            </>
          ) : (
            <LoginForm />
          )}
        </div>
      </div>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5 mt-4">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={sideImg}
            alt="Logo"
            className="d-block mx-lg-auto img-fluid"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">What people say about</h1>
          <p className="lead">
            This is a really good idea. I'm a visual learner so if something
            looks nice I'm much more inclined to read it. Just signed up! From
            the point of view as someone using your product to create
            infographics from their blog posts I can see that adding real value
            for them and then from the point of view of the user who's looking
            at the infographic it's a great way to get them engaged. Great idea.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Primary
            </button>
          </div>
        </div>
      </div>

      <section id="contact" className="container text-center mt-5">
        <h2 className="display-5 fw-bold mt-5">Get in Touch</h2>

        <div className="col-lg-8 mx-auto">
          <h4 className="lead mb-4 mt-4">
            If you have any questions or would like to learn more about us, feel
            free to contact us:
          </h4>

          <p>
            Email: <a href="mailto:email@example.com">email@example.com</a>
          </p>
          <p>
            Phone: <a href="tel:+1234567890">+123-456-7890</a>
          </p>

          <div className="social-media mt-4">
            <p>Follow us on:</p>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary mx-2"
            >
              Facebook
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-info mx-2"
            >
              Twitter
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-danger mx-2"
            >
              Instagram
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary mx-2"
            >
              LinkedIn
            </Link>
          </div>

          <div className="mt-5">
            <h4 className="fw-bold">Business Hours</h4>
            <ul className="list-unstyled">
              <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
              <li>Saturday: 10:00 AM - 3:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          <div className="mt-5">
            <div className="row w-100">
              <div className="col-md-6 col-lg-4 mx-auto">
                <h4 className="fw-bold">Contact Form</h4>
                <form>
                  <div className="form-group">
                    {/* <label htmlFor='name'>Name</label> */}
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    {/* <label htmlFor='email'>Email address</label> */}
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    {/* <label htmlFor='message'>Message</label> */}
                    <textarea
                      className="form-control"
                      id="message"
                      rows="4"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary mt-3">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
