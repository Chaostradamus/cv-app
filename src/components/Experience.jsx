import { useState } from "react";

import "../styles/Experience.css";

const Experience = () => {
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });
  const [isEditing, setIsEditing] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  // Toggle edit mode
  const handleEdit = () => {
    setIsEditing(true);
  };
};
