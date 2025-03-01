import React, { useState } from "react";
import "./Setting.css"; // Importing external CSS

const Settings = () => {
    const [formData, setFormData] = useState({
        username: "",
        bio: "",
        email: "",
        profileImage: "",
        bannerImage: "",
        website: "",
        twitter: "",
        discord: "",
        walletAddress: "0x...",
        notifications: true,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, profileImage: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="settings-container">
            <h2 className="settings-title">Settings</h2>
            <div className="settings-card">
                <div className="form-group image-group">
                    <label>Profile Image</label>
                    <input type="file" name="profileImage" onChange={handleImageChange} />
                    {formData.profileImage && (
                        <img
                            src={formData.profileImage}
                            alt="Profile Preview"
                            className="profile-image-preview"
                        />
                    )}
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
                <button className="save-btn">Save Changes</button>
            </div>
        </div>
    );
};

export default Settings;
