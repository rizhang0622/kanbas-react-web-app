import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="container mt-5">
      <h1 className="text-center">Sign in</h1>
      <div className="mb-3">
        <input
          id="wd-username"
          placeholder="Username"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          id="wd-password"
          placeholder="Password"
          type="password"
          className="form-control"
        />
      </div>
      <Link
        id="wd-signin-btn"
        to="/Kanbas/Account/Profile"
        className="btn btn-primary w-100 mb-2"
      >
        Sign in
      </Link>
      <Link
        id="wd-signup-link"
        to="/Kanbas/Account/Signup"
        className="d-block text-center"
      >
        Sign up
      </Link>
    </div>
  );
}
