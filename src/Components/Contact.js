import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <section id="contact" className="container text-center mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="display-5 fw-bold mt-5">Get in Touch</h2>
            <div className="col-lg-8 mx-auto">
              <h4 className="lead mb-4 mt-4">
                If you have any questions or would like to learn more about us,
                feel free to contact us:
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
              <div className="mt-5 line-height">
                <h4 className="fw-bold ">Business Hours</h4>
                <ul className="list-unstyled">
                  <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                  <li>Saturday: 10:00 AM - 3:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="container mt-5 mb-4">
              <div className="justify-content-center">
                  <h2 className="text-center mb-4">Contact Us</h2>
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="fname"
                          placeholder="First Name"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="lname"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="city"
                          placeholder="City"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          placeholder="Phone"
                        />
                      </div>
                      <div className="col-md-12 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="Address"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        id="message"
                        rows="4"
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn1  mt-3 mb-5">
                      Send Message
                    </button>
                  </form>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-5'>
<h4 className='fw-bold'>Our Office Location</h4>
<iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0000000000005!2d-122.419416!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f8e6e2d3f%3A0x9e8bde1eb7e6cdb0!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1633377674380!5m2!1sen!2sus"
width="100%" 
height="350" 
style={{ border: 0 }} 
allowFullScreen="" 
loading="lazy"
title="Google Maps"
></iframe>
</div>
      </section>
    </>
  );
}

export default Contact;
