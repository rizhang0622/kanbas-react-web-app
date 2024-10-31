import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "./Database";

export default function Dashboard() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const addNewCourse = () => {
    const newCourse = { ...course, _id: new Date().getTime().toString() };
    setCourses([...courses, newCourse]);
    resetForm();
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((c) => c._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(courses.map((c) => (c._id === course._id ? course : c)));
    resetForm();
  };

  const resetForm = () => {
    setCourse({
      _id: "0",
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      image: "/images/reactjs.jpg",
      description: "New Description",
    });
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
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

      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="row row-cols-1 row-cols-md-5 g-4"
      >
        {courses.map((course) => (
          <div
            className="wd-dashboard-course col"
            style={{ width: "300px" }}
            key={course._id}
          >
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
                  <h5 className="wd-dashboard-course-title card-title">
                    {course.name}
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    {course.description.split(" ").slice(0, 10).join(" ")}
                  </p>
                  <button className="btn btn-primary">Go</button>

                  <button
                    className="btn btn-danger float-end"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-warning float-end me-2"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>
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
