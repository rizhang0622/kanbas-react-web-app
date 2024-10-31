import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import db from "./Database";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;

  const enrolledCourses = courses.filter((course) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser?._id && enrollment.course === course._id
    )
  );

  const isFaculty = currentUser?.role === "FACULTY";

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {isFaculty && (
        <>
          <h5>New Course</h5>
          <button className="btn btn-primary float-end" onClick={addNewCourse}>
            Add
          </button>
          <button className="btn btn-warning float-end me-2" onClick={updateCourse}>
            Update
          </button>

          <input
            className="form-control mb-2"
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            className="form-control"
            value={course.description}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
        </>
      )}
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({enrolledCourses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-5 g-4">
        {enrolledCourses.map((course) => (
          <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
            <div className="wd-dashboard-course-link text-decoration-none text-dark">
              <Link to={`/Kanbas/Courses/${course._id}`}>
                <img
                  src={course.image || "/images/reactjs.png"}
                  className="card-img-top"
                  alt={course.name}
                  width="100%"
                  height={160}
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                  <p className="wd-dashboard-course-title card-text">
                    {course.description.split(" ").slice(0, 10).join(" ")}
                  </p>
                  <button className="btn btn-primary">Go</button>
                  {isFaculty && (
                    <>
                      <button className="btn btn-danger float-end" onClick={() => deleteCourse(course._id)}>
                        Delete
                      </button>
                      <button className="btn btn-warning float-end me-2" onClick={() => setCourse(course)}>
                        Edit
                      </button>
                    </>
                  )}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}
