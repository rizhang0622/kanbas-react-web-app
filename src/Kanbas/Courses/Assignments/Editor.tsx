import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  description?: string;
  points?: number;
  assignTo?: string;
  dueDate?: string;
  availableFrom?: string;
  availableUntil?: string;
}

const Editor: React.FC = () => {
  const { aid: assignmentId, cid: courseId } = useParams<{
    aid: string;
    cid: string;
  }>();
  const [assignment, setAssignment] = useState<Assignment | null>(null);
  const [assignmentName, setAssignmentName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [points, setPoints] = useState<number | undefined>(undefined);
  const [assignTo, setAssignTo] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [availableFrom, setAvailableFrom] = useState<string>("");
  const [availableUntil, setAvailableUntil] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAssignment = () => {
      const foundAssignment = db.assignments.find(
        (a) => a._id === assignmentId
      );

      if (foundAssignment) {
        setAssignment(foundAssignment);
      } else {
        setAssignment(null);
      }
    };

    fetchAssignment();
  }, [assignmentId]);

  useEffect(() => {
    if (assignment) {
      setAssignmentName(assignment.title);
      setDescription(assignment.description || "");
      setPoints(assignment.points);
      setAssignTo(assignment.assignTo || "");
      setDueDate(assignment.dueDate || "");
      setAvailableFrom(assignment.availableFrom || "");
      setAvailableUntil(assignment.availableUntil || "");
    }
  }, [assignment]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you could add code to save the updated assignment to the database
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4 p-4">
      <h2>Edit Assignment</h2>
      <form onSubmit={handleSave}>
        {/* Assignment Name */}
        <div className="row mb-3">
          <p className="col-form-label col-sm-2 w-100">Assignment Name</p>
          <div className="col-sm-10 w-100">
            <input
              id="wd-name"
              className="form-control"
              value={assignmentName}
              onChange={(e) => setAssignmentName(e.target.value)}
            />
          </div>
        </div>

        {/* Description */}
        <div className="row mb-3">
          <div className="col-sm-10 w-100">
            <textarea
              id="wd-description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the assignment..."
            />
          </div>
        </div>

        {/* Points */}
        <div className="row mb-3">
          <label htmlFor="wd-points" className="col-form-label col-sm-2">
            Points
          </label>
          <div className="col-sm-10">
            <input
              id="wd-points"
              type="number"
              className="form-control"
              value={points}
              onChange={(e) => setPoints(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Assignment Group */}
        <div className="row mb-3">
          <label htmlFor="wd-group" className="col-form-label col-sm-2">
            Assignment Group
          </label>
          <div className="col-sm-10">
            <select id="wd-group" className="form-select">
              <option>Group 1</option>
              <option>Group 2</option>
              <option>Group 3</option>
            </select>
          </div>
        </div>

        {/* Display Grade As */}
        <div className="row mb-3">
          <label
            htmlFor="wd-display-grade-as"
            className="col-form-label col-sm-2"
          >
            Display Grade As:
          </label>
          <div className="col-sm-10">
            <select id="wd-display-grade-as" className="form-select">
              <option>Percentage</option>
              <option>Points</option>
            </select>
          </div>
        </div>

        {/* Submission Type */}
        <div className="row mb-3">
          <label htmlFor="wd-submission-type" className="col-form-label col-sm-2">
            Submission Type:
          </label>
          <div className="col-sm-10 wd-submission-type-group p-1">
            <select id="wd-submission-type" className="form-select">
              <option>Online</option>
              <option>Offline</option>
            </select>

            <strong>Online Entry Options:</strong>
            <div className="mb-2">
              <label>
                <input type="checkbox" id="wd-text-entry" /> Text entry
              </label>
            </div>
            <div className="mb-2">
              <label>
                <input type="checkbox" id="wd-website-url" /> Website URL
              </label>
            </div>
            <div className="mb-2">
              <label>
                <input type="checkbox" id="wd-media-recordings" /> Media
                Recordings
              </label>
            </div>
            <div className="mb-2">
              <label>
                <input type="checkbox" id="wd-student-annotation" /> Student
                Annotation
              </label>
            </div>
            <div className="mb-2">
              <label>
                <input type="checkbox" id="wd-file-upload" /> File Uploads
              </label>
            </div>
          </div>
        </div>

        {/* Assign To */}
        <div className="row mb-3">
          <label className="col-form-label col-sm-2">Assign:</label>
          <div className="col-form-label col-sm-10 mb-3">
            <label className="col-form-label col-sm-8">Assign to:</label>
            <input
              id="wd-assign-to"
              className="form-control"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
            />
          </div>
        </div>

        {/* Due Date */}
        <div className="row mb-3">
          <label htmlFor="wd-due-date" className="col-form-label col-sm-2">
            Due:
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              id="wd-due-date"
              className="form-control"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        </div>

        {/* Available From & Until */}
        <div className="row mb-3">
          <label className="col-form-label col-sm-2">Availability:</label>
          <div className="col-form-label col-sm-10 mb-3">
            <div className="row">
              <label htmlFor="wd-available-from" className="col-form-label col-sm-6">
                Available From:
              </label>
              <label htmlFor="wd-available-until" className="col-form-label col-sm-6">
                Available Until:
              </label>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <input
                  type="date"
                  id="wd-available-from"
                  className="form-control"
                  value={availableFrom}
                  onChange={(e) => setAvailableFrom(e.target.value)}
                />
              </div>
              <div className="col-sm-6">
                <input
                  type="date"
                  id="wd-available-until"
                  className="form-control"
                  value={availableUntil}
                  onChange={(e) => setAvailableUntil(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="d-flex justify-content-end">
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
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
