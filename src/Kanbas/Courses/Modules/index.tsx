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

  const deleteModule = (moduleId: string) => {
    setModules(modules.filter((m) => m._id !== moduleId));
    console.log("Deleted module with ID:", moduleId);
  };

  const editModule = (moduleId: string) => {
    setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
  };

  const updateModule = (module: any) => {
    setModules(modules.map((m) => (m._id === module._id ? module : m)));
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
                {module.editing ? (
                  <input
                    className="form-control w-50 d-inline-block"
                    defaultValue={module.name}
                    onChange={(e) => updateModule({ ...module, name: e.target.value })}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        updateModule({ ...module, editing: false });
                      }
                    }}
                  />
                ) : (
                  <>
                    <BsGripVertical className="me-2 fs-3" />
                    {module.name}
                  </>
                )}
                <ModuleControlButtons
                  moduleId={module._id} // Pass the module ID
                  deleteModule={deleteModule} // Pass the delete function
                  editModule={editModule} // Pass the edit function
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
