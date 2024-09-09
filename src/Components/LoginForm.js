import React from "react";

function LoginForm() {
  return (
    <div className="container form-box">
      <div className="row w-100">
        <div className="col-md-6 col-lg-4 mx-auto">
          <h2 className="text-center">Login</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label"></label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label"></label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-form btn-primary mt-3 w-50"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
