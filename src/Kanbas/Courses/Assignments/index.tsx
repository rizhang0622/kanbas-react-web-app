import { Link, useParams } from "react-router-dom";
import { FaSearch, FaPlus, FaClipboardList, FaEllipsisV } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

  const filteredAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );

  return (
    <div id="wd-assignments" className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-50">
          <span className="input-group-text">
            <FaSearch />
          </span>
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search for Assignments"
          />
        </div>
        <div>
          <button id="wd-add-assignment-group" className="btn btn-light me-2">
            <FaPlus /> Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            <FaPlus /> Assignment
          </button>
        </div>
      </div>

      <h3 id="wd-assignments-title">
        ASSIGNMENTS <span className="text-muted">40% of Total</span>
        <button className="btn btn-secondary float-end">+</button>
      </h3>

      <ul id="wd-assignment-list" className="list-group">
        {filteredAssignments.length > 0 ? (
          filteredAssignments.map((assignment) => (
            <li
              key={assignment._id}
              className="list-group-item d-flex justify-content-between align-items-center border-0 mb-2"
            >
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
                  to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} 
                >
                  {assignment.title}
                </Link>

                <br />
                <span className="text-danger">| Multiple Modules</span>

                <span>
                  | Not available until May 6 at 12:00am | Due May 13 at 11:59pm
                  | 100 pts
                </span>
              </div>

              <GreenCheckmark />
              <span className="text-muted me-2">
                <FaEllipsisV />
              </span>
            </li>
          ))
        ) : (
          <li className="list-group-item">
            No assignments available for this course.
          </li>
        )}
      </ul>
    </div>
  );
}
