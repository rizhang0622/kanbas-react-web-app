import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234">
            <img src="/images/reactjs.png" width={200} alt="React JS" />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack Software Developer
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5678">
            <img src="/images/js.png" width={200} alt="JavaScript" />
            <div>
              <h5>CS5678 JavaScript</h5>
              <p className="wd-dashboard-course-title">
                Web Development Basics
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/9101">
            <img src="/images/python.jpeg" width={200} alt="Python" />
            <div>
              <h5>CS9101 Python Programming</h5>
              <p className="wd-dashboard-course-title">
                Data Science and Machine Learning
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1121">
            <img src="/images/java.jpeg" width={200} alt="Java" />
            <div>
              <h5>CS1121 Java Programming</h5>
              <p className="wd-dashboard-course-title">
                Object-Oriented Development
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/3141">
            <img src="/images/htmlcss.png" width={200} alt="HTML & CSS" />
            <div>
              <h5>CS3141 HTML & CSS</h5>
              <p className="wd-dashboard-course-title">Frontend Web Design</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5161">
            <img src="/images/sql.png" width={200} alt="SQL" />
            <div>
              <h5>CS5161 SQL Databases</h5>
              <p className="wd-dashboard-course-title">
                Database Management Systems
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/7181">
            <img src="/images/nodejs.png" width={200} alt="Node.js" />
            <div>
              <h5>CS7181 Node.js</h5>
              <p className="wd-dashboard-course-title">Backend Development</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
