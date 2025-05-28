import { useState } from 'react';
import '../styles/Education.css';

const Education = () => {
  // State for education data and edit mode
  const [education, setEducation] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: ''
  });
  const [isEditing, setIsEditing] = useState(true);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  // Toggle back to edit mode
  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="education">
      <h2>Education</h2>
      
      {isEditing ? (
        // Edit Mode (Form)
        <form onSubmit={handleSubmit}>
          <label>
            School/University:
            <input
              type="text"
              name="school"
              value={education.school}
              onChange={handleChange}
              placeholder="e.g., Harvard University"
            />
          </label>
          
          <label>
            Degree/Field:
            <input
              type="text"
              name="degree"
              value={education.degree}
              onChange={handleChange}
              placeholder="e.g., Computer Science"
            />
          </label>
          
          <label>
            Start Date:
            <input
              type="date"
              name="startDate"
              value={education.startDate}
              onChange={handleChange}
            />
          </label>
          
          <label>
            End Date:
            <input
              type="date"
              name="endDate"
              value={education.endDate}
              onChange={handleChange}
            />
          </label>
          
          <button type="submit">Save Education</button>
        </form>
      ) : (
        // Preview Mode
        <div className="education-display">
          <p><strong>School:</strong> {education.school}</p>
          <p><strong>Degree:</strong> {education.degree}</p>
          <p><strong>Duration:</strong> {education.startDate} to {education.endDate}</p>
          <button onClick={handleEdit}>Edit Education</button>
        </div>
      )}
    </div>
  );
};

export default Education;