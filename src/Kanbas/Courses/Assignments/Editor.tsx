export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <h2>Assignment Name</h2>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />

      <label htmlFor="wd-description">Description</label>
      <textarea
        id="wd-description"
        defaultValue="The assignment is available online. Submit a link to the landing page of..."
      />
      <br />

      <label htmlFor="wd-points">Points</label>
      <input id="wd-points" defaultValue={100} />
      <br />

      <label htmlFor="wd-group">Assignment Group</label>
      <select id="wd-group">
        <option>Group 1</option>
        <option>Group 2</option>
        <option>Group 3</option>
      </select>
      <br />

      <label htmlFor="wd-display-grade-as">Display Grade As:</label>
      <select id="wd-display-grade-as">
        <option>Percentage</option>
        <option>Points</option>
      </select>
      <br />

      <label htmlFor="wd-submission-type">Submission Type:</label>
      <select id="wd-submission-type">
        <option>Online</option>
        <option>Offline</option>
      </select>
      <br />

      <div>
        <strong>Online Entry Options:</strong>
        <br />
        <label>
          <input type="checkbox" id="wd-text-entry" /> Text entry
        </label>
        <br />
        <label>
          <input type="checkbox" id="wd-website-url" /> Website Url
        </label>
        <br />
        <label>
          <input type="checkbox" id="wd-media-recordings" /> Media Recordings
        </label>
        <br />
        <label>
          <input type="checkbox" id="wd-student-annotation" /> Student
          Annotation
        </label>
        <br />
        <label>
          <input type="checkbox" id="wd-file-upload" /> File Uploads
        </label>
        <br />
      </div>

      <label htmlFor="wd-assign-to">Assign to:</label>
      <input id="wd-assign-to" defaultValue="Everyone" />
      <br />

      <label htmlFor="wd-due-date">Due:</label>
      <input type="date" id="wd-due-date" />
      <br />

      <label htmlFor="wd-available-from">Available From:</label>
      <input type="date" id="wd-available-from" />

      <label htmlFor="wd-available-until">Available Until:</label>
      <input type="date" id="wd-available-until" />
      <br />
      <br />

      <button id="wd-cancel">Cancel</button>
      <button id="wd-save">Save</button>
    </div>
  );
}
