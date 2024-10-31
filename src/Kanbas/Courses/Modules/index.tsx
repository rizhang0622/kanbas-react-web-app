import { useParams } from "react-router";
import db from "../../Database";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import "./style.css";
import { BsGripVertical } from "react-icons/bs";
import { useState } from "react";

export default function Modules() {
  const { cid } = useParams();
  const [modules, setModules] = useState<any[]>(db.modules);
  const [moduleName, setModuleName] = useState("");
  const [showModal, setShowModal] = useState(false); // Manage modal visibility

  const addModule = () => {
    console.log("Adding module:", moduleName);
    setModules([
      ...modules,
      { _id: new Date().getTime().toString(), name: moduleName, course: cid, lessons: [] },
    ]);
    setModuleName("");
  };

  // Define the deleteModule function
  const deleteModule = (moduleId: string) => {
    setModules(modules.filter((m) => m._id !== moduleId));
    console.log("Deleted module with ID:", moduleId);
  };

  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
        showModal={showModal}
        setShowModal={setShowModal} // Pass the function to manage modal visibility
      />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module) => module.course === cid)
          .map((module) => (
            <li
              key={module._id}
              className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary">
                {module.name}
                <ModuleControlButtons
                  moduleId={module._id} // Pass the module ID
                  deleteModule={deleteModule} // Pass the delete function
                />
              </div>
              {module.lessons && module.lessons.length > 0 && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: { _id: string; name: string }) => (
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
