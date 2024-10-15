import { Link } from "react-router-dom";
import { FaClipboardList, FaEllipsisV } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";

interface AssignmentItemProps {
  title: string;
  index: number;
}

export default function AssignmentItem({ title, index }: AssignmentItemProps) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center border-0 mb-2">
      <div className="d-flex align-items-center">
        <span className="text-success me-2">
          <FaClipboardList />
        </span>
        <span className="text-muted me-2">
          <FaEllipsisV />
        </span>
      </div>

      <div>
        <Link
          className="wd-assignment-link me-2"
          to={`/Kanbas/Courses/1234/Assignments/12${index + 3}`}
        >
          {title}
        </Link>
        <br />
        <span className="text-danger">| Multiple Modules</span>
        <span>
          | Not available until May {6 + index} at 12:00am | Due May{" "}
          {13 + index} at 11:59pm | 100 pts
        </span>
      </div>

      <GreenCheckmark />
      <span className="text-muted me-2">
        <FaEllipsisV />
      </span>
    </li>
  );
}
