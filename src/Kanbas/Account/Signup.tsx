import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="container mt-5">
      <h1 className="text-center">Sign up</h1>
      <div className="mb-3">
        <input placeholder="Username" className="form-control" />
      </div>
      <div className="mb-3">
        <input placeholder="Password" type="password" className="form-control" />
      </div>
      <div className="mb-3">
        <input placeholder="Verify Password" type="password" className="form-control" />
      </div>
      <Link to="/Kanbas/Account/Profile" className="btn btn-primary w-100 mb-2">
        Sign up
      </Link>
      <Link to="/Kanbas/Account/Signin" className="d-block text-center">
        Sign in
      </Link>
    </div>
  );
}
