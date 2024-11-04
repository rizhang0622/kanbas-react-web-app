// src/Kanbas/Courses/Assignments/Editor.tsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import db from "../../Database"; // Import the db

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

const Editor: React.FC = () => {
  const { aid: assignmentId, cid: courseId } = useParams<{
    aid: string;
    cid: string;
  }>();
  
  // Use a fallback value for courseId to avoid TypeScript error
  const courseIdString = courseId || ""; // Fallback to an empty string

  const [assignment, setAssignment] = useState<Assignment>({
    _id: "",
    title: "",
    course: courseIdString, // Initialize with courseId
    description: "",
    points: 0,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (assignmentId) {
      const foundAssignment = db.assignments.find(
        (a: Assignment) => a._id === assignmentId
      );
      if (foundAssignment) {
        setAssignment(foundAssignment);
      }
    }
  }, [assignmentId]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (assignmentId) {
      dispatch(updateAssignment({ ...assignment, _id: assignmentId }));
    } else {
      dispatch(
        addAssignment({
          ...assignment,
          _id: Date.now().toString(),
          course: courseIdString, // Use the fallback value here
        })
      );
    }
    navigate(`/Kanbas/Courses/${courseIdString}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4 p-4">
      <h2>{assignmentId ? "Edit Assignment" : "New Assignment"}</h2>
      <form onSubmit={handleSave}>
        {/* Assignment Name */}
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label">
            Assignment Name
          </label>
          <input
            id="wd-name"
            className="form-control"
            value={assignment.title}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
            required
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label htmlFor="wd-description" className="form-label">
            Description
          </label>
          <textarea
            id="wd-description"
            className="form-control"
            value={assignment.description}
            onChange={(e) =>
              setAssignment({ ...assignment, description: e.target.value })
            }
            required
          />
        </div>

        {/* Points */}
        <div className="mb-3">
          <label htmlFor="wd-points" className="form-label">
            Points
          </label>
          <input
            id="wd-points"
            type="number"
            className="form-control"
            value={assignment.points}
            onChange={(e) =>
              setAssignment({ ...assignment, points: Number(e.target.value) })
            }
            required
          />
        </div>

        {/* Due Date */}
        <div className="mb-3">
          <label htmlFor="wd-due-date" className="form-label">
            Due Date
          </label>
          <input
            type="date"
            id="wd-due-date"
            className="form-control"
            value={assignment.dueDate}
            onChange={(e) =>
              setAssignment({ ...assignment, dueDate: e.target.value })
            }
            required
          />
        </div>

        {/* Available From */}
        <div className="mb-3">
          <label htmlFor="wd-available-from" className="form-label">
            Available From
          </label>
          <input
            type="date"
            id="wd-available-from"
            className="form-control"
            value={assignment.availableFrom}
            onChange={(e) =>
              setAssignment({ ...assignment, availableFrom: e.target.value })
            }
          />
        </div>

        {/* Available Until */}
        <div className="mb-3">
          <label htmlFor="wd-available-until" className="form-label">
            Available Until
          </label>
          <input
            type="date"
            id="wd-available-until"
            className="form-control"
            value={assignment.availableUntil}
            onChange={(e) =>
              setAssignment({ ...assignment, availableUntil: e.target.value })
            }
          />
        </div>

        <div className="d-flex justify-content-end">
          <Link to={`/Kanbas/Courses/${courseIdString}/Assignments`}>
            <button type="button" className="btn btn-secondary me-2">
              Cancel
            </button>
          </Link>
          <button type="submit" className="btn btn-success">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editor;
