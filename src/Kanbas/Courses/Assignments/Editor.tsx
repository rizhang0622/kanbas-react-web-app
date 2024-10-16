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
    <div>
      <h2>Edit Assignment</h2>
      <form onSubmit={handleSave}>
        <div>
          <label>Assignment Name:</label>
          <input
            type="text"
            value={assignmentName}
            onChange={(e) => setAssignmentName(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Points:</label>
          <input
            type="number"
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Assign To:</label>
          <input
            type="text"
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
          />
        </div>
        <div>
          <label>Due Date:</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div>
          <label>Available From:</label>
          <input
            type="date"
            value={availableFrom}
            onChange={(e) => setAvailableFrom(e.target.value)}
          />
        </div>
        <div>
          <label>Available Until:</label>
          <input
            type="date"
            value={availableUntil}
            onChange={(e) => setAvailableUntil(e.target.value)}
          />
        </div>
        <button type="submit">Save</button>
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
          <button type="button">Cancel</button>
        </Link>
      </form>
    </div>
  );
};

export default Editor;
