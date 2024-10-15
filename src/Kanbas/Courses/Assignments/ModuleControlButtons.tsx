import { FaPlus } from "react-icons/fa";

export default function ModuleControlButtons() {
  return (
    <div>
      <button id="wd-add-assignment-group" className="btn btn-light me-2">
        <FaPlus /> Group
      </button>
      <button id="wd-add-assignment" className="btn btn-danger">
        <FaPlus /> Assignment
      </button>
    </div>
  );
}
