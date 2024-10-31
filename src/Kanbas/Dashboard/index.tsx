import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="row row-cols-1 row-cols-md-5 g-4"
      >
        {/* Course 1 */}
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="wd-dashboard-course-link text-decoration-none text-dark">
            <Link
              className="wd-dashboard-course-link text-decoration-none"
              to="/Kanbas/Courses/1234"
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
                  CS1234 React JS
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack Software Developer
                </p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 2 */}
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="wd-dashboard-course-link text-decoration-none text-dark">
            <Link
              className="wd-dashboard-course-link text-decoration-none"
              to="/Kanbas/Courses/5678"
            >
              <img
                src="/images/js.png"
                className="card-img-top"
                alt="JavaScript"
                width="100%"
                height={160}
              />

              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS5678 JavaScript
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Web Development Basics
                </p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="wd-dashboard-course-link text-decoration-none text-dark">
            <Link
              className="wd-dashboard-course-link text-decoration-none"
              to="/Kanbas/Courses/9101"
            >
              <img
                src="/images/python.jpeg"
                className="card-img-top"
                alt="Python"
                width="100%"
                height={160}
              />

              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS9101 Python Programming
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Data Science and Machine Learning
                </p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 4 */}
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="wd-dashboard-course-link text-decoration-none text-dark">
            <Link
              className="wd-dashboard-course-link text-decoration-none"
              to="/Kanbas/Courses/1121"
            >
              <img
                src="/images/java.jpeg"
                className="card-img-top"
                alt="Java"
                width="100%"
                height={160}
              />

              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1121 Java Programming
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Object-Oriented Development
                </p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 5 */}
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="wd-dashboard-course-link text-decoration-none text-dark">
            <Link
              className="wd-dashboard-course-link text-decoration-none"
              to="/Kanbas/Courses/3141"
            >
              <img
                src="/images/htmlcss.png"
                className="card-img-top"
                alt="HTML & CSS"
                width="100%"
                height={160}
              />

              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS3141 HTML & CSS
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Frontend Web Design
                </p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 6 */}
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="wd-dashboard-course-link text-decoration-none text-dark">
            <Link
              className="wd-dashboard-course-link text-decoration-none"
              to="/Kanbas/Courses/5161"
            >
              <img
                src="/images/sql.png"
                className="card-img-top"
                alt="SQL"
                width="100%"
                height={160}
              />

              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS5161 SQL Databases
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Database Management Systems
                </p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 7 */}
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="wd-dashboard-course-link text-decoration-none text-dark">
            <Link
              className="wd-dashboard-course-link text-decoration-none"
              to="/Kanbas/Courses/7181"
            >
              <img
                src="/images/nodejs.png"
                className="card-img-top"
                alt="Node.js"
                width="100%"
                height={160}
              />

              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS7181 Node.js
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Backend Development
                </p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
