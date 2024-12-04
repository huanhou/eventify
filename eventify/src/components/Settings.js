import React, { useState } from "react";

const Settings = ({ profileInfo, onEdit }) => {
  const [formData, setFormData] = useState(profileInfo || {});
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(formData);
    setSuccessMessage("Profile updated successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h2>Profile Settings</h2>
      </div>
      <form className="settings-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name || ""}
          onChange={handleInputChange}
          className="settings-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email || ""}
          onChange={handleInputChange}
          className="settings-input"
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile || ""}
          onChange={handleInputChange}
          className="settings-input"
        />
        <input
          type="text"
          name="hobbies"
          placeholder="Hobbies (comma-separated)"
          value={formData.hobbies || ""}
          onChange={handleInputChange}
          className="settings-input"
        />
        <button type="submit" className="settings-button">
          Save Changes
        </button>
        {successMessage && <p className="settings-success">{successMessage}</p>}
      </form>
    </div>
  );
};

export default Settings;
