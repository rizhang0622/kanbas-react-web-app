import { Link, useParams, useLocation } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaUsers,
  FaClipboardList,
  FaQuestionCircle,
} from "react-icons/fa";

const links = [
  { label: "Home", path: "Home", icon: FaHome },
  { label: "Modules", path: "Modules", icon: FaBook },
  { label: "Piazza", path: "Piazza", icon: FaUsers },
  { label: "Zoom", path: "Zoom", icon: FaUsers },
  { label: "Assignments", path: "Assignments", icon: FaClipboardList },
  { label: "Quizzes", path: "Quizzes", icon: FaQuestionCircle },
  { label: "People", path: "People", icon: FaUsers },
];

export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const isActive = pathname.includes(link.label);
        return (
          <Link
            key={link.label}
            to={`/Kanbas/Courses/${cid}/${link.path}`}
            id={`wd-course-${link.label.toLowerCase()}-link`}
            className={`list-group-item ${
              isActive ? "active" : "text-danger"
            } border-0`}
          >
            {link.icon && <link.icon className="me-2" />}
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
