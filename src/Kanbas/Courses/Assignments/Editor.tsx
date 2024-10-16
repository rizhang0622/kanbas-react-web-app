import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import db from "../../Database";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  description?: string; // Optional
  points?: number; // Optional
  assignTo?: string; // Optional
  dueDate?: string; // Optional
  availableFrom?: string; // Optional
  availableUntil?: string; // Optional
}

const Editor: React.FC = () => {
  const { aid: assignmentId, cid: courseId } = useParams<{ aid: string; cid: string }>();
  const [assignment, setAssignment] = useState<Assignment | null>(null);
  const [assignmentName, setAssignmentName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [points, setPoints] = useState<number | undefined>(undefined);
  const [assignTo, setAssignTo] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');
  const [availableFrom, setAvailableFrom] = useState<string>('');
  const [availableUntil, setAvailableUntil] = useState<string>('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAssignment = () => {
      const foundAssignment = db.assignments.find((a) => a._id === assignmentId);

      if (foundAssignment) {
        setAssignment(foundAssignment);
      } else {
        setAssignment(null); // Handle assignment not found if needed
      }
    };

    fetchAssignment();
  }, [assignmentId]);

  useEffect(() => {
    if (assignment) {
      setAssignmentName(assignment.title);
      setDescription(assignment.description || '');
      setPoints(assignment.points);
      setAssignTo(assignment.assignTo || '');
      setDueDate(assignment.dueDate || '');
      setAvailableFrom(assignment.availableFrom || '');
      setAvailableUntil(assignment.availableUntil || '');
    }
  }, [assignment]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement save logic here

    // Navigate back to the Assignments screen
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4 p-4">
      <h2>Edit Assignment</h2>
      <form onSubmit={handleSave}>
        {/* Assignment Name */}
        <div className="row mb-3">
          <label htmlFor="wd-name" className="col-form-label col-sm-2">Assignment Name</label>
          <div className="col-sm-10">
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
          <label htmlFor="wd-description" className="col-form-label col-sm-2">Description</label>
          <div className="col-sm-10">
            <textarea
              id="wd-description"
              className="form-control"
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        {/* Points */}
        <div className="row mb-3">
          <label htmlFor="wd-points" className="col-form-label col-sm-2">Points</label>
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

        {/* Assign To */}
        <div className="row mb-3">
          <label htmlFor="wd-assign-to" className="col-form-label col-sm-2">Assign To</label>
          <div className="col-sm-10">
            <input
              id="wd-assign-to"
              className="form-control"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              placeholder="Everyone"
            />
          </div>
        </div>

        {/* Due Date */}
        <div className="row mb-3">
          <label htmlFor="wd-due-date" className="col-form-label col-sm-2">Due Date</label>
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

        {/* Available From */}
        <div className="row mb-3">
          <label htmlFor="wd-available-from" className="col-form-label col-sm-2">Available From</label>
          <div className="col-sm-10">
            <input type="date" id="wd-available-from" className="form-control" value={availableFrom} onChange={(e) => setAvailableFrom(e.target.value)} />
          </div>
        </div>

        {/* Available Until */}
        <div className="row mb-3">
          <label htmlFor="wd-available-until" className="col-form-label col-sm-2">Available Until</label>
          <div className="col-sm-10">
            <input type="date" id="wd-available-until" className="form-control" value={availableUntil} onChange={(e) => setAvailableUntil(e.target.value)} />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-success me-2">Save</button>
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
            <button type="button" className="btn btn-secondary">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Editor;
