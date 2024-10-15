import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="container mt-5">
      <h1 className="text-center">Profile</h1>
      <div className="mb-3">
        <input
          defaultValue="alice"
          placeholder="Username"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          defaultValue="123"
          placeholder="Password"
          type="password"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          defaultValue="Alice"
          placeholder="First Name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          defaultValue="Wonderland"
          placeholder="Last Name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input defaultValue="2000-01-01" type="date" className="form-control" />
      </div>
      <div className="mb-3">
        <input
          defaultValue="alice@wonderland"
          type="email"
          placeholder="Email"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <select defaultValue="FACULTY" className="form-select">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>
      <Link to="/Kanbas/Account/Signin" className="btn btn-danger w-100">
        Sign out
      </Link>
    </div>
  );
}
