import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa"; // Import the trash icon
import { FaPencil } from "react-icons/fa6"; // Import the pencil icon
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  return (
    <div className="float-end">
      <FaPencil
        onClick={() => editModule(moduleId)} // Call editModule on click
        className="text-primary me-3"
      />
      <FaTrash
        className="text-danger me-2 mb-1"
        onClick={() => deleteModule(moduleId)} // Call deleteModule on click
      />
      <GreenCheckmark />
      <BsPlus className="fs-4 me-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
