import { Link } from "react-router-dom";
import db from "./Database";

export default function Dashboard() {
  const courses = db.courses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
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
              <Link
                className="wd-dashboard-course-link text-decoration-none"
                to={`/Kanbas/Courses/${course._id}`}
              >
                <img
                  src="/images/reactjs.png"
                  className="card-img-top"
                  alt="React JS"
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
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
