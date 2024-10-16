import { Link, useParams, useLocation } from "react-router-dom";
import { FaHome, FaBook, FaUsers, FaClipboardList, FaQuestionCircle } from "react-icons/fa"; // Import icons as needed

const links = [
  { label: "Home", path: "Home", icon: FaHome },
  { label: "Modules", path: "Modules", icon: FaBook },
  { label: "Piazza", path: "Piazza", icon: FaUsers }, // Adjust as necessary
  { label: "Zoom", path: "Zoom", icon: FaUsers }, // Adjust as necessary
  { label: "Assignments", path: "Assignments", icon: FaClipboardList },
  { label: "Quizzes", path: "Quizzes", icon: FaQuestionCircle }, // Adjust as necessary
  { label: "People", path: "People", icon: FaUsers },
];

export default function CoursesNavigation() {
  const { cid } = useParams(); // Get course ID from URL
  const { pathname } = useLocation(); // Get current path

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map(link => {
        const isActive = pathname.includes(link.label); // Check if the link is active
        return (
          <Link
            key={link.label}
            to={`/Kanbas/Courses/${cid}/${link.path}`} // Use dynamic course ID
            id={`wd-course-${link.label.toLowerCase()}-link`}
            className={`list-group-item ${isActive ? "active" : "text-danger"} border-0`}
          >
            {link.icon && <link.icon className="me-2" />} {/* Render icon if available */}
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
