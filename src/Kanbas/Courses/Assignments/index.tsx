// src/Kanbas/Courses/Assignments/index.tsx
import { Link, useParams } from "react-router-dom";
import { FaSearch, FaPlus, FaClipboardList, FaEllipsisV } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";
import { useState } from "react";
import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";

// Define the Assignment interface locally
interface Assignment {
  _id: string;
  title: string;
  course: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableFrom?: string;
  availableUntil?: string;
}

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const assignments = useSelector(
    (state: { assignmentsReducer: { assignments: Assignment[] } }) =>
      state.assignmentsReducer.assignments
  );

  const filteredAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    dispatch(deleteAssignment(id));
    setConfirmDeleteId(null);
  };

  return (
    <div id="wd-assignments">
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
          <Link
            id="wd-add-assignment"
            to={`/Kanbas/Courses/${cid}/Assignments/new`}
            className="btn btn-danger"
          >
            <FaPlus /> Assignment
          </Link>
        </div>
      </div>

      <h3 id="wd-assignments-title">
        <BsGripVertical className="me-2 fs-3" />
        ASSIGNMENTS <span className="text-muted">40% of Total</span>
        <button className="btn btn-secondary float-end">+</button>
      </h3>

      <ul id="wd-assignment-list" className="list-group rounded-0">
        {filteredAssignments.length > 0 ? (
          filteredAssignments.map((assignment) => (
            <li
              key={assignment._id}
              className="list-group-item d-flex align-items-center border-0 mb-0 p-3 ps-1"
            >
              <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
                <span className="text-success me-2">
                  <FaClipboardList />
                </span>
                
              </div>


              <div className="ms-2">
                <Link
                  className="wd-assignment-link me-2 text-dark fw-bold fs-5 text-decoration-none"
                  to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                >
                  {assignment.title}
                </Link>

                <br />
                <span className="text-danger"> Multiple Modules</span>

                <span className="ms-1">
                  | Not available until {assignment.availableFrom}  Due{" "}
                  {assignment.dueDate} | {assignment.points} pts
                </span>
              </div>
              
              <div className="text-muted me-2 float-end ms-auto p-2">
              <GreenCheckmark />
                <FaEllipsisV className="ms-3"/>
              </div>
            </li>
          ))
        ) : (
          <li className="list-group-item">
            No assignments available for this course.
          </li>
        )}
      </ul>

      {confirmDeleteId && (
        <div className="alert alert-warning">
          <p>Are you sure you want to delete this assignment?</p>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(confirmDeleteId)}
          >
            Yes
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setConfirmDeleteId(null)}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
