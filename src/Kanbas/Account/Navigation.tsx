import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {!currentUser && ( // Show Sign in and Sign up links if no user is signed in
        <>
          <Link
            to="/Kanbas/Account/Signin"
            id="wd-account-signin-link"
            className="list-group-item active border border-0"
          >
            Sign in
          </Link>
          <Link
            to="/Kanbas/Account/Signup"
            id="wd-account-signup-link"
            className="list-group-item text-danger border-0"
          >
            Sign up
          </Link>
        </>
      )}
      {currentUser && ( // Show Profile link if a user is signed in
        <Link
          to="/Kanbas/Account/Profile"
          id="wd-account-profile-link"
          className="list-group-item text-danger border-0"
        >
          Profile
        </Link>
      )}
    </div>
  );
}
