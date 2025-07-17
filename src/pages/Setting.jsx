import React, { useState, useEffect } from "react";
import "./Setting.css"; // Importing external CSS

const Settings = () => {
    const [formData, setFormData] = useState({
        username: "Your Name",
        bio: "Tell something about yourself...",
        email: "example@example.com",
        profileImage: "",
        website: "",
        twitter: "",
        discord: "",
        walletAddress: "0x...",
        notifications: true,
    });

    const [isEditing, setIsEditing] = useState(false);

    // Load saved data from localStorage on component mount
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("settingsData"));
        if (savedData) {
            setFormData(savedData);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevData) => ({ ...prevData, profileImage: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        localStorage.setItem("settingsData", JSON.stringify(formData));
        setIsEditing(false);
    };

    return (
        <div className="settings-container">
            {/* Profile Section */}
            <div className="profile-header">
                <img
                    src={formData.profileImage || "https://via.placeholder.com/120"}
                    alt="Profile Preview"
                    className="profile-image-preview"
                />
                <h2 className="profile-username">{formData.username}</h2>
                <p className="profile-bio">{formData.bio}</p>
            </div>

            {/* Profile Details */}
            <div className="settings-card">
                {isEditing ? (
                    <>
                        <div className="form-group image-group">
                            <label>Profile Image</label>
                            <input type="file" name="profileImage" onChange={handleImageChange} />
                        </div>

                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Enter your username"
                            />
                        </div>
                        <div className="form-group">
                            <label>Bio</label>
                            <textarea
                                name="bio"
                                value={formData.bio}
                                onChange={handleChange}
                                placeholder="Tell us about yourself"
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="form-group">
                            <label>Website</label>
                            <input
                                type="text"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                placeholder="Your website URL"
                            />
                        </div>
                        <div className="form-group">
                            <label>Twitter</label>
                            <input
                                type="text"
                                name="twitter"
                                value={formData.twitter}
                                onChange={handleChange}
                                placeholder="Twitter handle"
                            />
                        </div>
                        <div className="form-group">
                            <label>Discord</label>
                            <input
                                type="text"
                                name="discord"
                                value={formData.discord}
                                onChange={handleChange}
                                placeholder="Discord username"
                            />
                        </div>
                        <div className="form-group">
                            <label>Wallet Address</label>
                            <input type="text" name="walletAddress" value={formData.walletAddress} disabled />
                        </div>
                        <div className="form-group checkbox-group">
                            <input
                                type="checkbox"
                                name="notifications"
                                checked={formData.notifications}
                                onChange={handleChange}
                            />
                            <label>Enable Email Notifications</label>
                        </div>
                        <button className="save-btn" onClick={handleSave}>Save Changes</button>
                    </>
                ) : (
                    <>
                        <div className="profile-details">
                            <p><strong>Email:</strong> {formData.email}</p>
                            <p><strong>Website:</strong> {formData.website || "Not Provided"}</p>
                            <p><strong>Twitter:</strong> {formData.twitter || "Not Provided"}</p>
                            <p><strong>Discord:</strong> {formData.discord || "Not Provided"}</p>
                            <p><strong>Wallet:</strong> {formData.walletAddress}</p>
                            <p><strong>Notifications:</strong> {formData.notifications ? "Enabled" : "Disabled"}</p>
                        </div>
                        <button className="edit-btn" onClick={() => setIsEditing(true)}>Update Profile</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Settings;
