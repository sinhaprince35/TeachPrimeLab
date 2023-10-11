import React, { useEffect, useState } from "react";
import '../Styles/projects.css';

const Projects = () => {
  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    let day = currentDate.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const [project, setProject] = useState({
    theme: "",
    reason: "",
    type: "",
    division: "",
    category: "",
    priority: "",
    department: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleSaveProject = (e) => {
    e.preventDefault();
    console.log("Project:", project);
    // Save the project or perform any other actions
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="Form_parent">
      <form onSubmit={handleSaveProject}>
        <div className="project-theme">
          <div>
            <input
              className="ProjectTheme"
              placeholder="Enter Project Theme"
              type="text"
              name="theme"
              value={project.theme}
              onChange={handleInputChange}
              required
            />
          </div>
          {!isMobile && (
            <div className="save-button Pc">
              <button type="submit">Save Project</button>
            </div>
          )}
        </div>
        <div className="input_parent">
          <div>
            <div>
              <label>
                Reason
                <select
                  name="reason"
                  value={project.reason}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a reason</option>
                  {/* Add options for the reason */}
                </select>
              </label>
            </div>
            <div>
              <label>
                Type
                <select
                  name="type"
                  value={project.type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a type</option>
                  {/* Add options for the type */}
                </select>
              </label>
            </div>
            <div>
              <label>
                Division
                <select
                  name="division"
                  value={project.division}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a division</option>
                  {/* Add options for the division */}
                </select>
              </label>
            </div>
          </div>

          <div>
            <div>
              <label>
                Category
                <select
                  name="category"
                  value={project.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a category</option>
                  {/* Add options for the category */}
                </select>
              </label>
            </div>
            <div>
              <label>
                Priority
                <select
                  name="priority"
                  value={project.priority}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a priority</option>
                  {/* Add options for the priority */}
                </select>
              </label>
            </div>
            <div>
              <label>
                Department
                <select
                  name="department"
                  value={project.department}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a department</option>
                  {/* Add options for the department */}
                </select>
              </label>
            </div>
          </div>

          <div>
            <div>
              <label>
                Start Date as per Project Plan
                <input
                  type="date"
                  name="startDate"
                  value={project.startDate}
                  min={getCurrentDate()} // Set the minimum value of the start date to the current date
                  max={project.endDate} // Set the maximum value of the start date to the end date
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                End Date as per Project Plan
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={project.endDate}
                  min={project.startDate} // Set the minimum value of the end date to the start date
                  onChange={handleInputChange}
                  disabled={!project.startDate}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Location
                <select
                  name="location"
                  value={project.location}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a location</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        {isMobile && (
          <div className="save-button mobile">
            <button type="submit">Save Project</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Projects;
