import { useState } from "react";

export default function AssignmentEditor() {
  const [assignmentName, setAssignmentName] = useState("A1 - ENV + HTML");
  const [description, setDescription] = useState(
    "The assignment is available online. Submit a link to the landing page of..."
  );
  const [points, setPoints] = useState(100);
  const [assignTo, setAssignTo] = useState("Everyone");
  const [dueDate, setDueDate] = useState("2024-05-13");
  const [availableFrom, setAvailableFrom] = useState("");
  const [availableUntil, setAvailableUntil] = useState("");

  return (
    <div id="wd-assignments-editor" className="container mt-4 p-4">
      <h2>Edit Assignment</h2>

      <div className="row mb-3">
        <label htmlFor="wd-name" className="col-form-label col-sm-2">
          Assignment Name
        </label>
        <div className="col-sm-10">
          <input
            id="wd-name"
            className="form-control"
            value={assignmentName}
            onChange={(e) => setAssignmentName(e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-description" className="col-form-label col-sm-2">
          Description
        </label>
        <div className="col-sm-10">
          <textarea
            id="wd-description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

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

      <div className="row mb-3">
        <label htmlFor="wd-submission-type" className="col-form-label col-sm-2">
          Submission Type:
        </label>
        <div className="col-sm-10">
          <select id="wd-submission-type" className="form-select">
            <option>Online</option>
            <option>Offline</option>
          </select>
        </div>
      </div>

      <div className="mb-3">
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
            <input type="checkbox" id="wd-media-recordings" /> Media Recordings
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

      <div className="row mb-3">
        <label htmlFor="wd-assign-to" className="col-form-label col-sm-2">
          Assign to:
        </label>
        <div className="col-sm-10">
          <input
            id="wd-assign-to"
            className="form-control"
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
          />
        </div>
      </div>

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

      <div className="row mb-3">
        <label htmlFor="wd-available-from" className="col-form-label col-sm-2">
          Available From:
        </label>
        <div className="col-sm-10">
          <input
            type="date"
            id="wd-available-from"
            className="form-control"
            value={availableFrom}
            onChange={(e) => setAvailableFrom(e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-available-until" className="col-form-label col-sm-2">
          Available Until:
        </label>
        <div className="col-sm-10">
          <input
            type="date"
            id="wd-available-until"
            className="form-control"
            value={availableUntil}
            onChange={(e) => setAvailableUntil(e.target.value)}
          />
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <button id="wd-cancel" className="btn btn-secondary me-2">
          Cancel
        </button>
        <button id="wd-save" className="btn btn-success">
          Save
        </button>
      </div>
    </div>
  );
}
