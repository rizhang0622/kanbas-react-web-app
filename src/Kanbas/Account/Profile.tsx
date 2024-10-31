import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  // Check for current user and fetch profile data
  useEffect(() => {
    if (!currentUser) {
      navigate("/Kanbas/Account/Signin"); // Redirect to Sign In if no user is found
    } else {
      setProfile(currentUser); // Populate the profile state with current user data
    }
  }, [currentUser, navigate]);

  const signout = () => {
    dispatch(setCurrentUser(null)); // Clear the current user
    navigate("/Kanbas/Account/Signin"); // Navigate to Sign In
  };

  return (
    <div id="wd-profile-screen" className="container mt-5">
      <h1 className="text-center">Profile</h1>
      <div className="mb-3">
        <input
          value={profile.username}
          placeholder="Username"
          className="form-control"
          onChange={(e) => setProfile({ ...profile, username: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <input
          value={profile.password}
          placeholder="Password"
          type="password"
          className="form-control"
          onChange={(e) => setProfile({ ...profile, password: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <input
          value={profile.firstName}
          placeholder="First Name"
          className="form-control"
          onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <input
          value={profile.lastName}
          placeholder="Last Name"
          className="form-control"
          onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <input
          value={profile.dob}
          type="date"
          className="form-control"
          onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <input
          value={profile.email}
          type="email"
          placeholder="Email"
          className="form-control"
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <select
          value={profile.role}
          className="form-select"
          onChange={(e) => setProfile({ ...profile, role: e.target.value })}
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>
      <button onClick={signout} className="btn btn-danger w-100">
        Sign out
      </button>
    </div>
  );
}
