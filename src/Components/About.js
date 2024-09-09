import React from "react";
import Banner from "./Banner";
import sideImg from "../Image/sidepic.jpg";
import Divider from "./Divider";

function About() {
  return (
    <>
      <Banner
        image="https://media.istockphoto.com/id/1402996749/photo/contact-us-hand-of-man-holding-mobile-smartphone-with-mail-phone-email-chat-icon-cutomer.jpg?s=612x612&w=0&k=20&c=XfKSQBcXQRIc4edWyiCBI_nDNvPxX_ShyjFkpGJWFds="
        title="About our website"
        description="Welcome to InnovateTech Solutions, where we specialize in transforming
        innovative ideas into cutting-edge technology. Our journey began in a....."
      />
      <section id="introduction" className="container my-5 py-5 text-center">
        <h3>About Us</h3>
        <h1 className="display-5 mb-4 fw-bold">Helping Business to </h1>
        <h5 className="d-block mx-auto w-75 line-height-about">
          Welcome to InnovateTech Solutions, where we specialize in transforming
          innovative ideas into cutting-edge technology. Our journey began in a
          small garage in Silicon Valley with a team of passionate engineers and
          visionaries determined to push the boundaries of what’s possible in
          tech. Since our founding in 2010, we’ve grown into a global leader in
          software development and AI solutions, empowering businesses worldwide
          to achieve their digital transformation goals. At InnovateTech
          Solutions, we are dedicated to harnessing the power of technology to
          solve complex challenges and drive progress in the ever-evolving tech
          landscape.
        </h5>
        <button
          type="button"
          className="btn btn1 btn-outline-success btn-lg px-4 mt-4"
        >
          Know More
        </button>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card" style={{ width: "26rem" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxRytIRjRcYtRWUu5-Idxbmd8oQGn3k8RY8g&s"
                className="card-img-top"
                alt="Card image 1"
              />
              <div className="card-body">
                <h5 className="card-title">Card title 1</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Card subtitle
                </h6>
                <p className="card-text line-height">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "26rem" }}>
              <img
                src="https://media.istockphoto.com/id/655667264/photo/creative-layout-made-of-green-leaves-with-paper-card-note-flat-lay-nature-concept.jpg?s=612x612&w=0&k=20&c=4Na7uj6sAYGevNQG8Fh442vS5leENcxbzZgmJ2zfcqI="
                className="card-img-top"
                alt="Card image 2"
              />
              <div className="card-body">
                <h5 className="card-title">Card title 2</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Card subtitle
                </h6>
                <p className="card-text line-height">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "26rem" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-F0CY2YN2e7ZhYEHCMrX-OVSdTLM9Ph0xfA&s"
                className="card-img-top"
                alt="Card image 3"
              />
              <div className="card-body">
                <h5 className="card-title">Card title 3</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Card subtitle
                </h6>
                <p className="card-text line-height">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider
        title="About our company"
        description="the point of view as someone using your product to create
              infographics from their blog posts I can see that adding real
              value for"
      />
      <div className="container  py-4  align-items-center mt-4 mb-4">
        <div className="row">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={sideImg}
              alt="Logo"
              className="d-block mx-lg-auto img-fluid"
            />
          </div>
          <div className="col-lg-6 py-4 px-4 ">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              What people say about
            </h1>
            <p className="lead text-justify">
              This is a really good idea. I'm a visual learner so if something
              looks nice I'm much more inclined to read it. Just signed up! From
              the point of view as someone using your product to create
              infographics from their blog posts I can see that adding real
              value for them and then from the point of view of the user who's
              looking at the infographic it's a great way to get them engaged.
              Great idea.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn1 btn-lg px-4 me-md-2">
                Primary
              </button>
            </div>
          </div>
        </div>
      </div>
      <Divider
        title="Teams"
        description="posts I can see that adding real the point of view as someone using your product to create
              infographics from their blog 
              value for"
      />

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="team-member">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_KXEB-S2jZ4g9Ae7U-8CRWzzIFTXGuiiPUg&s"
                alt="Team Member 1"
                className="team-img"
              />
              <h5 className="team-name">Jhon</h5>
              <p className="team-role">CEO</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-member">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8R8QqmvD2GHfMgcUODxvVme8Cm6unpEDQ8w&s"
                alt="Team Member 2"
                className="team-img"
              />
              <h5 className="team-name">Osiris</h5>
              <p className="team-role">CTO</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-member">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm3ONrcsf3qgz9CEHEbamRBMZ-OaBaI-dG1Q&s"
                alt="Team Member 3"
                className="team-img"
              />
              <h5 className="team-name">Ron</h5>
              <p className="team-role">Manager</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
