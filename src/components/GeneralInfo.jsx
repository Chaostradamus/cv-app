import { useState } from "react";
import "../styles/GeneralInfo.css";

const GeneralInfo = () => {
  // gen info state set to null and function to update in real time
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isEditing, setIsEditing] = useState(true);

  // updates in real time
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // for future togglign o edit or saved
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="general-info">
      <h2>Personal Information</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              name="name"
              value={generalInfo.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email/Domain:
            <input
              type="email"
              name="email"
              value={generalInfo.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={generalInfo.phone}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Save</button>
        </form>
      ) : (
        <div className="info-display">
          <p>Full Name: {generalInfo.name}</p>
          <p>Email Address: {generalInfo.email}</p>
          <p>Phone #: {generalInfo.phone}</p>
          <button type="button" onClick={handleEdit}>
            Edit Info
          </button>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
