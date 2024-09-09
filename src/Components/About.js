import React from "react";

function About() {
  return (
    <>
      <section id="introduction" className="container my-5 py-5 text-center">
        <h3>About Us</h3>
        <h1  className="display-5 mb-4 fw-bold">Helping Business to </h1>
        <h5 className="d-block mx-auto w-75">
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
              <div className="card-body">
                <h5 className="card-title">Card title 1</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "26rem" }}>
              <div className="card-body">
                <h5 className="card-title">Card title 2</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "26rem" }}>
              <div className="card-body">
                <h5 className="card-title">Card title 3</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
