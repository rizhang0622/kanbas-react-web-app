// src/Kanbas/Courses/Home/Status.tsx
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle, FaCog } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FaBullhorn } from "react-icons/fa";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="p-3 border rounded bg-light" style={{ width: "300px" }}>
      <h2 className="fs-5">Course Status</h2>
      <div className="d-flex mb-2">
        <button className="btn btn-lg btn-secondary me-1">
          <MdDoNotDisturbAlt className="me-2" /> Unpublish
        </button>
        <button className="btn btn-lg btn-success">
          <FaCheckCircle className="me-2" /> Publish
        </button>
      </div>
      <hr />
      <button className="btn btn-lg btn-secondary w-100 mb-1">
        <BiImport className="me-2" /> Import Existing Content
      </button>
      <button className="btn btn-lg btn-secondary w-100 mb-1">
        <LiaFileImportSolid className="me-2" /> Import from Commons
      </button>
      <button className="btn btn-lg btn-secondary w-100 mb-1">
        <FaCog className="me-2" /> Choose Home Page
      </button>
      <button className="btn btn-lg btn-secondary w-100 mb-1">
        <FaBullhorn className="me-2" /> New Announcement
      </button>
      <button className="btn btn-lg btn-secondary w-100 mb-1">
        <FaCheckCircle className="me-2" /> New Analytics
      </button>
      <button className="btn btn-lg btn-secondary w-100 mb-1">
        <AiOutlineShareAlt className="me-2" /> View Course Stream
      </button>
      <button className="btn btn-lg btn-secondary w-100 mb-1">
        <AiOutlineShareAlt className="me-2" /> View Course Notifications
      </button>
    </div>
  );
}
