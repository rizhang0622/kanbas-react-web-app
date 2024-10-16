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
      <div className="row g-4">
        {courses.map((course) => (
          <div key={course._id} className="col-12 col-md-6 col-lg-3">
            <div className="card">
              <Link
                className="wd-dashboard-course-link text-decoration-none"
                to={`/Kanbas/Courses/${course._id}/Home`} 
              >
                <img src="/images/reactjs.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="card-title">{course.name}</h5>
                  <p className="card-text">{course.description}</p>
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
