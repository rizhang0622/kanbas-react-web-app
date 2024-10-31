import { RxCircleBackslash } from "react-icons/rx";
import { FaFileImport } from "react-icons/fa";
import { TbArrowRightToArc } from "react-icons/tb";
import { GiArrowScope } from "react-icons/gi";
import { VscGraph } from "react-icons/vsc";
import { GoMegaphone } from "react-icons/go";
import { GoBell } from "react-icons/go";
import { FaCheckCircle, FaCog } from "react-icons/fa";


export default function CourseStatus() {
  return (
    <div
      id="wd-course-status"
      className="p-3 border rounded bg-light"
      style={{ width: "300px" }}
    >
      <h2 className="fs-5">Course Status</h2>
      <div className="d-flex mb-2">
        <button className="btn btn-lg btn-secondary me-1 text-start">
          <RxCircleBackslash className="me-2" /> Unpublish
        </button>
        <button className="btn btn-lg btn-success text-start">
          <FaCheckCircle className="me-2" /> Published
        </button>
      </div>
      <hr />
      <button className="btn btn-lg btn-secondary w-100 mb-1 text-start">
        <FaFileImport className="me-2" /> Import Existing Content
      </button>
      <button className="btn btn-lg btn-secondary w-100 mb-1 text-start">
        <TbArrowRightToArc className="me-2" /> Import from Commons
      </button>
      <button className="btn btn-lg btn-secondary w-100 mb-1 text-start">
        <GiArrowScope className="me-2" /> Choose Home Page
      </button>

      <button className="btn btn-lg btn-secondary w-100 mb-1 text-start">
        <VscGraph className="me-2" /> View Course Stream
      </button>
      <button className="btn btn-lg btn-secondary w-100 mb-1 text-start">
        <GoMegaphone className="me-2" /> New Announcement
      </button>
      <button className="btn btn-lg btn-secondary w-100 mb-1 text-start">
        <VscGraph className="me-2" /> New Analytics
      </button>

      <button className="btn btn-lg btn-secondary w-100 mb-1 text-start">
        <GoBell className="me-2" /> View Course Notifications
      </button>
    </div>
  );
}
