import { useParams } from "react-router";
import db from "../../Database";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import "./style.css";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
  const { cid } = useParams(); // Get the course ID from the URL
  const modules = db.modules; // Retrieve all modules from the database

  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module) => module.course === cid) // Filter modules for the current course
          .map((module) => (
            <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                {module.name}
                <ModuleControlButtons />
              </div>
              {module.lessons && module.lessons.length > 0 && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson) => (
                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
