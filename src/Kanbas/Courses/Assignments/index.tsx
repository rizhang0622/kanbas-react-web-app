import { FaSearch } from "react-icons/fa";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import AssignmentItem from "./AssignmentItem";

export default function Assignments() {
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
        <ModuleControlButtons />
      </div>

      <h3 id="wd-assignments-title">
        ASSIGNMENTS <span className="text-muted">40% of Total</span>
        <button className="btn btn-secondary float-end">+</button>
      </h3>

      <ul id="wd-assignment-list" className="list-group">
        {[
          "A1 - ENV + HTML",
          "A2 - CSS + BOOTSTRAP",
          "A3 - JAVASCRIPT + REACT",
        ].map((assignment, index) => (
          <AssignmentItem key={index} title={assignment} index={index} />
        ))}
      </ul>
    </div>
  );
}
