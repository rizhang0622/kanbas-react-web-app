import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import "./style.css";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            Week 1
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              Introduction to the course
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              Learn what is Web Development
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              LESSON 1
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              LESSON 2
              <LessonControlButtons />
            </li>
          </ul>
        </li>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            Week 2
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              LESSON 1
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              LESSON 2
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
