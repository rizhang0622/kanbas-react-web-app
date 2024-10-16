import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  const { pathname } = useLocation();

  const links = [
    {
      label: "Account",
      path: "/Kanbas/Account",
      icon: <FaRegCircleUser className="fs-1" />,
    },
    {
      label: "Dashboard",
      path: "/Kanbas/Dashboard",
      icon: <AiOutlineDashboard className="fs-1" />,
    },
    {
      label: "Courses",
      path: "/Kanbas/Dashboard",
      icon: <LiaBookSolid className="fs-1" />,
    },
    {
      label: "Calendar",
      path: "/Kanbas/Calendar",
      icon: <IoCalendarOutline className="fs-1" />,
    },
    {
      label: "Inbox",
      path: "/Kanbas/Inbox",
      icon: <FaInbox className="fs-1" />,
    },
    { label: "Labs", path: "/Labs", icon: <LiaCogSolid className="fs-1" /> },
  ];

  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 120 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img
          src="/images/NEU.svg"
          width="75px"
          alt="Northeastern University Logo"
        />
      </a>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`list-group-item text-center border-0 bg-black ${
            pathname.includes(link.label)
              ? "text-danger bg-white"
              : "text-white"
          }`}
        >
          {link.icon}
          <br />
          {link.label}
        </Link>
      ))}
    </div>
  );
}
