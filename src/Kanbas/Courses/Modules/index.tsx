export default function Modules() {
  return (
    <div>
      <div className="wd-buttons">
        <button>Collapse All</button>
        <button>View Progress</button>
        <div className="wd-publish-dropdown">
          <button>Publish All</button>
          <div className="dropdown-content">
            <button>Publish All Modules</button>
          </div>
        </div>
        <button>+ Module</button>
      </div>{" "}
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Learn what is Web Development
                </li>
                <li className="wd-content-item">
                  Understanding HTML, CSS, and JavaScript
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">Chapter 1: Introduction</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Week 1 Slides</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Understand HTML Basics</li>
              </ul>
            </li>
          </ul>
        </li>
        {/* Add more modules as needed */}
      </ul>
    </div>
  );
}
